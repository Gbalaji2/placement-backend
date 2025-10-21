import Placement from '../models/Placement.js';

export const getPlacements = async (req, res) => {
  const placements = await Placement.find().populate('company');
  res.json(placements);
};

export const createPlacement = async (req, res) => {
  try {
    const placement = await Placement.create(req.body);
    res.status(201).json(placement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
