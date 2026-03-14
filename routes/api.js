const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get Testimonials
router.get('/testimonials', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM testimonials ORDER BY created_at DESC');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get FAQs by Category
router.get('/faqs/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const [rows] = await db.query("SELECT * FROM site_faqs WHERE category = ? ORDER BY display_order ASC", [category]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Services
router.get('/services', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM services');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get Destinations
router.get('/destinations', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM destinations');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a Testimonial
router.post('/testimonials', async (req, res) => {
  try {
    const { author_name, author_title, content, stars } = req.body;
    
    if (!author_name || !content) {
      return res.status(400).json({ success: false, error: 'Name and Content are required' });
    }

    const [result] = await db.query(
      'INSERT INTO testimonials (author_name, author_title, content, stars) VALUES (?, ?, ?, ?)',
      [author_name, author_title, content, stars || 5]
    );

    res.status(201).json({ success: true, testimonialId: result.insertId });
  } catch (err) {
    console.error('Testimonial Error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to save testimonial' });
  }
});

// Post a Booking
router.post('/book', async (req, res) => {
  try {
    const { name, email, details } = req.body;

    const [result] = await db.query(
      'INSERT INTO bookings (customer_name, contact_info, details, booking_type) VALUES (?, ?, ?, ?)',
      [name, email, JSON.stringify(details), req.body.type || 'General']
    );

    res.status(201).json({ success: true, bookingId: result.insertId });
  } catch (err) {
    console.error('Booking Error:', err.message);
    res.status(500).json({ success: false, error: 'Failed to save booking' });
  }
});

module.exports = router;
