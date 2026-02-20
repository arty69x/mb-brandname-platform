# MB BRANDNAME — Backend Infrastructure & Data Governance

## I. Overview

The MB BRANDNAME "Backend" is a high-fidelity simulated architecture designed for seamless prototyping and real-time data persistence within the Next.js runtime. It utilizes a centralized `MockDB` pattern to manage the boutique's digital bounty and customer transactions.

## II. Data Models

### 1. `Product` Archive

Representing an authenticated luxury item.

- **Attributes**: `id`, `name`, `brand`, `category`, `price`, `image`, `description` (EN/TH), `stock`, `featured`, `newArrival`.
- **Metadata**: `condition` (Japanese Grade), `dimensions`, `period`.

### 2. `Order` Records

Managing customer acquisition and fulfillment.

- **Attributes**: `id`, `userId`/`guestId`, `items` (OrderItem[]), `total`, `status` (`pending`, `shipped`, `delivered`, `cancelled`), `createdAt`.
- **Shipping**: Structured object containing name, street, city, postal code, and country.

### 3. `Settings` Configuration

Orchestrating platform behavior and appearance.

- **Attributes**: `platformName`, `maintenanceMode`, `contactEmail`, `socialLinks`, `seoMetadata`.

## III. Data Governance (`MockDB`)

The `MockDB` class (located in `@/lib/db.ts`) acts as the single source of truth:

- **Relational Simulation**: Links orders to products and users via unique ID keys.
- **Advanced Querying**: Implements multi-parameter filtering for the frontend search engine (brand, keyword, status, sorting).
- **In-Memory Persistence**: Maintains state across page transitions using a singleton pattern. State resets upon full page refresh (hard-reload) unless bridged to `localStorage`.

## IV. Administrative Suite: "The Vault Control"

Accessed via `/backend`, this management layer allows boutique administrators to govern all aspects of the platform.

### 1. Catalog Management

- **Audit**: CRUD operations for the entire product and category library.
- **Metadata Control**: Real-time toggling of `Featured` and `New Arrival` spotlights.

### 2. Marketplace Operations

- **Order Processing**: Visibility into all customer orders with the ability to update shipping status.
- **Status Workflow**: Tracks the lifecycle of a purchase from "Pending" to "Delivered".

### 3. System Orchestration

- **Hero Config**: Editable homepage carousel configuration (images/videos/titles).
- **Settings**: Global platform configuration (Contact info, Social links, System status).

## V. Security & Authentication

- **Admin Access**: Protected via `AuthContext`. Default credentials: `admin@mb-brandname.com` / `admin123`.
- **API Protection**: Backend API routes verify administrative privilege before allowing data mutation.
- **SEO/Robots**: `robots.txt` ensures private dashboards are excluded from search engine indices.

---

_MB BRANDNAME — Powered by Precision._

