const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const tutorSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    subject: String,
    qualification: String,
    experience: String,
    hourlyRate: Number,
    bio: String
});

tutorSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

module.exports = mongoose.model('Tutor', tutorSchema);
