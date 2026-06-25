const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    longDescription: { type: String },
    tags: [{ type: String }],
    imageUrl: { type: String, required: true },
    projectUrl: { type: String },
    stats: {
      onboarding: { type: String },
      signups: { type: String },
      engagement: { type: String }
    },
    category: { type: String },
    year: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Project', projectSchema);
