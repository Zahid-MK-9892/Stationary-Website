import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Portfolio title is required'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Web Development', 'Mobile App', 'UI/UX Design', 'Graphic Design', 'Content Writing', 'Other'],
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  projectUrl: {
    type: String,
    default: ''
  },
  technologies: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Portfolio', portfolioSchema);
