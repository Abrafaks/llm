import { body, ValidationChain } from 'express-validator';

const min_length = body('minLength')
  .isInt({ min: 15, max: 50 })
  .withMessage('min_length has to be an integer, ranging from 15 to 50')
  .toInt();

const max_length = body('maxLength')
  .isInt({ min: 50, max: 100 })
  .withMessage('max_length has to be an integer, ranging from 50 to 100')
  .toInt();

const url = body('url').isURL().withMessage('url has to be a valid URL');

export class SummarizeValidator {
  public validateCreateSummary(): ValidationChain[] {
    return [url, min_length, max_length];
  }
}

export default new SummarizeValidator();
