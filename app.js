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
    title: 'Clean Vibez VIP - Luxury Services',
    activePage: 'home'
  });
});

// Meal Prep Service Page
app.get('/meal-prep', (req, res) => {
  res.render('meal-prep', {
    title: 'Custom Meal Prep - Clean Vibez VIP',
    activePage: 'services'
  });
});

// Premium Car Service Page
app.get('/car-service', (req, res) => {
  res.render('car-service', {
    title: 'Premium Car Services - Clean Vibez VIP',
    activePage: 'services'
  });
});

// Our Story Page
app.get('/our-story', (req, res) => {
  res.render('our-story', {
    title: 'Our Story - Clean Vibez VIP',
    activePage: 'story'
  });
});

// Contact Us Page
app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us - Clean Vibez VIP',
    activePage: 'contact'
  });
});

// Consultancy Page
app.get('/consultancy', (req, res) => {
  res.render('consultancy', {
    title: 'Consultancy - Clean Vibez VIP',
    activePage: 'services'
  });
});

// Car Book Form Page
app.get('/car-book', (req, res) => {
  res.render('car-book', {
    title: 'Car Book Form - Clean Vibez VIP',
    activePage: 'services'
  });
});

// Private Dinner / Date Night Page
app.get('/private-dinner', (req, res) => {
  res.render('private-dinner', {
    title: 'Private Dinner / Date Night - Clean Vibez VIP',
    activePage: 'services'
  });
});

// Meal Book Form Page
app.get('/meal-book', (req, res) => {
  res.render('meal-book', {
    title: 'Build Your Meal Plan - Clean Vibez VIP',
    activePage: 'services'
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
