# ✨ Clean Vibez VIP - Template Engine Migration Complete!

## 🎉 What's Been Done

Your project has been successfully refactored to use **EJS Template Engine** with Express.js. Here's what was set up:

### ✅ Created Files
- **`app.js`** - Express server configuration with EJS
- **`package.json`** - Dependencies (express, ejs, nodemon)
- **`views/index.ejs`** - Main template with section includes
- **`views/404.ejs`** - Error page template
- **`sections/**/*.ejs`** - All section templates (converted from HTML)
- **`.gitignore`** - Git ignore configuration
- **`start-dev.sh`** - Easy startup script

### ✅ What Changed
- ✅ HTML sections converted to EJS templates
- ✅ Image paths updated: `./assets/img/` → `/img/`
- ✅ CSS paths: `./assets/css/` → `/css/`
- ✅ All sections now use `<%- include(...) %>` syntax

---

## 🚀 How to Start

### Option 1: Using npm (Recommended)

```bash
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"
npm run dev
```

### Option 2: Using the startup script

```bash
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"
./start-dev.sh
```

### Option 3: Direct command

```bash
npm start
```

Then open your browser to: **http://localhost:3000**

---

## 📁 New Project Structure

```
cleanVibez/
├── app.js                          # Express server
├── package.json                    # Dependencies
├── start-dev.sh                    # Quick start script
├── TEMPLATE_ENGINE_SETUP.md        # Full documentation
├── node_modules/                   # Installed packages
├── views/                          # Main templates
│   ├── index.ejs                  # Main page (includes all sections)
│   └── 404.ejs                    # Error page
├── sections/                       # Section components
│   ├── header/
│   │   ├── header.ejs            # ← Now using EJS
│   │   ├── header.html           # (keeping backup)
│   │   └── header.css
│   ├── hero/
│   │   ├── hero.ejs              # ← Now using EJS
│   │   ├── hero.html             # (keeping backup)
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
│   ├── css/                        # Global styles
│   │   ├── vars.css
│   │   ├── style.css
│   │   └── booking-widget.css
│   └── img/                        # Images (served from /img)
└── index.html                      # Old static file (for reference)
```

---

## 🔄 How the Template Engine Works

### Main Template (views/index.ejs)
Includes all section components:
```ejs
<%- include('../sections/header/header'); %>
<%- include('../sections/hero/hero'); %>
<%- include('../sections/services/services'); %>
<!-- More sections... -->
```

### Section Templates (sections/*/template.ejs)
Each file contains only that section's HTML:
```ejs
<section id="hero" class="section hero">
  <!-- Section content here -->
</section>
```

### CSS & Assets
All served from root path:
- Images: `/img/logo.png`
- CSS: `/css/style.css`
- Other assets: `/other/file.ext`

---

## 💡 Key Benefits

| Feature | Benefit |
|---------|---------|
| **Modular Structure** | Each section in its own file |
| **DRY (Don't Repeat Yourself)** | Header/footer included once, used everywhere |
| **Maintainability** | Update one component = instant site-wide change |
| **Scalability** | Easy to add new pages/routes |
| **Server-Side Rendering** | Better SEO, dynamic content support |
| **Hot Reload** | Nodemon auto-restarts on file changes (dev mode) |
| **Clean Codebase** | 50+ lines per section file vs 500+ in single HTML |

---

## 📝 Common Operations

### Add a New Route

Edit `app.js`:
```javascript
app.get('/services', (req, res) => {
  res.render('services', {
    title: 'Our Services - Clean Vibez VIP'
  });
});
```

Create `views/services.ejs`:
```ejs
<!DOCTYPE html>
<html>
  <head><title><%= title %></title></head>
  <body>
    <%- include('../sections/header/header'); %>
    <!-- Page content -->
    <%- include('../sections/footer/footer'); %>
  </body>
</html>
```

### Pass Data to a Section

In `app.js`:
```javascript
res.render('index', {
  title: 'Home',
  services: ['Catering', 'Chef', 'Concierge']
});
```

In `sections/services/services.ejs`:
```ejs
<% services.forEach(service => { %>
  <h3><%= service %></h3>
<% }); %>
```

### Update Image Paths

All image paths are now relative to `/`:
```ejs
<!-- Before (old HTML) -->
<img src="./assets/img/logo.png">

<!-- After (new EJS) -->
<img src="/img/logo.png">
```

---

## ⚙️ Configuration

### Port Number
Default: `3000`

To use a different port:
```bash
PORT=3001 npm run dev
```

### Production Mode
```bash
NODE_ENV=production npm start
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Port already in use** | `PORT=3001 npm run dev` or check `lsof -i :3000` |
| **Images not loading** | Check paths use `/img/` not `./assets/img/` |
| **CSS not loading** | Verify `assets` folder is properly served in `app.js` |
| **Changes not showing** | Restart with Ctrl+C and `npm run dev` |
| **Dependencies missing** | Run `npm install` |

---

## 📚 EJS Template Syntax

```ejs
<!-- Include a partial (component) -->
<%- include('../path/to/file'); %>

<!-- Output variable (escaped) -->
<h1><%= title %></h1>

<!-- Conditional -->
<% if (condition) { %>
  <p>This shows if condition is true</p>
<% } %>

<!-- Loop -->
<% items.forEach(item => { %>
  <li><%= item %></li>
<% }); %>

<!-- Raw HTML (unescaped) -->
<div><%- htmlContent %></div>

<!-- Comments -->
<%# This won't be rendered %>
```

---

## 🚢 Deployment

### Heroku
```bash
git init
git add .
git commit -m "Initial commit"
heroku create your-app-name
git push heroku main
```

### Vercel (requires adapter)
Not recommended for Express - use Heroku, Railway, Render, or DigitalOcean.

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📞 Next Steps

1. ✅ Project setup complete
2. ⏳ **Start the server**: `npm run dev`
3. ⏳ **Visit**: http://localhost:3000
4. ⏳ **Test all sections** load correctly
5. ⏳ **Add more routes** as needed
6. ⏳ **Deploy** when ready

---

## 📖 Learn More

- [EJS Documentation](https://ejs.co/)
- [Express.js Guide](https://expressjs.com/)
- [Node.js Docs](https://nodejs.org/docs/)

---

## ✨ You're All Set!

Your Clean Vibez VIP website is now using a professional template engine architecture. 

**Start building!** 🚀

```bash
npm run dev
```

Then open: http://localhost:3000
