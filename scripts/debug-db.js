const db = require('../config/db');

async function debug() {
    try {
        const [rows] = await db.query("SELECT * FROM destinations WHERE category = 'luxury-cars'");
        console.log('Total Cars:', rows.length);
        if (rows.length > 0) {
            console.log('Sample Row keys:', Object.keys(rows[0]));
            console.log('Sample Row bedrooms:', rows[0].bedrooms, typeof rows[0].bedrooms);
            const sections = {};
            rows.forEach(r => {
                sections[r.bedrooms] = (sections[r.bedrooms] || 0) + 1;
            });
            console.log('Section counts:', sections);
        } else {
            console.log('No cars found in database for category luxury-cars');
        }
    } catch (err) {
        console.error('Debug Error:', err);
    } finally {
        process.exit();
    }
}

debug();
