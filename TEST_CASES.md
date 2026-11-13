# Lootify Test Cases

These manual checks cover the NestJS API and the frontend flows connected to it. Start with a fresh backend process to reset in-memory data. The initial state contains 11 products, three categories, an empty cart, and no orders.

## Setup

1. In `backend/`, run `npm install`, `npm run build`, and `npm start`.
2. Confirm the terminal says `Lootify API is running at http://localhost:3000`.
3. Serve the project root with `python -m http.server 5500`; open `http://localhost:5500`.
4. In Postman, use base URL `http://localhost:3000`; for POST requests choose Body → raw → JSON.

If Postman reports `ECONNREFUSED 127.0.0.1:3000`, the API is not listening. Start the backend and leave its terminal open. If PowerShell blocks `npm`, use `npm.cmd`.

## API checks

| ID | Request | Expected result |
| --- | --- | --- |
| API-01 | Run `npm run build` from `backend/`. | Build exits successfully. |
| API-02 | `GET /products` | HTTP 200 and 11 seeded products. |
| API-03 | `GET /products/1` | Valorant product JSON, including price 5490. |
| API-04 | `GET /products/999` | HTTP 404, product not found. |
| API-05 | `POST /products` body `{"game":"Test Game","name":"Test Pack","category":"FPS","price":100}`, then GET `/products/12`. | New product is returned and available through GET. |
| API-06 | `GET /categories` | HTTP 200 with FPS, MOBA, Sports. |
| API-07 | `POST /categories` body `{"name":"RPG"}`, then GET `/categories`. | RPG appears in the returned list. |
| API-08 | After restart, `GET /cart`. | Empty array. |
| API-09 | `POST /cart` body `{"productId":1,"quantity":2}`, then GET `/cart`. | Valorant has quantity 2 and line total 10980. |
| API-10 | POST the same product with quantity 1, then GET `/cart`. | Quantity is 3 and line total 16470. |
| API-11 | `POST /cart` body `{"productId":999,"quantity":1}`. | HTTP 404, product not found. |
| API-12 | After restart, `GET /orders`. | Empty array. |
| API-13 | POST an order JSON object to `/orders`, then GET `/orders` and `/cart`. | Order appears and cart is cleared. |

Example order JSON:

```json
{
  "customer": { "firstName": "Sam", "lastName": "Player", "email": "sam@example.com" },
  "items": [{ "productId": 1, "name": "2,050 Valorant Points", "quantity": 1, "total": 5490 }],
  "subtotal": 5490,
  "serviceFee": 100,
  "total": 5590
}
```

## Frontend checks

| ID | Action | Expected result |
| --- | --- | --- |
| UI-01 | Open `index.html`, `products.html`, `product.html`, `cart.html`, and `checkout.html` through the local server. | All pages load and retain the Lootify layout. |
| UI-02 | Open `products.html` with the API running. | Product names/prices and categories load; each card has Add to Cart. |
| UI-03 | Search for `Rocket League`, then choose `MOBA`. | Search and category filters show only matching cards. |
| UI-04 | Open a non-first product's View Package link and add quantity 2. | Detail data matches that product and cart receives it. |
| UI-05 | Open `cart.html`. | Cart item, quantity, line total, subtotal, fee, and total are displayed. |
| UI-06 | Submit checkout with first name, last name, email, and username filled in. | Success notice shows the order ID; GET `/orders` contains it and GET `/cart` is empty. |
| UI-07 | Stop the API and reload the marketplace. | Page still loads and shows an API-unavailable notice. |

Authentication, database persistence, update/delete routes, and payment processing are out of scope for this lab.
