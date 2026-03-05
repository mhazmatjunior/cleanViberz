# Clean Vibez VIP - Luxury Services Website

> A modern, modular luxury services website built with **EJS Template Engine** and **Express.js**

---

## 🌟 Features

- 📱 **Responsive Design** - Mobile-first approach
- 🎨 **Modular Architecture** - 11 independent section components
- ⚡ **Hot Reload** - Auto-refresh on file changes (development)
- 🖼️ **Server-Side Rendering** - Better SEO & performance
- 💼 **Professional Structure** - Enterprise-ready codebase
- 🎯 **Section Components** - Header, Hero, Services, Story, Destinations, Booking CTA, Why Us, Vibe, FAQ, Testimonials, Footer

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Installation & Setup

```bash
# Navigate to project
cd "/Users/Shaikh/Desktop/Bitslogical Projects/cleanVibez"

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Then open your browser to:
```
http://localhost:3000
```

---

## 📁 Project Structure

```
cleanVibez/
├── 📄 app.js                    # Express server configuration
├── 📄 package.json              # Dependencies & scripts
├── 📄 start-dev.sh              # Quick start script
├── 📄 README.md                 # This file
├── 📄 SETUP_COMPLETE.md         # Complete setup guide
├── 📄 TEMPLATE_ENGINE_SETUP.md  # Template engine docs
│
├── 📁 views/                    # Page templates
│   ├── index.ejs               # Main page (home)
│   └── 404.ejs                 # Error page
│
├── 📁 sections/                 # Section components (reusable)
│   ├── header/                 # Navigation header
│   │   ├── header.ejs          # Template
│   │   └── header.css          # Styles
│   ├── hero/                   # Hero banner
│   ├── services/               # Services grid
│   ├── story/                  # Company story
│   ├── destinations/           # Travel destinations
│   ├── booking-cta/            # Booking call-to-action
│   ├── why-us/                 # Why choose us section
│   ├── vibe/                   # Media/vibe section
│   ├── faq/                    # FAQ accordion
│   ├── testimonials/           # Client testimonials
│   └── footer/                 # Footer
│
├── 📁 assets/                   # Static assets
│   ├── css/                    # Global stylesheets
│   │   ├── vars.css            # CSS variables & theme
│   │   ├── style.css           # Global styles
│   │   └── booking-widget.css  # Booking form styles
│   └── img/                    # Images & icons
│
├── 📁 node_modules/             # Installed packages
└── 📄 .gitignore               # Git ignore rules
```

---

## 🔧 Available Scripts

### Development Mode (with auto-reload)
```bash
npm run dev
```
Starts the server with **Nodemon** - automatically restarts on file changes.

### Production Mode
```bash
npm start
```
Starts the server in production mode.

### Using the startup script
```bash
./start-dev.sh
```
Runs development server with a nice banner.

---

## 🛠️ How It Works

### Template System
This project uses **EJS (Embedded JavaScript)** for templating.

**Main Page (views/index.ejs):**
```ejs
<!DOCTYPE html>
<html>
  <head>
    <title><%= title %></title>
    <!-- CSS links -->
  </head>
  <body>
    <%- include('../sections/header/header'); %>
    <%- include('../sections/hero/hero'); %>
    <!-- More sections... -->
    <%- include('../sections/footer/footer'); %>
  </body>
</html>
```

**Section Template (sections/header/header.ejs):**
```ejs
<header class="site-header">
  <!-- Header HTML -->
</header>
```

### Server Configuration
The **app.js** file configures Express.js to:
- Serve static files from `/assets` directory
- Render EJS templates from `/views` and `/sections`
- Handle routes dynamically
- Manage 404 errors

---

## 📝 Adding New Sections

### Step 1: Create Section Folder
```bash
mkdir sections/my-section
```

### Step 2: Create Files
```bash
# Create template
touch sections/my-section/my-section.ejs

# Create styles
touch sections/my-section/my-section.css
```

### Step 3: Add HTML Content
Edit `sections/my-section/my-section.ejs`:
```ejs
<section id="my-section" class="section">
  <!-- Your content here -->
</section>
```

### Step 4: Include in Main Template
Edit `views/index.ejs`:
```ejs
<%- include('../sections/my-section/my-section'); %>
```

### Step 5: Link CSS
Add to `views/index.ejs` head:
```html
<link rel="stylesheet" href="/my-section/my-section.css">
```

---

## 🎨 Customization

### Change Port Number
```bash
PORT=3001 npm run dev
```

### Update Theme Colors
Edit `assets/css/vars.css`:
```css
:root {
  --color-gold: #e0b973;
  --color-dark-bg: #0a0a0a;
  /* More colors... */
}
```

### Modify Page Title
Edit `app.js`:
```javascript
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Your Custom Title'
  });
});
```

---

## 🚀 Deployment Options

### Heroku
```bash
# Create app
heroku create your-app-name

# Push code
git push heroku main

# View logs
heroku logs --tail
```

### Railway.app (Recommended)
```bash
# Connect GitHub repo
# Set PORT environment variable
# Deploy with one click
```

### DigitalOcean App Platform
1. Connect GitHub repository
2. Set PORT to 3000
3. Deploy

### Docker
```bash
docker build -t clean-vibez .
docker run -p 3000:3000 clean-vibez
```

---

## 📚 Useful Resources

| Resource | Link |
|----------|------|
| EJS Docs | https://ejs.co/ |
| Express Docs | https://expressjs.com/ |
| Node.js Docs | https://nodejs.org/docs/ |
| CSS Variables | https://developer.mozilla.org/en-US/docs/Web/CSS/--* |

---

## 🐛 Troubleshooting

### Server won't start
```bash
# Check if port 3000 is in use
lsof -i :3000

# Use different port
PORT=3001 npm run dev
```

### Images not loading
- Ensure paths use `/img/` prefix
- Check `assets/img` folder exists

### CSS not applying
- Verify CSS file paths start with `/`
- Clear browser cache (Cmd+Shift+R)

### Changes not showing
- Make sure using `npm run dev` (not `npm start`)
- Restart server (Ctrl+C, then `npm run dev`)

---

## 📊 Technology Stack

```
Frontend:
├── HTML5
├── CSS3 (with Variables)
├── JavaScript (Vanilla)
└── EJS Template Engine

Backend:
├── Node.js 14+
├── Express.js 4.x
├── Nodemon (dev only)
└── EJS 3.x

Deployment:
├── Heroku / Railway / DigitalOcean
├── Docker
└── Traditional hosting (Node.js compatible)
```

---

## 📋 Checklists

### Before Deployment
- [ ] All images loading correctly
- [ ] All CSS applied properly
- [ ] Responsive design tested on mobile
- [ ] Forms submitting correctly
- [ ] Links working
- [ ] No console errors

### After Deployment
- [ ] Site accessible via domain
- [ ] All pages loading
- [ ] Static files serving correctly
- [ ] Database connected (if applicable)
- [ ] SSL certificate installed
- [ ] Monitoring & logging set up

---

## 👨‍💼 Author

**Clean Vibez VIP** - Luxury Services
- Website: [cleanvibezsvip.com](https://cleanvibezsvip.com)
- Email: info@cleanvibezsvip.com

---

## 📄 License

MIT License - Feel free to use this project for commercial purposes.

---

## 🎉 Getting Started Now

```bash
npm run dev
```

Open: **http://localhost:3000**

Happy coding! ✨
