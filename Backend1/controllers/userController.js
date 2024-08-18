const User = require('../models/User');

// exports.register = async (req, res) => {
//     // const { firstName, lastName, dob, grade, password, school, personalNumber, parentNumber, email} = req.body;
//     const { firstName, lastName } = req.body;

//     try {
//         // await User.create({ firstName, lastName, dob, grade, password, school, personalNumber, parentNumber, email});
//         await User.create({ firstName, lastName });
//         res.status(201);
//     } catch (error) {
//         res.status(500).json({ message: 'Server error' });
//     }
// };


exports.register = async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        await User.create({ firstName, lastName });
        res.status(201).json({ message: 'User registered successfully' }); 
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};