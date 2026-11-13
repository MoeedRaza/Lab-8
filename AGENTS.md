# Repository Guidelines

## Project Structure

The existing storefront pages and shared `style.css` are at the repository root with game artwork. `store.js` provides browser-side API helpers. The NestJS backend is under `backend/src`: `products`, `categories`, `cart`, and `orders` each contain a module, controller, and service; `app.module.ts` imports them and `main.ts` starts the server. The earlier Express implementation remains in `backend/server.js`; the npm scripts use NestJS.

## Build and Run

From `backend/`, use `npm install`, `npm run build`, and `npm start`. The API defaults to port 3000. Serve the frontend from the repository root, for example with `python -m http.server 5500`, and open `http://localhost:5500`.

## Style and API Conventions

Use TypeScript and standard NestJS decorators. Keep request routing in controllers and data handling in services. Use two-space indentation and descriptive camelCase names. Keep storefront changes in plain HTML/CSS/JavaScript and reuse `style.css`.

## Testing

No automated test runner is configured. Run `npm run build`, exercise relevant GET and POST endpoints at `http://localhost:3000`, and check connected storefront flows. See `TEST_CASES.md` for examples. Service data resets on backend restart.

## Contributions and Configuration

Use concise imperative commit messages (for example, `Connect product details to API`). Describe behavior and manual checks in pull requests; include screenshots for visual changes. The NestJS lab API needs no database or authentication secret. `PORT` is optional; do not commit credentials or customer data.
