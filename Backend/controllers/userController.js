// const User = require('../models/User');
// const { sendRegistrationEmail } = require('../utils/mailer');

// exports.register = async (req, res) => {
//     const { firstName, lastName, email } = req.body;

//     try {
//         const existingUser = await User.findOne({ $or: [{ firstName }, { lastName }] });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         const user = await User.create({ firstName, lastName });

//         res.status(201).json();
//     } catch (error) {
//         console.error('Error during registration:', error);
//         res.status(500).json({ message: 'Server error' });
//     }
// };

const User = require('../models/User');
const { sendRegistrationEmail } = require('../utils/mailer');

exports.register = async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const user = await User.create({ firstName, lastName, email });
    
    // Send registration email
    await sendRegistrationEmail(email, firstName);

    res.status(201).json({ message: 'User registered successfully' }); 
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
