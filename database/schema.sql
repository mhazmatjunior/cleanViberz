-- Clean Vibez VIP TiDB (MySQL Compatible) Schema

-- 1. Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    author_title VARCHAR(255),
    content TEXT NOT NULL,
    stars INT DEFAULT 5,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. site_faqs (Using site_faqs to avoid naming conflicts)
CREATE TABLE IF NOT EXISTS site_faqs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('home', 'car', 'meal', 'story') NOT NULL DEFAULT 'home',
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Services
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    icon_svg_path VARCHAR(255),
    animation_delay VARCHAR(50)
);

-- 4. Premium Rides
CREATE TABLE IF NOT EXISTS car_rides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);

-- 5. Booking Form Leads
CREATE TABLE IF NOT EXISTS bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255),
    address TEXT,
    booking_type VARCHAR(50) NOT NULL,
    booking_date DATE,
    booking_time VARCHAR(50),
    details JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 6. Destinations
CREATE TABLE IF NOT EXISTS destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('hotels', 'cars', 'chefs', 'concierge') NOT NULL,
    title VARCHAR(255) NOT NULL,
    price_info VARCHAR(100),
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
