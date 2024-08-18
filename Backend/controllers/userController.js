const User = require('../models/User');

exports.register = async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        const existingUser = await User.findOne({ $or: [{ firstName }, { lastName }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({ firstName, lastName });

        res.status(201).json();
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Server error' });
    }
};