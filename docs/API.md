# MB BRANDNAME — API Communication Layer

## I. Communication Protocol

The API layer acts as the high-fidelity bridge between the Next.js frontend and the `MockDB`. It implements a robust `fetch`-based interface that mimics professional asynchronous service layers.

## II. Service Methodology

All API calls are wrapped in `async/await` blocks with built-in error handling and status logging.

### Base Configuration

- **Base URL**: `/api` (Internal Next.js Routes)
- **Content Type**: `application/json`

## III. Endpoint Specification

### 1. Products Archive

- `GET /api/products`: Retrieves the full collection or a filtered subset.
  - **Query Parameters**:
    - `category`: Filter by category slug (e.g., `bags`, `accessories`).
    - `brand`: Filter by specific brand name (e.g., `Chanel`).
    - `search`: Global search string (matches name, brand, description).
    - `featured`: Filter by featured status (`true`).
    - `newArrival`: Filter by new arrival status (`true`).
    - `sort`: `price_asc`, `price_desc`, or `newest`.
- `GET /api/products/[id]`: Retrieves a specific archive item.
- `POST /api/products`: Registers a new item (Admin only).
- `PUT /api/products/[id]`: Amends metadata for an existing item (Admin only).
- `DELETE /api/products/[id]`: Purges an item from the gallery (Admin only).

### 2. Category Taxonomy

- `GET /api/categories`: Retrieves all available collection headers.
- `POST /api/categories`: Creates a new category.
- `PUT /api/categories/[id]`: Updates category metadata.

### 3. Hero Visuals

- `GET /api/hero-slides`: Retrieves the current storytelling sequences for the homepage.
- `PUT /api/hero-slides/[id]`: Updates cinematic configuration.

### 4. Order Management

- `GET /api/orders`: Retrieves all orders (Admin) or user-specific orders via `?userId=X`.
- `POST /api/orders`: Submits a new order during checkout.
- `PUT /api/orders/[id]`: Updates order status (Pending, Shipped, Delivered).

## IV. Technical Usage

The frontend utilizes a unified `api-client.ts` located in `@/lib/api-client` to interact with these endpoints, ensuring consistent error handling and type safety across the platform.

## V. Future Scalability

The API architecture is designed for "hot-swapping." By replacing the Next.js API route handlers with a production-grade external API (e.g., Node/Express, Python/FastAPI), the frontend remains decoupled and functional without logic modifications.

---

_MB BRANDNAME — Connecting Archive to Access._

