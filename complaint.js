const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'Pending'
  },
  refId: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true }); // auto adds createdAt

module.exports = mongoose.model('Complaint', ComplaintSchema);
