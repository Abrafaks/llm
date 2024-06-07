interface CreateSummaryData {
  amountOfSentences: number;
  url: string;
}

export class LLMService {
  public createSummary(createSummaryData: CreateSummaryData): Promise<CreateSummaryData> {
    return Promise.resolve(createSummaryData);
  }
}

export default new LLMService();
