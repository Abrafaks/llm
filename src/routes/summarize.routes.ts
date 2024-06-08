import express, { Router } from 'express';
import summarizeController from '../controllers/summarize.controller';
import summarizeValidator from './middleware/validators/summarize.validator';
import { validate } from './middleware/validators/validator';

const router: Router = express.Router();

/**
 * @swagger
 * /summarize/:
 *   post:
 *     tags:
 *       - summary
 *     description: Create a summary of an article
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: |
 *                   Url of an article
 *                 example: https://www.bbc.com/news/articles/cl7744p258yo
 *               min_length:
 *                 type: integer
 *                 description: |
 *                   The minimum length of the sequence to be generated. Range: 10-200. Has to be lower than max_length.
 *                 example: 20
 *               max_length:
 *                 type: integer
 *                 description: |
 *                   The maximum length the generated tokens can have. Range: 50-100.
 *                 example: 60
 *             required:
 *               - url
 *               - min_length
 *               - max_length
 *             example:
 *               url: https://www.bbc.com/news/articles/cl7744p258yo
 *               min_length: 20
 *               max_length: 60
 *     responses:
 *       '200':
 *         description: Summary created successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Iga Swiatek has won three French Open titles in four of the past five years. The Pole won 6-2 6-1 over Italian 12th seed Jasmine Paolini"
 *       '400':
 *         description: Bad Request
 *       '500':
 *         description: Internal Server Error
 */

router.post('/', summarizeValidator.validateCreateSummary(), validate, summarizeController.createSummary);

/**
 *
 * /summarize/:
 *   post:
 *     tags:
 *       - summary
 *     description:  |
 *       Create a summary of an article
 *     produces:
 *       - text/plain
 *     parameters:
 *       - in: body
 *         name: url
 *         schema:
 *           type: string
 *         description: Url of an article
 *         example: https://www.bbc.com/news/articles/cl7744p258yo
 *         required: true
 *       - in: body
 *         name: min_length
 *         schema:
 *           type: int
 *         description: The minimum length of the sequence to be generated. Range: 10-200. Has to be lower than max_length.
 *         example: 20
 *         required: true
 *       - in: body
 *         name: max_length
 *         schema:
 *           type: int
 *         description: The maximum length the generated tokens can have. Range: 50-100.
 *         example: 60
 *         required: true
 *
 *     responses:
 *       200:
 *         description: Summary created successfully
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Iga Swiatek has won three French Open titles in four of the past five years. The Pole won 6-2 6-1 over Italian 12th seed Jasmine Paolini"
 *       400:
 *         description: Bad Request
 *       500:
 *         description: Internal Server Error
 */
export default router;
