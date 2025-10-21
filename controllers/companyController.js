import Company from '../models/Company.js';

export const getCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

export const createCompany = async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
