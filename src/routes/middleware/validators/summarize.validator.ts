import { body, ValidationChain } from 'express-validator';

const min_length = body('min_length')
  .isInt({ min: 10, max: 200 })
  .withMessage('min_length has to be an integer, ranging from 10 to 200')
  .toInt();

const max_length = body('max_length')
  .isInt({ min: 10, max: 200 })
  .withMessage('max_length has to be an integer, ranging from 10 to 200')
  .toInt();

const minLessThanMax = body().custom((value, { req }) => {
  if (req.body.min_length >= req.body.max_length) {
    throw new Error('min_length should be less than max_length');
  }
  return true;
});

const url = body('url').isURL().withMessage('url has to be a valid URL');

export class SummarizeValidator {
  public validateCreateSummary(): ValidationChain[] {
    return [min_length, max_length, minLessThanMax, url];
  }
}

export default new SummarizeValidator();
