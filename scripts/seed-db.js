const db = require('../config/db');

async function seed() {
    console.log('🌱 Starting comprehensive database seeding on TiDB...');

    try {
        console.log('🧹 Clearing existing data...');
        await db.query('SET FOREIGN_KEY_CHECKS = 0');
        await db.query('TRUNCATE TABLE testimonials');
        await db.query('TRUNCATE TABLE site_faqs');
        await db.query('TRUNCATE TABLE services');
        await db.query('TRUNCATE TABLE car_rides');
        await db.query('TRUNCATE TABLE destinations');
        await db.query('SET FOREIGN_KEY_CHECKS = 1');

        // 1. Seed Testimonials (All 15 Original)
        console.log('📝 Seeding 15 Testimonials...');
        const testimonials = [
            ['Mansur', 'Founder @ Google', 'Yet preference connection unpleasant yet melancholy but end appearance. And excellence partiality estimating terminated day everything.', 5],
            ['Sarah M.', 'Technix Founder', 'Our corporate gala couldn\'t have gone smoother. The Clean Vibez team managed catering, setup, and coordination with such professionalism that we didn\'t have to worry about a single thing.', 5],
            ['David Josh', 'CEO, Air Canada', 'I booked a luxury car and private chef through Clean Vibez for my husband\'s birthday — and honestly, it felt like a VIP experience from start to finish. The vibe, the service, the energy — they truly deliver what they promise.', 5],
            ['Priya S.', 'Event Planner', 'Clean Vibez made our event unforgettable. The attention to detail was amazing!', 5],
            ['Alex T.', 'Business Owner', 'Absolutely loved the luxury car service. Will book again!', 5],
            ['Maria L.', 'Food Blogger', 'The chef was incredible and the food was out of this world. Thank you!', 5],
            ['John D.', 'CEO, TechCorp', 'Professional, friendly, and reliable. Highly recommended.', 5],
            ['Emily R.', 'Wedding Planner', 'Our guests were blown away by the service and ambiance.', 4],
            ['Omar K.', 'Entrepreneur', 'Everything was perfect from start to finish. Thank you Clean Vibez!', 5],
            ['Lisa M.', 'Marketing Lead', 'Great experience, great people, great results.', 5],
            ['Raj P.', 'Consultant', 'Clean Vibez exceeded all our expectations. Will recommend to everyone!', 5],
            ['Chloe S.', 'Artist', 'Superb service and attention to detail. 10/10!', 5],
            ['Ben F.', 'Musician', 'We felt like true VIPs. Thank you for making our day special.', 5],
            ['Zoe W.', 'PR Manager', 'Best event company in town. Highly professional and creative.', 5],
            ['Mike B.', 'Startup Founder', 'Every detail was perfect. Will use Clean Vibez again for sure!', 5]
        ];
        await db.query('INSERT INTO testimonials (author_name, author_title, content, stars) VALUES ?', [testimonials]);

        // 2. Seed FAQs (All Original per Category)
        console.log('❓ Seeding FAQs for all categories...');
        const faqData = [
            ['Where can I watch?', 'Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore ismod nulla. Elit adipiscing proin quis est consectetur. Felis ultricies nisi, quis malesuada sem odio.'],
            ['Tempus magna risus interdum ultricies sed urna?', 'Answer content here.'],
            ['Augue in nibh urna volutpat mattis?', 'Answer content here.'],
            ['Eu egestas sed sed posuere ultrices?', 'Answer content here.'],
            ['Elementum facilisi aliquam, nisi, orci vulputate?', 'Answer content here.'],
            ['Nibh at odio dolor etiam neque in vel id orci?', 'Answer content here.'],
            ['Non dolor at velit lorem erat maecenas?', 'Answer content here.']
        ];

        const allFaqs = [];
        ['home', 'car', 'meal', 'story'].forEach(cat => {
            faqData.forEach((f, index) => {
                allFaqs.push([cat, f[0], f[1], index + 1]);
            });
        });
        await db.query('INSERT INTO site_faqs (category, question, answer, display_order) VALUES ?', [allFaqs]);

        // 3. Seed Services (All 4 Original)
        console.log('🛠️ Seeding Services...');
        const services = [
            ['Catering', 'From intimate dinners to grand celebrations, we serve flavor, style, and unforgettable presentation.', '/img/union0.svg', '0.15s'],
            ['Personal Chef', 'Fine dining at your doorstep personalized menus, flawless service, and pure culinary artistry.', '/img/vector2.svg', '0.35s'],
            ['Concierge', 'Your event, perfectly managed. From setup to last detail, we handle it all with ease and class.', '/img/vector1.svg', '0.55s'],
            ['Luxury Car & Van', 'Travel in comfort & arrive in style premium rides with professional drivers at your service.', '/img/group-15978824000.svg', '0.75s']
        ];
        await db.query('INSERT INTO services (title, description, icon_svg_path, animation_delay) VALUES ?', [services]);

        // 4. Seed Car Rides (All 3 Original)
        console.log('🚗 Seeding Car Rides...');
        const rides = [
            ['Premium Sedan', 'Meticulously crafted, nutritionally balanced meals prepared with premium ingredients and delivered to your door. Health meets haute cuisine.', '/Car Service/Section 3 pic 1.png'],
            ['Luxury SUV', 'An intimate culinary journey in the comfort of your home. Our private chefs curate bespoke multi-course experiences tailored to your palate.', '/Car Service/Section 3 pic 2.png'],
            ['Van For Group', 'Meticulously crafted, nutritionally balanced meals prepared with premium ingredients and delivered to your door. Health meets haute cuisine.', '/Car Service/Section 3 pic 3.png']
        ];
        await db.query('INSERT INTO car_rides (title, description, image_url) VALUES ?', [rides]);

        // 5. Seed Destinations
        console.log('📍 Seeding Destinations...');
        const dests = [
            // Hotels
            ['hotels', 'Paris, France', '$190/night', 'Romantic escapes, art, and cafés.', '/img/card0.png'],
            ['hotels', 'Santorini, Greece', '$190/night', 'Sunsets, sea views, and serenity.', '/img/product-card-vertical0.png'],
            ['hotels', 'Bali, Indonesia', '$190/night', 'Beaches, nature, and calm vibes.', '/img/card1.png'],
            ['hotels', 'Kyoto, Japan', '$190/night', 'Cherry blossoms and temples.', '/img/card2.png'],
            // Cars
            ['cars', 'Rolls Royce Phantom', '$900/day', 'Ultimate luxury ride for special occasions.', '/img/car1.png'],
            ['cars', 'Lamborghini Aventador', '$1200/day', 'Speed, style, and pure adrenaline.', '/img/car2.png'],
            // Chefs
            ['chefs', 'Chef Pierre', '$400/event', 'French cuisine, Michelin experience.', '/img/chef1.png'],
            ['chefs', 'Chef Maria', '$350/event', 'Mediterranean flavors, healthy delights.', '/img/chef2.png'],
            // Concierge
            ['concierge', 'VIP Event Planner', '$600/event', 'Flawless events, every detail managed.', '/img/concierge1.png'],
            ['concierge', 'Personal Assistant', '$250/day', 'Your needs, handled with care and privacy.', '/img/concierge2.png']
        ];
        await db.query('INSERT INTO destinations (category, title, price_info, description, image_url) VALUES ?', [dests]);

        console.log('✨ Comprehensive seeding complete!');
    } catch (err) {
        console.error('❌ Seeding Error:', err.message);
    } finally {
        process.exit();
    }
}

seed();
