import { Request, Response } from 'express';
import { matchedData } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import llmService, { LLMService } from '../services/llm.service';

export class SummarizeController {
  constructor(private llmService: LLMService) {}

  public async createSummary(req: Request, res: Response): Promise<Response> {
    try {
      const { amountOfSentences, url, min_length, max_length } = matchedData(req);

      const createSummaryData = { amountOfSentences, url, min_length, max_length };
      const articleSummary = await llmService.createSummary(createSummaryData);

      if (!articleSummary) {
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .send('There was an error with getting article from URL or with processing article into summary');
      }

      return res.status(StatusCodes.OK).type('text/plain').send(articleSummary);
    } catch (err) {
      return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new SummarizeController(llmService);
