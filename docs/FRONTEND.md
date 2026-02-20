# MB BRANDNAME — Frontend Architectural Blueprint

## I. Overarching Philosophy

The MB BRANDNAME frontend is engineered to evoke the atmosphere of a high-end Tokyo boutique. Every interaction, transition, and typographic choice is curated to reflect the "Authentic Luxury Archive" status of the products.

## II. Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (Primitive Layer) + Custom Vanilla CSS
- **Animations**: Framer Motion (Orchestration Layer)
- **Carousel**: Swiper (Cinematic Transitions)
- **Icons**: Lucide React

## III. Core System Components

### 1. Bilingual Localization (`LanguageContext`)

A sophisticated engine supporting **Thai** and **English**.

- Global `t()` function for string retrieval.
- Seamlessly manages dual-language content across all shop and administrative interfaces.

### 2. Typographic Orchestration (`FontContext`)

Dynamically manages font families to suit the active locale:

- **English Mode**: Prioritizes `Bodoni Moda` (Serif) for headers and `Inter` (Sans) for UI elements.
- **Thai Mode**: Utilizes `Prompt` and `Sarabun` to maintain legibility and professional aesthetic for Thai scripts.

### 3. Transactional Engine (`CartContext` & `Checkout`)

- Real-time cart state with persistence.
- Multi-step checkout flow (Information -> Shipping -> Payment -> Success).
- Integrated with MockDB for guest and authenticated order creation.

## IV. Design System: "Tokyo Archive"

- **Visual Tone**: Minimalist monochrome layout (Zinc/White/Black) to accentuate luxury product photography.
- **Visual Primitives**:
  - **Glassmorphism**: Subtle backdrop blurs for the global Navbar and Search Overlay.
  - **UX Chonography**: High-fidelity loading skeletons and staggered entry animations for collection grids.
- **Interactive Layers**:
  - **Search Modal**: Instant filtering and visual product matches.
  - **Hover Effects**: Luxury "zoom-and-fade" patterns on archive items.

## V. Strategic Pages

### 1. Immersive Homepage

- Cinematic Swiper carousel with 4K video backgrounds.
- Editorial "Bento" grids for storytelling and category highlights.

### 2. Collection Discovery

- **Grid Systems**: Dynamic layouts for Bags, Accessories, and New Arrivals.
- **Filter Bar**: Advanced client-side filtering by Brand, Category, and Price sorting.
- **Product Detail**: Multi-image gallery with localized descriptions and authentic condition grading.

### 3. Administrative Interface (`/backend`)

- Secure unified dashboard for orchestrating the digital boutique's front-facing visual and inventory.

---

_MB BRANDNAME — Curating the Future of Heritage._

