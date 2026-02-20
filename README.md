# MB BRANDNAME 🇯🇵 | Authentic Luxury Archives Tokyo

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/arty69x/mb-brandname-platform)
[![Framework](https://img.shields.io/badge/framework-Next.js%2016-black)](https://nextjs.org/)
[![License](https://img.shields.io/badge/license-Private-red)]()

## 🏛️ Project Vision
MB BRANDNAME is a high-fidelity digital boutique engineered to showcase rare luxury archives sourced directly from Japan. The platform combines a minimalist Tokyo aesthetic with enterprise-grade ecommerce primitives, bringing the world's most coveted items from the Ginza district to a global audience.

## 🚀 Key Features

- **Cinematic Homepage**: Immersive 4K video backgrounds and high-motion hero sequences using Swiper.js and Framer Motion.
- **Bilingual Interface**: Seamless switching between Thai (Sarabun/Prompt) and English (Bodoni Moda) with global localization.
- **Global Search Overlay**: Real-time museum-grade search interface with brand categorization and instant visual results.
- **MockDB Ecosystem**: A sophisticated in-memory database simulation for real-time CRUD operations, multi-parameter filtering, and session persistence.
- **Admin Control Vault**: A secure administrative suite (`/backend`) for managing inventory, tracking orders, and orchestrating storytelling slides.
- **Responsive Luxury**: Fluid design system ("Tokyo Archive") that translates the boutique experience perfectly across mobile, tablet, and desktop.

## 🛠️ Technical Stack

- **Frontend**: Next.js 16 (App Router), TypeScript 5, React 19.
- **Styling**: Tailwind CSS 4, Vanilla CSS (Glassmorphism, Skeletons).
- **Animation**: Framer Motion, Swiper.js.
- **State & Context**: React Context API (Cart, Auth, Language, Font).
- **Backend Sim**: Next.js API Routes + Centralized MockDB Singleton.

## 📁 Project Structure

```txt
src/
├── app/                  # Next.js App Router (Shop, Backend, API)
├── components/           # UI Archive (Navbar, Footer, Search, etc.)
├── context/              # Global State (Auth, Cart, Language, Font)
├── lib/                  # Infrastructure (API Client, MockDB)
├── types/                # TypeScript Domain Models
docs/                     # Architectural Governance
public/                   # Static Assets & Media
```

## 📖 Documentation

For detailed architectural insights, please refer to the specific documentation:

- [**Frontend Architecture**](./docs/FRONTEND.md) — Design system, localization, and animation orchestration.
- [**Backend & Data**](./docs/BACKEND.md) — Data models, MockDB governance, and admin suite details.
- [**API Specification**](./docs/API.md) — Communication protocols and endpoint definitions.

## 🚦 Getting Started

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Production Validation**:
   ```bash
   npm run build
   ```

---

*MB BRANDNAME — Connecting Archive to Access.*
