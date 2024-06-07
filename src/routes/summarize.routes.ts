import express, { Router } from 'express';
import summarizeController from '../controllers/summarize.controller';
import summarizeValidator from './middleware/validators/summarize.validator';
import { validate } from './middleware/validators/validator';

const router: Router = express.Router();

router.post('/', summarizeValidator.validateCreateSummary(), validate, summarizeController.createSummary);

export default router;
