const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');

// Route Imports
const tutorRoutes = require('./routes/tutor');
const studentRoutes = require('./routes/student');
const adminRoutes = require('./routes/admin');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/api/tutors', tutorRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Start the server
app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
