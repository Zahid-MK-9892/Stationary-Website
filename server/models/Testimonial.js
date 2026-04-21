import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true
  },
  clientRole: {
    type: String,
    required: true
  },
  company: {
    type: String
  },
  avatar: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  testimonial: {
    type: String,
    required: true
  },
  projectType: {
    type: String
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Testimonial', testimonialSchema);
