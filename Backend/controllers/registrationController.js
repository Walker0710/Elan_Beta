// const Participant = require('../models/Participant');

// const registerParticipant = async (req, res) => {
//   const { leaderName, leaderEmail, leaderPhone, teammates } = req.body;

//   // Validate required fields
//   if (!leaderName || !leaderEmail || !leaderPhone) {
//     return res.status(400).json({ message: 'Leader information is required' });
//   }

  // Validate teammates
  // const validTeammates = teammates.every(
  //   (teammate, index) => 
  //     teammate.name && teammate.email || (index >= 4 && (!teammate.name && !teammate.email))
  // );

//   const validTeammates = teammates.every(
//     (teammate, index) =>
//       teammate.name && (teammate.email || (index >= 4 && !teammate.name && !teammate.email))
//   );

//   if (!validTeammates) {
//     return res.status(400).json({ message: 'Please provide valid information for teammates' });
//   }

//   try {
//     const participant = new Participant({
//       leaderName,
//       leaderEmail,
//       leaderPhone,
//       teammates: teammates.filter(teammate => teammate.name && teammate.email), // Only include teammates with complete info
//     });

//     await participant.save();
//     res.status(201).json({ message: 'Registered successfully' });
//   } catch (error) {
//     console.error('Error saving participant:', error);
//     res.status(500).json({ message: 'Registration failed', error });
//   }
// };

// module.exports = registerParticipant;


const Participant = require('../models/Participant');

const registerParticipant = async (req, res) => {
  const { leaderName, leaderEmail, leaderPhone, teammates } = req.body;

  // Validate required fields
  if (!leaderName || !leaderEmail || !leaderPhone) {
    return res.status(400).json({ message: 'Leader information is required' });
  }

  // Validate teammates
  const validTeammates = teammates.every(
    (teammate, index) =>
      teammate.name && (teammate.email || (index >= 4 && !teammate.name && !teammate.email))
  );

  if (!validTeammates) {
    return res.status(400).json({ message: 'Please provide valid information for teammates' });
  }

  // Check for existing participant with the same leader email
  const existingLeader = await Participant.findOne({ leaderEmail });
  if (existingLeader) {
    return res.status(400).json({ message: 'A participant with this leader email already exists' });
  }

  // Check for existing teammates' emails
  const teammatesEmails = teammates.map(teammate => teammate.email).filter(email => email);
  const existingTeammates = await Participant.find({
    $or: teammatesEmails.map(email => ({ 'teammates.email': email }))
  });

  if (existingTeammates.length > 0) {
    return res.status(400).json({ message: 'One or more teammates emails are already registered' });
  }

  try {
    const participant = new Participant({
      leaderName,
      leaderEmail,
      leaderPhone,
      teammates: teammates.filter(teammate => teammate.name && teammate.email), // Only include teammates with complete info
    });

    await participant.save();
    res.status(201).json({ message: 'Registered successfully' });
  } catch (error) {
    console.error('Error saving participant:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
};

module.exports = registerParticipant;
