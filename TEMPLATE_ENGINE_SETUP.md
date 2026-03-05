# Template Engine Setup - Clean Vibez VIP

## 🚀 Quick Start

### Installation

```bash
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"
npm install
```

### Start Development Server

```bash
npm run dev
```

Open browser: **http://localhost:3000**

### Start Production Server

```bash
npm start
```

---

## 📁 Project Structure

```
cleanVibez/
├── app.js                 # Express app configuration
├── package.json           # Dependencies & scripts
├── views/
│   ├── index.ejs         # Main template (includes all sections)
│   └── 404.ejs           # Error page
├── sections/              # Section components (EJS templates)
│   ├── header/
│   │   ├── header.ejs    # Header component
│   │   └── header.css
│   ├── hero/
│   │   ├── hero.ejs
│   │   └── hero.css
│   ├── services/
│   ├── story/
│   ├── destinations/
│   ├── booking-cta/
│   ├── why-us/
│   ├── vibe/
│   ├── faq/
│   ├── testimonials/
│   └── footer/
├── assets/
│   ├── css/              # Global styles
│   │   ├── vars.css
│   │   ├── style.css
│   │   └── booking-widget.css
│   └── img/              # Images
└── index.html            # Old static HTML (keep for reference)
```

---

## 🔧 How It Works

### Main Template (views/index.ejs)
```ejs
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Global styles -->
  <link rel="stylesheet" href="/css/vars.css">
</head>
<body>
  <!-- Include sections -->
  <%- include('../sections/header/header'); %>
  <%- include('../sections/hero/hero'); %>
  <!-- More sections... -->
</body>
</html>
```

### Section Templates (sections/*/template.ejs)
Each section file contains only the HTML for that section:
```ejs
<section id="hero" class="section hero">
  <!-- Hero content -->
</section>
```

Image paths are now served from `/` (root):
- `./assets/img/image.png` → `/img/image.png`
- `./assets/css/style.css` → `/css/style.css`

---

## 📝 Updating Image Paths in Sections

When you include a section, change image paths:

**Before (in HTML):**
```html
<img src="./assets/img/logo.png" alt="">
```

**After (in EJS):**
```html
<img src="/img/logo.png" alt="">
```

---

## 🎯 Benefits of This Setup

✅ **Modular Architecture** - Each section in its own file
✅ **DRY Code** - No duplication of header/footer
✅ **Easy Maintenance** - Update one component, affects all pages
✅ **Scalable** - Easy to add new pages/routes
✅ **Dynamic Content** - Pass variables to templates
✅ **SEO-Friendly** - Renders on server-side
✅ **Hot Reload** - Nodemon auto-restarts on file changes

---

## 🔄 Migration Steps

1. ✅ Created `app.js` - Express server configuration
2. ✅ Created `package.json` - Dependencies
3. ✅ Created `views/index.ejs` - Main template with includes
4. ⏳ Rename section `.html` files to `.ejs`
5. ⏳ Update image paths in all sections
6. ⏳ Run `npm install`
7. ⏳ Start server with `npm run dev`

---

## 📚 Template Syntax Reference

### Include a partial (component):
```ejs
<%- include('../path/to/file'); %>
```

### Output a variable:
```ejs
<h1><%= title %></h1>
```

### Conditional logic:
```ejs
<% if (user) { %>
  <p>Hello, <%= user.name %>!</p>
<% } %>
```

### Loop:
```ejs
<% items.forEach(item => { %>
  <li><%= item %></li>
<% }); %>
```

### Escape HTML (safe):
```ejs
<p><%= userInput %></p>
```

### Raw HTML (unsafe, use with caution):
```ejs
<p><%- htmlContent %></p>
```

---

## 🚨 Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### Server won't start
- Check if port 3000 is already in use
- Change PORT in `app.js` or set environment variable: `PORT=3001 npm start`

### CSS/Images not loading
- Make sure paths start with `/` (root)
- Check `assets` folder is properly referenced in `app.js`

### Changes not reflecting
- Make sure you're using `npm run dev` (with nodemon)
- Restart server with Ctrl+C and `npm run dev` again

---

## 📦 Next Steps

1. Run `npm install` to install dependencies
2. Rename section files: `section.html` → `section.ejs`
3. Update all image paths from `./assets/` to `/`
4. Run `npm run dev` and visit http://localhost:3000
5. Your site is now running with template engine! 🎉

