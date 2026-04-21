import Testimonial from '../models/Testimonial.js';

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeaturedTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ featured: true }).sort({ createdAt: -1 });
    res.json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const { clientName, clientRole, company, avatar, rating, testimonial, projectType, featured } = req.body;
    
    const testimonial = new Testimonial({
      clientName,
      clientRole,
      company,
      avatar,
      rating,
      testimonial,
      projectType,
      featured
    });

    const createdTestimonial = await testimonial.save();
    res.status(201).json(createdTestimonial);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    
    if (testimonial) {
      testimonial.clientName = req.body.clientName || testimonial.clientName;
      testimonial.clientRole = req.body.clientRole || testimonial.clientRole;
      testimonial.company = req.body.company || testimonial.company;
      testimonial.avatar = req.body.avatar || testimonial.avatar;
      testimonial.rating = req.body.rating || testimonial.rating;
      testimonial.testimonial = req.body.testimonial || testimonial.testimonial;
      testimonial.projectType = req.body.projectType || testimonial.projectType;
      testimonial.featured = req.body.featured !== undefined ? req.body.featured : testimonial.featured;

      const updatedTestimonial = await testimonial.save();
      res.json(updatedTestimonial);
    } else {
      res.status(404).json({ message: 'Testimonial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (testimonial) {
      await Testimonial.deleteOne({ _id: req.params.id });
      res.json({ message: 'Testimonial removed' });
    } else {
      res.status(404).json({ message: 'Testimonial not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
