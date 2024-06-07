/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import llmService, { LLMService } from '../services/llm.service';

export class SummarizeController {
  constructor(private llmService: LLMService) {}

  public async createSummary(req: Request, res: Response): Promise<Response> {
    try {
      const llmServiceResponse = await llmService.createSummary();
      return res.status(StatusCodes.OK).send({ works: llmServiceResponse });
    } catch (err) {
      return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export default new SummarizeController(llmService);
