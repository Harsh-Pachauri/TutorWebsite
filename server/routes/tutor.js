const express = require('express');
const router = express.Router();
const Tutor = require('../models/tutor');
const auth = require('../middlewares/auth');

// Register a new tutor
router.post('/register', async (req, res) => {
    try {
        const newTutor = new Tutor({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            subject: req.body.subject,
            qualification: req.body.qualification,
            experience: req.body.experience,
            hourlyRate: req.body.hourlyRate,
            bio: req.body.bio
        });
        await newTutor.save();
        res.send('Tutor registered successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a tutor profile
router.put('/update/:id', auth, async (req, res) => {
    try {
        const updatedTutor = await Tutor.findByIdAndUpdate(req.params.id, req.body);
        res.send('Profile updated successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Delete a tutor profile
router.delete('/delete/:id', auth, async (req, res) => {
    try {
        await Tutor.findByIdAndDelete(req.params.id);
        res.send('Tutor profile deleted');
    } catch (err) {
        res.status(500).send(err);
    }
});

// Get a single tutor's profile
router.get('/profile/:id', auth, async (req, res) => {
    try {
        const tutor = await Tutor.findById(req.params.id);
        res.json(tutor);
    } catch (err) {
        res.status(404).send('Tutor not found');
    }
});

module.exports = router;
