# Project Overview & Technical Architecture

This document provides a comprehensive technical map of the **Clean Vibez VIP** website, detailed by its modular architecture and data-driven rendering.

## Technical Stack
*   **Backend**: Node.js with Express.js
*   **Templating**: EJS (Embedded JavaScript)
*   **Database**: TiDB Cloud (MySQL compatible)
*   **Styling**: Modular CSS per section

---

## 1. Main Pages (Views)
The following are the top-level route templates located in `/views`:

12. **`airbnb-stay.ejs`**: Specialized hub for premium Airbnb stays and accommodations.
13. **`airbnb-stay-book.ejs`**: Dedicated reservation funnel for short-term stays.
14. **`404.ejs`**: Custom error page.

---

## 2. Modular Sections (Components)
The project uses a component-based structure where each feature is a folder in `/sections/` containing its own `.ejs` (structure) and `.css` (styling).

### Core Layout
*   **`header/`**: Contains multiple variations (`meal-prep-header.ejs`, etc.).
*   **`footer/`**: Site-wide global footer.
*   **`hero/`**: The primary dynamic booking hero on the homepage.

### Service-Specific Sections
*   **Car Service**: `car-service-hero`, `cs-excellence`, `cs-faq`, `cs-process`, `cs-rides`, `cs-airbnb`.
*   **Airbnb Stay**: `airbnb-stay-hero`, `as-excellence`, `as-faq`, `as-process`, `as-rides`, `as-airbnb`, `airbnb-stay-book`.
*   **Meal Prep**: `meal-prep-hero`, `mp-excellence`, `mp-faq`, `mp-features`, `mp-gallery`, `mp-process`, `mp-testimonials`, `mp-airbnb`.
*   **Our Story**: `os-intro`, `os-journey`, `os-luxury`, `os-services`, `os-travel`, `os-concierge`, `story`.

### Shared Dynamic Modules
These sections fetch data from the database and are used across multiple pages:
*   **`testimonials/`**: Renders client reviews with an **infinite loop** mechanism.
*   **`mp-testimonials/`**: Specialist Review Submission system with **POST API** integration.
*   **`faq/`**: General category-based FAQ system.
*   **`services/`**: Icon-based service grid.
*   **`destinations/`**: Image-rich location gallery.
*   **`vibe/` & `why-us/`**: Marketing and value proposition modules.

---

## 3. Data Flow
1.  **Request**: User visits a route (e.g., `/car-service`).
2.  **Controller (`app.js`)**: Fetches required data (FAQs, Rides, etc.) from TiDB Cloud.
3.  **Injection**: Data is passed as variables (e.g., `rides`, `faqs`) to the view.
4.  **Rendering**: The EJS template uses `forEach` loops to render dynamic cards without any static hardcoding.

## 4. Maintenance Guide

### Modifying Content
Simply update the database table (TiDB). The UI uses aliasing (e.g., `icon_svg_path AS icon_path`) to ensure seamless integration.

### Modifying Forms
Form validation (10-digit phone check) and submission logic are located within `<script>` tags at the bottom of the relevant section file (e.g., `sections/car-book/car-book.ejs`).
