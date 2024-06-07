import express, { Router } from 'express';
import summarizeController from '../controllers/summarize.controller';

const router: Router = express.Router();

router.post('/', summarizeController.createSummary);

export default router;
