import express from 'express';
import { getTestimonials, getFeaturedTestimonials, createTestimonial, updateTestimonial, deleteTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.route('/')
  .get(getTestimonials)
  .post(createTestimonial);

router.get('/featured', getFeaturedTestimonials);

router.route('/:id')
  .put(updateTestimonial)
  .delete(deleteTestimonial);

export default router;
