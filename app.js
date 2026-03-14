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

const db = require('./config/db');

// Middleware for JSON and Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', require('./routes/api'));

// Routes
app.get('/', async (req, res) => {
  try {
    const [testimonials, faqs, services, destinations] = (await Promise.all([
      db.query("SELECT * FROM testimonials ORDER BY created_at DESC"),
      db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['home']),
      db.query("SELECT id, title, description, icon_svg_path as icon_path, animation_delay FROM services"),
      db.query("SELECT * FROM destinations")
    ])).map(r => r[0]);

    res.render('index', {
      title: 'Clean Vibez VIP - Luxury Services',
      activePage: 'home',
      testimonials,
      faqs,
      services,
      destinations
    });
  } catch (err) {
    console.error('Render Error:', err.message);
    res.render('index', {
      title: 'Clean Vibez VIP - Luxury Services',
      activePage: 'home',
      testimonials: [],
      faqs: [],
      services: [],
      destinations: []
    });
  }
});

// Meal Prep Service Page
app.get('/meal-prep', async (req, res) => {
  try {
    const [faqs, testimonials] = (await Promise.all([
      db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['meal']),
      db.query("SELECT * FROM testimonials ORDER BY created_at DESC")
    ])).map(r => r[0]);
    res.render('meal-prep', {
      title: 'Custom Meal Prep - Clean Vibez VIP',
      activePage: 'services',
      faqs,
      testimonials
    });
  } catch (err) {
    res.render('meal-prep', {
      title: 'Custom Meal Prep - Clean Vibez VIP',
      activePage: 'services',
      faqs: [],
      testimonials: []
    });
  }
});

// Premium Car Service Page
app.get('/car-service', async (req, res) => {
  try {
    const [faqs] = await db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['car']);
    const [rides] = await db.query("SELECT * FROM car_rides");

    res.render('car-service', {
      title: 'Premium Car Services - Clean Vibez VIP',
      activePage: 'services',
      faqs,
      rides
    });
  } catch (err) {
    res.render('car-service', {
      title: 'Premium Car Services - Clean Vibez VIP',
      activePage: 'services',
      faqs: [],
      rides: []
    });
  }
});

// Our Story Page
app.get('/our-story', async (req, res) => {
  try {
    const [faqs] = await db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['story']);
    res.render('our-story', {
      title: 'Our Story - Clean Vibez VIP',
      activePage: 'story',
      faqs
    });
  } catch (err) {
    res.render('our-story', {
      title: 'Our Story - Clean Vibez VIP',
      activePage: 'story',
      faqs: []
    });
  }
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

// Explore Hotels Page
app.get('/explore-hotels', async (req, res) => {
  try {
    const [destinations, faqs] = await Promise.all([
      db.query("SELECT * FROM destinations WHERE category = 'hotels'"),
      db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['home'])
    ]).then(results => results.map(r => r[0]));
    
    res.render('explore-hotels', {
      title: 'Explore More Hotels - Clean Vibez VIP',
      activePage: 'home',
      destinations,
      faqs
    });
  } catch (err) {
    console.error('Render Error:', err.message);
    res.render('explore-hotels', {
      title: 'Explore More Hotels - Clean Vibez VIP',
      activePage: 'home',
      destinations: [],
      faqs: []
    });
  }
});

// Explore Cars Page
app.get('/explore-cars', async (req, res) => {
  try {
    const [destinations, faqs] = await Promise.all([
      db.query("SELECT * FROM destinations WHERE category = 'luxury-cars'"),
      db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", ['car'])
    ]).then(results => results.map(r => r[0]));
    
    res.render('explore-cars', {
      title: 'Explore Luxury Cars - Clean Vibez VIP',
      activePage: 'home',
      destinations,
      faqs
    });
  } catch (err) {
    console.error('Render Error:', err.message);
    res.render('explore-cars', {
      title: 'Explore Luxury Cars - Clean Vibez VIP',
      activePage: 'home',
      destinations: [],
      faqs: []
    });
  }
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
