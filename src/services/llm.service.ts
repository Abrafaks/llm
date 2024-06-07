export class LLMService {
  public createSummary(): Promise<string> {
    return Promise.resolve('success');
  }
}

export default new LLMService();
