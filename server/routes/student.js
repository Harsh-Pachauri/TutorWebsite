const express = require('express');
const router = express.Router();
const Student = require('../models/student');
const auth = require('../middlewares/auth');

// Register a student
router.post('/register', async (req, res) => {
    try {
        const newStudent = new Student({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            bio: req.body.bio
        });
        await newStudent.save();
        res.send('Student registered successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

// Update a student profile
router.put('/update/:id', auth, async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body);
        res.send('Profile updated successfully');
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;
