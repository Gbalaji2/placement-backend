import express from 'express';
import { getPlacements, createPlacement } from '../controllers/placementController.js';

const router = express.Router();
router.get('/', getPlacements);
router.post('/', createPlacement);

export default router;
