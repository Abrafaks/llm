const TransformersApi = Function('return import("@xenova/transformers")')();
import axios from 'axios';
import { JSDOM } from 'jsdom';

interface CreateSummaryData {
  min_length: number;
  max_length: number;
  url: string;
}

export class LLMService {
  public async createSummary(createSummaryData: CreateSummaryData): Promise<string | null> {
    const { url, min_length, max_length } = createSummaryData;
    try {
      const article = await this.fetchArticleContent(url);

      if (!article) {
        return null;
      }

      const { pipeline } = await TransformersApi;
      const pipe = await pipeline('summarization');
      const summary = await pipe(article, { min_length, max_length });

      if (!summary) {
        return null;
      }

      return summary[0].summary_text;
    } catch (error) {
      throw new Error('Could not generate summary');
    }
  }

  private async fetchArticleContent(url: string): Promise<string | null> {
    try {
      const response = await axios.get(url);
      const dom = new JSDOM(response.data);
      const document = dom.window.document;

      const articleElement = document.querySelector('article') || document.querySelector('body');
      const content = articleElement?.textContent;

      return content?.trim() ? content : null;
    } catch (error) {
      return null;
    }
  }
}

export default new LLMService();
