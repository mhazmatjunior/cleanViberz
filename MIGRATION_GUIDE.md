# Production Migration Guide (Vercel + TiDB Cloud)

This document provides the final steps required to deploy the **Clean Vibez VIP** project to a production environment.

## 1. Database Setup (TiDB Cloud)
The project is optimized for **TiDB Cloud** (MySQL Compatible).

1.  **Create Cluster**: Log in to [TiDB Cloud](https://tidbcloud.com/) and create a free tier cluster.
2.  **Schema and Data**: Use the provided scripts to initialize your cloud database:
    *   Run `node scripts/seed-db.js` (Ensure your `.env` is pointing to the cloud cluster first).
    *   This will create all tables (`testimonials`, `faqs`, `services`, `rides`, `bookings`, `destinations`) and populate them with the 100% restored original content.

## 2. Vercel Environment Variables
Add the following variables in your **Vercel Project Settings > Environment Variables**:

| Variable | Description | Example |
| :--- | :--- | :--- |
| `DB_HOST` | TiDB Cloud Gateway Host | `gateway01.us-east-1.prod.aws.tidbcloud.com` |
| `DB_PORT` | Port (Standard MySQL) | `4000` |
| `DB_USER` | Cluster Username | `your_user.root` |
| `DB_PASSWORD` | Cluster Password | `************` |
| `DB_NAME` | Database Name | `cleanvibez` |
| `DB_SSL` | CA Certificate (JSON format) | `{"rejectUnauthorized":true}` |

> [!IMPORTANT]
> For `DB_SSL`, ensure you use the certificate provided by TiDB Cloud for secure connections.

## 3. Deployment Steps
1.  **Push to main**: Ensure all latest UI and logic refinements are pushed to your GitHub repository.
2.  **Connect to Vercel**: Import the repository into Vercel.
3.  **Automatic Build**: Vercel will detect the `package.json` and deploy automatically using the `app.js` entry point.

## 4. Verification
Once deployed, verify the following:
*   [ ] **Dynamic Sections**: Testimonials, FAQs, and Services should load immediately from the DB.
*   [ ] **Forms**: Submit a test booking on the Homepage and Car Service page. Check the `bookings` table to confirm capture.
*   [ ] **Assets**: Ensure high-res background images are restored as per `ASSETS_REQUIRED.md`.
*   [ ] **Validation**: Try a 9-digit phone number. It should be blocked by the new 10-digit validation logic.
---

## 5. Alternative Hosting (Hostinger MySQL)
If you prefer using **Hostinger's built-in MySQL** instead of TiDB Cloud:

1.  **Create Database**: In your Hostinger hPanel, go to **Databases > MySQL Databases** and create a new database/user.
2.  **Import Schema**: Open **phpMyAdmin** for your new database and import the content of `database/schema.sql`.
3.  **Update Config**: Change your `.env` variables or Vercel environment variables to match Hostinger's credentials:
    *   `DB_HOST`: Hostinger provides a specific host (often `localhost` or an IP).
    *   `DB_PORT`: Default is `3306`.
    *   `DB_SSL`: Hostinger often doesn't require the TiDB SSL certificate. You can set `DB_SSL` to `false` or empty in `config/db.js` if the connection fails.

> [!TIP]
> Hostinger MySQL is standard MySQL 8.0+, which is 100% compatible with the schema and code provided in this repository.
