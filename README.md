# Lootify Store

Lootify is a static e-commerce storefront with a beginner-friendly NestJS REST API. Product, category, cart, and order records are held in memory and reset whenever the API restarts.

## Run locally

Start the backend in one PowerShell terminal:

```powershell
cd "D:\AIR\Air-5\Full Stack Web Development Lab\Lab 8\backend"
npm install
npm run build
npm start
```

Leave it running at `http://localhost:3000`. In a second terminal, serve the existing frontend:

```powershell
cd "D:\AIR\Air-5\Full Stack Web Development Lab\Lab 8"
python -m http.server 5500
```

Open `http://localhost:5500`. Frontend API requests use `http://localhost:3000`.

## API routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/products` | List the seeded products |
| GET | `/products/:id` | Get one product |
| POST | `/products` | Add a product JSON object |
| GET / POST | `/categories` | List categories / add `{ "name": "RPG" }` |
| GET / POST | `/cart` | View cart / add `{ "productId": 1, "quantity": 1 }` |
| GET / POST | `/orders` | List orders / add an order JSON object |

The marketplace supports API-backed product search, category filtering, product details, and add-to-cart. Cart and checkout pages display current API data. Login and signup remain static pages; authentication is outside this lab's scope. See [TEST_CASES.md](TEST_CASES.md) for manual verification steps.
