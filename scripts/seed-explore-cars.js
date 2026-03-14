const db = require('../config/db');

async function seed() {
    console.log('🌱 Updating Explore Cars data with detailed specs...');

    try {
        const carAbout = "Experience the ultimate in luxury and performance with our premium car rentals. Each vehicle is meticulously maintained to ensure your safety and comfort. Whether you're planning a romantic escape, a business trip, or a family adventure, our diverse fleet has the perfect vehicle for every occasion.";

        const generateDetails = (brand, model, type) => JSON.stringify({
            "Brand": brand,
            "Model": model,
            "Make": brand,
            "Registration": "2023, Oct 2024",
            "Car Type": type,
            "Transmission": "Automatic",
            "Horse Power": "400 hp",
            "Fuel": "Petrol",
            "Engine": "3.0 L",
            "Tire": "Premium Grippers",
            "Milage": "10 km/L",
            "Door": "Two",
            "Kilometer": "12,000 km",
            "Owner": "First"
        });

        const cars = [
            // Section 1: Luxury Sedan (section = 1)
            { category: 'luxury-cars', section: 1, title: 'McLaren Senna', price: 'From $190/Day', desc: 'Elite performance and aerodynamic excellence.', img: '/img/explore_car_section_1_pic_1.png', details: generateDetails('McLaren', '2023', 'Hypercar') },
            { category: 'luxury-cars', section: 1, title: 'Volkswagen Beetle', price: 'From $120/Day', desc: 'Classic charm with modern reliability.', img: '/img/explore_car_section_1_pic_2.png', details: generateDetails('Volkswagen', '2022', 'Compact') },
            { category: 'luxury-cars', section: 1, title: 'Land Rover Defender', price: 'From $250/Day', desc: 'Unmatched off-road capability and luxury.', img: '/img/explore_car_section_1_pic_3.png', details: generateDetails('Land Rover', '2023', 'Off-road') },
            { category: 'luxury-cars', section: 1, title: 'Jeep Gladiator', price: 'From $210/Day', desc: 'Adventure-ready with versatile cargo space.', img: '/img/explore_car_section_1_pic_4.png', details: generateDetails('Jeep', '2024', 'Pickup') },

            // Section 2: Premium SUVs (section = 2)
            { category: 'luxury-cars', section: 2, title: 'Lamborghini Diablo', price: 'From $500/Day', desc: 'Iconic Italian supercar heritage.', img: '/img/explore_car_section_2_pic_1.png', details: generateDetails('Lamborghini', '1999', 'Supercar') },
            { category: 'luxury-cars', section: 2, title: 'Ford Lobo', price: 'From $150/Day', desc: 'Rugged strength for all your hauling needs.', img: '/img/explore_car_section_2_pic_2.png', details: generateDetails('Ford', '2023', 'Truck') },
            { category: 'luxury-cars', section: 2, title: 'Jensen Interceptor', price: 'From $200/Day', desc: 'Timeless British classic style.', img: '/img/explore_car_section_2_pic_3.png', details: generateDetails('Jensen', '1974', 'GT') },
            { category: 'luxury-cars', section: 2, title: 'Suzuki Samurai', price: 'From $90/Day', desc: 'Nimble and capable mini-SUV.', img: '/img/explore_car_section_2_pic_4.png', details: generateDetails('Suzuki', '1995', 'Mini SUV') },

            // Section 3: Sports Car (section = 3)
            { category: 'luxury-cars', section: 3, title: 'Seat Tarraco', price: 'From $140/Day', desc: 'Sophisticated design and spacious comfort.', img: '/img/explore_car_section_3_pic_1.png', details: generateDetails('Seat', '2023', 'SUV') },
            { category: 'luxury-cars', section: 3, title: 'Ford Cortina', price: 'From $110/Day', desc: 'Vintage reliability and classic lines.', img: '/img/explore_car_section_3_pic_2.png', details: generateDetails('Ford', '1982', 'Sedan') },
            { category: 'luxury-cars', section: 3, title: 'Porsche 911 Carrera', price: 'From $350/Day', desc: 'The benchmark for sports car precision.', img: '/img/explore_car_section_3_pic_3.png', details: generateDetails('Porsche', '2024', 'Sports Car') },
            { category: 'luxury-cars', section: 3, title: 'Rolls Royce Wraith', price: 'From $800/Day', desc: 'The pinnacle of automotive luxury and grace.', img: '/img/explore_car_section_3_pic_4.png', details: generateDetails('Rolls Royce', '2023', 'Ultra Luxury') }
        ];

        console.log('🧹 Cleaning existing luxury-cars data...');
        await db.query("DELETE FROM destinations WHERE category = 'luxury-cars'");

        for (const car of cars) {
            await db.query(
                'INSERT INTO destinations (category, title, price_info, description, image_url, bedrooms, bathrooms, kitchens, sq_ft, about_room, other_amenities) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [car.category, car.title, car.price, car.desc, car.img, car.section, 0, 0, 0, carAbout, car.details]
            );
        }

        console.log('✨ Explore Cars seeding complete!');
    } catch (err) {
        console.error('❌ Seeding Error:', err.message);
    } finally {
        process.exit();
    }
}

seed();
