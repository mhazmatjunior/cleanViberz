# 🚀 QUICK START GUIDE - Template Engine Setup

## ⚡ In 30 Seconds

```bash
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"
npm run dev
```

Then open: **http://localhost:3000**

---

## ✅ Verification

Your setup is ready:
- ✅ Node.js: v22.12.0
- ✅ Project: clean-vibez-vip
- ✅ Dependencies: express, ejs
- ✅ Dev Dependencies: nodemon

---

## 📋 What Changed

### Old Structure (Static)
```
index.html  (500+ lines, all sections inline)
  ├── Header HTML (50 lines)
  ├── Hero HTML (50 lines)
  ├── Services HTML (80 lines)
  └── ... (all sections)
```

### New Structure (Modular)
```
views/index.ejs (clean, only includes sections)
  <%- include('../sections/header/header'); %>
  <%- include('../sections/hero/hero'); %>
  <%- include('../sections/services/services'); %>
  └── ... (11 sections)

sections/header/header.ejs      (only header HTML)
sections/hero/hero.ejs          (only hero HTML)
sections/services/services.ejs  (only services HTML)
└── ... (each section separate)
```

---

## 🎯 Benefits

| Old Approach | New Approach |
|--------------|-------------|
| One 500+ line file | 11 small focused files |
| Hard to maintain | Easy to update |
| Can't reuse components | Reuse across pages |
| No server-side logic | Full Express integration |
| Static only | Dynamic rendering |
| Not scalable | Enterprise-ready |

---

## 📁 File Locations

### Main Files
| File | Purpose |
|------|---------|
| `app.js` | Express server configuration |
| `views/index.ejs` | Main page template |
| `sections/*/\*.ejs` | Section components |
| `assets/css/*.css` | Stylesheets |
| `assets/img/*` | Images |

### Documentation
| File | Contents |
|------|----------|
| `README.md` | Full project docs |
| `SETUP_COMPLETE.md` | Setup guide |
| `TEMPLATE_ENGINE_SETUP.md` | Template reference |
| `MIGRATION_SUMMARY.md` | What changed |
| `QUICK_START.md` | This file! |

---

## 🔧 Common Tasks

### Start Development Server
```bash
npm run dev
```
Auto-reloads on file changes

### Start Production Server
```bash
npm start
```
No auto-reload, faster

### Change Port
```bash
PORT=3001 npm run dev
```

### Check Dependencies
```bash
npm list
```

### Update Dependencies
```bash
npm update
```

---

## 🛠️ File Paths

### Image Paths (Updated)
```
Before: <img src="./assets/img/logo.png">
After:  <img src="/img/logo.png">
```

### CSS Paths (Updated)
```
Before: <link href="./assets/css/style.css">
After:  <link href="/css/style.css">
```

### Section Includes (New)
```ejs
<%- include('../sections/header/header'); %>
<%- include('../sections/hero/hero'); %>
```

---

## 📡 Server Information

```
Port: 3000 (or custom PORT env var)
Host: localhost
Protocol: HTTP
URL: http://localhost:3000

Routes:
GET  / → Main page (renders index.ejs)
GET  /health → Server status
404 → Error page (renders 404.ejs)
```

---

## 📂 Adding New Pages

### Step 1: Create Route
Edit `app.js`:
```javascript
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
});
```

### Step 2: Create Template
Create `views/about.ejs`:
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

### Step 3: Done!
Visit: http://localhost:3000/about

---

## 🌐 Sections Included

All 11 sections automatically included:

1. ✅ Header (Navigation)
2. ✅ Hero (Main banner)
3. ✅ Services (Grid)
4. ✅ Story (Company info)
5. ✅ Destinations (Travel)
6. ✅ Booking CTA (Call-to-action)
7. ✅ Why Us (Features)
8. ✅ Vibe (Media)
9. ✅ FAQ (Questions)
10. ✅ Testimonials (Reviews)
11. ✅ Footer (Bottom)

Each section:
- Has its own `.ejs` template
- Has its own `.css` stylesheet
- Can be independently updated
- Is reusable across pages

---

## 🐛 Quick Fixes

### Server won't start
```bash
# Check if port in use
lsof -i :3000

# Use different port
PORT=3001 npm run dev
```

### Images not loading
- Verify paths use `/img/` prefix
- Check `assets/img/` folder exists

### CSS not applying
- Clear browser cache (Cmd+Shift+R)
- Verify CSS file paths use `/css/` prefix
- Check stylesheets are linked in `views/index.ejs`

### Changes not showing
- Make sure using `npm run dev` (with nodemon)
- Restart if using `npm start`

---

## 📚 Learn More

| Resource | Link |
|----------|------|
| Full Setup | SETUP_COMPLETE.md |
| Project Docs | README.md |
| Template Ref | TEMPLATE_ENGINE_SETUP.md |
| Migration Info | MIGRATION_SUMMARY.md |

---

## 🎬 Getting Started

```bash
# 1. Navigate to project
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"

# 2. Start server
npm run dev

# 3. Open browser
# http://localhost:3000

# 4. Make changes and see them auto-reload!
```

---

## ✨ You're Ready!

Your template engine is set up and working. Start building amazing pages! 🚀

```bash
npm run dev
```

**Happy coding!** 💻

