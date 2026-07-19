import { ChatOpenAI } from '@langchain/openai';
import { LLMProvider, LLMProviderMeta } from '@nocobase/plugin-ai';

export class NemotronProvider extends LLMProvider {
  declare chatModel: ChatOpenAI;

  get baseURL() {
    return 'https://integrate.api.nvidia.com/v1';
  }

  createModel() {
    const { baseURL, apiKey } = this.serviceOptions || {};
    const { responseFormat } = this.modelOptions || {};

    const modelKwargs: Record<string, unknown> = {};
    if (responseFormat) {
      modelKwargs['response_format'] = { type: responseFormat };
    }

    return new ChatOpenAI({
      apiKey,
      ...this.modelOptions,
      modelKwargs,
      configuration: {
        baseURL: baseURL || this.baseURL,
      },
      verbose: false,
    });
  }

  async listModels(): Promise<{
    models?: { id: string }[];
    code?: number;
    errMsg?: string;
  }> {
    try {
      const { baseURL, apiKey } = this.serviceOptions || {};
      const url = `${baseURL || this.baseURL}/models`;
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      if (!response.ok) {
        return { code: response.status, errMsg: response.statusText };
      }
      const data = await response.json();
      return { models: data.data };
    } catch (e) {
      return { code: 500, errMsg: (e as Error).message };
    }
  }

  parseResponseError(err: Record<string, unknown>) {
    const message = (err as { message?: string })?.message;
    if (message) {
      return `NVIDIA NIM service error: ${message}`;
    }
    return 'Unexpected LLM service error';
  }
}

export const nemotronProviderOptions: LLMProviderMeta = {
  title: 'NVIDIA Nemotron',
  provider: NemotronProvider,
};
