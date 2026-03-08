const db = require('./config/db');

async function checkData() {
    console.log('🔍 Auditing TiDB Cloud Data...\n');

    const tables = ['testimonials', 'site_faqs', 'services', 'car_rides', 'destinations', 'bookings'];

    for (const table of tables) {
        try {
            const [rows] = await db.query(`SELECT * FROM ${table}`);
            console.log(`📊 Table [${table.toUpperCase()}]: ${rows.length} records found.`);
            if (rows.length > 0) {
                console.table(rows.slice(0, 5)); // Show first 5 records
                console.log('\n' + '-'.repeat(50) + '\n');
            }
        } catch (err) {
            console.log(`❌ Error reading table [${table}]: ${err.message}`);
        }
    }
    process.exit();
}

checkData();
