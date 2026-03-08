const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function initDB() {
    console.log('🚀 Connecting to TiDB Cloud...');

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: false
        },
        multipleStatements: true
    });

    try {
        console.log('✅ Connected! Reading schema.sql...');
        const sql = fs.readFileSync(path.join(__dirname, '..', 'database', 'schema.sql'), 'utf8');

        console.log('🛠️ Creating tables...');
        await connection.query(sql);

        console.log('✨ Success! TiDB Database is initialized and ready.');
    } catch (err) {
        console.error('❌ Migration Error:', err.message);
    } finally {
        await connection.end();
        process.exit(0);
    }
}

initDB();
