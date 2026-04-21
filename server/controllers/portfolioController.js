import Portfolio from '../models/Portfolio.js';

export const getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find().sort({ createdAt: -1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getFeaturedPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ featured: true }).sort({ createdAt: -1 });
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPortfolioById = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (portfolio) {
      res.json(portfolio);
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPortfolio = async (req, res) => {
  try {
    const { title, description, category, imageUrl, projectUrl, technologies, featured } = req.body;
    
    const portfolio = new Portfolio({
      title,
      description,
      category,
      imageUrl,
      projectUrl,
      technologies,
      featured
    });

    const createdPortfolio = await portfolio.save();
    res.status(201).json(createdPortfolio);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    
    if (portfolio) {
      portfolio.title = req.body.title || portfolio.title;
      portfolio.description = req.body.description || portfolio.description;
      portfolio.category = req.body.category || portfolio.category;
      portfolio.imageUrl = req.body.imageUrl || portfolio.imageUrl;
      portfolio.projectUrl = req.body.projectUrl || portfolio.projectUrl;
      portfolio.technologies = req.body.technologies || portfolio.technologies;
      portfolio.featured = req.body.featured !== undefined ? req.body.featured : portfolio.featured;

      const updatedPortfolio = await portfolio.save();
      res.json(updatedPortfolio);
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (portfolio) {
      await Portfolio.deleteOne({ _id: req.params.id });
      res.json({ message: 'Portfolio removed' });
    } else {
      res.status(404).json({ message: 'Portfolio not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
