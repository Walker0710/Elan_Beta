const Participant = require('../models/Participant');

const registerParticipant = async (req, res) => {
  const {
    leaderName,
    leaderEmail,
    leaderPhone,
    teammate1Name, teammate1Email,
    teammate2Name, teammate2Email,
    teammate3Name, teammate3Email,
    teammate4Name, teammate4Email,
    teammate5Name, teammate5Email
  } = req.body;

  // Validate required fields
  if (
    !leaderName || !leaderEmail || !leaderPhone ||
    !teammate1Name || !teammate1Email ||
    !teammate2Name || !teammate2Email ||
    !teammate3Name || !teammate3Email ||
    !teammate4Name || !teammate4Email ||
    !teammate5Name || !teammate5Email
  ) {
    return res.status(400).json({ message: 'All leader and teammate information is required' });
  }

  // Check for existing participant with the same leader email
  const existingLeader = await Participant.findOne({ leaderEmail });
  if (existingLeader) {
    return res.status(400).json({ message: 'A participant with this leader email already exists' });
  }

  // Check for existing teammates' emails
  const teammateEmails = [teammate1Email, teammate2Email, teammate3Email, teammate4Email, teammate5Email];
  const existingTeammates = await Participant.find({
    $or: teammateEmails.map(email => ({
      $or: [
        { teammate1Email: email },
        { teammate2Email: email },
        { teammate3Email: email },
        { teammate4Email: email },
        { teammate5Email: email }
      ]
    }))
  });

  if (existingTeammates.length > 0) {
    return res.status(400).json({ message: 'One or more teammates emails are already registered' });
  }

  try {
    const participant = new Participant({
      leaderName,
      leaderEmail,
      leaderPhone,
      teammate1Name, teammate1Email,
      teammate2Name, teammate2Email,
      teammate3Name, teammate3Email,
      teammate4Name, teammate4Email,
      teammate5Name, teammate5Email,
    });

    await participant.save();
    res.status(201).json({ message: 'Registered successfully' });
  } catch (error) {
    console.error('Error saving participant:', error);
    res.status(500).json({ message: 'Registration failed', error });
  }
};

module.exports = registerParticipant;
