const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  leaderName: { type: String, required: true },
  leaderEmail: { type: String, required: true, unique: true },
  leaderPhone: { type: String, required: true },
  teammate1Name: { type: String, required: true },
  teammate1Email: { type: String, required: true, unique: true },
  teammate2Name: { type: String, required: true },
  teammate2Email: { type: String, required: true, unique: true },
  teammate3Name: { type: String, required: true },
  teammate3Email: { type: String, required: true, unique: true },
  teammate4Name: { type: String, required: true },
  teammate4Email: { type: String, required: true, unique: true },
  teammate5Name: { type: String, required: true },
  teammate5Email: { type: String, required: true, unique: true },
  registeredAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Participant', participantSchema, 'users');
