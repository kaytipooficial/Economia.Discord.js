const mongoose = require('mongoose');

const economiaSchema = new mongoose.Schema({
  guildId: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  dinero: {
    type: Number,
    default: 0
  },
  banco: {
    type: Number,
    default: 0
  },
  lastWork: {
    type: Date,
    default: null
  },
  lastCollect: {
    type: Map,
    of: Date,
    default: {}
  },
  lastRob: { 
    type: Date,
    default: null
  },
  shopItems: [
    {
      name: String,
      price: Number,
      description: String,
      roleId: String
    }
  ]
});

module.exports = mongoose.model('Economia', economiaSchema);
