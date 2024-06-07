import { body, ValidationChain } from 'express-validator';

const amountOfSentences = body('amountOfSentences')
  .isInt({ min: 1, max: 25 })
  .withMessage('Amount of sentences has to be an integer, ranging from 1 to 25')
  .toInt();
const url = body('url').isURL().withMessage('url has to be a valid URL');

export class SummarizeValidator {
  public validateCreateSummary(): ValidationChain[] {
    return [amountOfSentences, url];
  }
}

export default new SummarizeValidator();
