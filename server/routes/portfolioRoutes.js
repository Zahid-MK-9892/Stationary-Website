import express from 'express';
import { getPortfolios, getFeaturedPortfolios, getPortfolioById, createPortfolio, updatePortfolio, deletePortfolio } from '../controllers/portfolioController.js';

const router = express.Router();

router.route('/')
  .get(getPortfolios)
  .post(createPortfolio);

router.get('/featured', getFeaturedPortfolios);

router.route('/:id')
  .get(getPortfolioById)
  .put(updatePortfolio)
  .delete(deletePortfolio);

export default router;
