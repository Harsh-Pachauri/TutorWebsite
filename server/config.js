require('dotenv').config();

const config = {
    mongoURI: process.env.DB_URI || 'mongodb://localhost:27017/tutor-portal',
    jwtSecret: process.env.JWT_SECRET || 'my_super_secret_key',
    port: process.env.PORT || 3000,
};

module.exports = config;
