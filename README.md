

# React E‑commerce App (Vite)

A responsive e‑commerce frontend built with React, Vite, Redux Toolkit, Tailwind CSS, and Axios. It implements authentication, product browsing with category filters and infinite scrolling, and a cart synced to a Laravel backend API.

## Features

- Authentication with register and login using JWT headers [1]
- Product listing with category filters and infinite scrolling for seamless UX [1]
- Cart: view, add, and remove items with server persistence [1]
- Tailwind-based UI blocks for consistent, mobile‑first design [1]
- Redux Toolkit slices and async thunks for API calls and state [1]

## Tech Stack

- Vite + React 18 [1]
- Redux Toolkit + React Redux [1]
- Tailwind CSS [1]
- Axios with interceptor for Authorization header [1]
- React Router (optional) [1]

## API Endpoints

Base URL: set via env: VITE_API_BASE_URL=https://digitalmarketingstudiogenix.com/react_task/api [1]

- POST /user/register — register user [1]
- POST /user/login — login and get token [1]
- GET /products — list products (supports pagination) [1]
- GET /products/category/:id — products by category [1]
- GET /cart/:user_id — get cart items [1]
- POST /cart/add — add item { user_id, product_id } [1]
- DELETE /cart/remove/:id — remove cart item [1]

## Getting Started

Prerequisites: Node.js 16+ and npm or yarn installed [1]

1) Install
- npm install [1]

2) Env
- Create .env and set:
  - VITE_API_BASE_URL=https://digitalmarketingstudiogenix.com/react_task/api [1]

3) Run Dev
- npm run dev (defaults to http://localhost:5173) [1]

4) Build
- npm run build (outputs to dist/) [1]

5) Preview Prod Build
- npm run preview [1]

## Project Structure

- src/components — reusable UI blocks (cards, forms, navbar, cart drawer) [1]
- src/pages — Home, Login, Register, Category, Cart [1]
- src/store — Redux slices (user, products, categories, cart) and store.ts [1]
- src/utils/axiosInstance.ts — Axios baseURL + auth interceptor [1]
- src/App.tsx — routes and shell layout [1]

## Redux Slices

- userSlice: registerUser, loginUser, token storage and logout [1]
- productsSlice: fetchProducts({page,limit}), fetchByCategory(id), infinite append + hasMore [1]
- categoriesSlice: fetchCategories() [1]
- cartSlice: fetchCart(userId,{page,limit}), addToCart({userId,productId}), removeFromCart(id) [1]

## Infinite Scrolling

- IntersectionObserver on the last grid item triggers next page dispatch for products and cart lists [1]
- Slice keeps page, limit, loading, and hasMore to prevent duplicate fetches [1]

## Scripts

- dev: start Vite dev server [1]
- build: production build [1]
- preview: preview dist locally [1]
- lint/format: optional if configured [1]

## Styling

- Tailwind config with @tailwind base, components, utilities in src/index.css [1]
- UI assembled from section/block components for hero, flash sales slider, category rail, grids, and cart sidebar [1]

## Security

- JWT stored in localStorage, injected via Axios Authorization: Bearer <token> interceptor [1]
- Logout clears token and Redux user state [1]

## Notes

- Ensure backend CORS allows your dev origin (http://localhost:5173) [1]
- If categories aren’t a separate endpoint, derive from product payload or request backend support [1]
- For production, serve dist/ from a static host and point VITE_API_BASE_URL to the live API [1]

## License

MIT. Contributions welcome via PRs and issues. [1]

