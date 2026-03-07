// FAQ animation code moved to public JS file (client-side only)
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, 'sections')));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Clean Vibez VIP - Luxury Services'
  });
});

// Meal Prep Service Page
app.get('/meal-prep', (req, res) => {
  res.render('meal-prep', {
    title: 'Custom Meal Prep - Clean Vibez VIP'
  });
});

// Premium Car Service Page
app.get('/car-service', (req, res) => {
  res.render('car-service', {
    title: 'Premium Car Services - Clean Vibez VIP'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🌟 Clean Vibez VIP server running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
