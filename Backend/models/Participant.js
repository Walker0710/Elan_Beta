const mongoose = require('mongoose');

const teammateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, sparse: true},
});

const participantSchema = new mongoose.Schema({
  leaderName: { type: String, required: true },
  leaderEmail: { type: String, required: true},
  leaderPhone: { type: String, required: true },
  teammates: {
    type: [teammateSchema],
    validate: [arrayLimit, 'Exceeds the limit of 6 teammates'],
  },
  registeredAt: { type: Date, default: Date.now },
});

function arrayLimit(val) {
  return val.length <= 6;
}

module.exports = mongoose.model('Participant', participantSchema);
