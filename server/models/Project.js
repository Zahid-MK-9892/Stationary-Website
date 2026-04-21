import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  category: {
    type: String,
    enum: ['Web Development', 'Mobile App', 'UI/UX Design', 'Graphic Design', 'Content Writing', 'Other'],
    required: true
  },
  budget: {
    type: Number,
    required: true
  },
  timeline: {
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  clientEmail: {
    type: String,
    required: true
  },
  clientPhone: {
    type: String,
    required: false
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'cancelled'],
    default: 'pending'
  },
  attachments: [{
    name: String,
    url: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Project', projectSchema);
