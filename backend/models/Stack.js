const mongoose = require('mongoose');

const stackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true }, // Name of the Lucide icon or path
    category: { type: String, required: true }, // e.g. Frontend, Backend, Tools
    proficiency: { type: Number, default: 80 } // percentage
  },
  { timestamps: true }
);

module.exports = mongoose.model('Stack', stackSchema);
