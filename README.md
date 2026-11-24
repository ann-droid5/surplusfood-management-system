# FreshSave – Surplus Food Management & Marketplace System

## Project Overview
**FreshSave** is a web-based **multi-vendor surplus food management and marketplace platform** that connects customers with local food businesses—including **bakeries, restaurants, cafés, hotels, fast-food outlets, and sweet shops**—that want to sell their unsold daily surplus food at discounted prices for **self-pickup**.

The platform aims to reduce food wastage while helping local food vendors recover value from unsold food items.

> **Current Stage:** Phase 1 Frontend Setup & Polished Homepage Prototype (using local demonstration sample data; backend, database, authentication, payment gateway, and OTP verification are planned for subsequent phases).

---

## Planned User Roles
- **Customer:** Discovers surplus food across local vendors, reserves discounted meals/items, pays online, and collects via one-time pickup OTP.
- **Food Partner (Food Vendor / Food Business):** Individual business profile (bakery, restaurant, café, hotel, fast-food outlet, or sweet shop) managing its own surplus food listings and pickup windows.
- **Administrator:** Oversees vendor onboarding, listings, and platform quality.

---

## Phase 1 Prototype Features
- **Responsive Navigation Bar:** Smooth scrolling to homepage sections plus "Coming Soon" previews for Login and Sign Up.
- **Hero Section:** Multi-vendor value proposition with primary actions (*Explore Surplus Food* & *Join as a Food Partner*).
- **Featured Surplus Listings:** 9 multi-vendor sample food items across **Bakery**, **Restaurant**, **Fast Food**, **Café**, and **Sweets** categories with interactive category filtering and a read-only Product & Food Vendor Profile preview modal.
- **How It Works:** 4-step self-pickup customer flow (Discover → Choose → Pay Online → Collect with One-Time Pickup OTP).
- **Why FreshSave?:** Highlights Affordable Food, Food Waste Reduction, and Support for Local Food Businesses.
- **Food Partner Section & Footer:** Dedicated vendor call-to-action, quick links, contact info, and privacy policy preview.

---

## Technology Stack
- **Phase 1 (Implemented):** React.js, Vite, JavaScript, HTML5, CSS3, Lucide React Icons
- **Planned (Future Phases):** Python Django, MySQL, Online Payment Integration, OTP Pickup Verification

---

## Project Structure
```text
SurplusProject/
├── public/
├── src/
│   ├── assets/              # Local food & hero photography
│   ├── components/          # Reusable UI sections & modals
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductCard.jsx
│   │   ├── FeaturedProducts.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── WhyFreshSave.jsx
│   │   ├── FoodPartnerSection.jsx
│   │   ├── Footer.jsx
│   │   └── NoticeModal.jsx
│   ├── data/
│   │   └── products.js      # Demonstration multi-vendor sample listings
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## How to Run Locally

1. Open a terminal in the project root folder (`d:\SurplusProject`).
2. Install dependencies (only needed once):
   ```bash
   npm install
   ```
   *(If Windows PowerShell blocks `npm`, use `npm.cmd install` or run in Command Prompt.)*
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *(Or `npm.cmd run dev` in PowerShell.)*
4. Open the local URL printed in the terminal (usually `http://localhost:5173`) in your browser.

To create a production build:
```bash
npm run build
```
