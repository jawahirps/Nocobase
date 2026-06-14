import { Plugin } from '@nocobase/client';
import PluginAIClient from '@nocobase/plugin-ai/client';
import { nemotronProviderOptions } from './llm-providers/nemotron';

export class PluginAINemotronClient extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.aiPlugin.aiManager.registerLLMProvider('nemotron', nemotronProviderOptions);
  }

  private get aiPlugin(): PluginAIClient {
    return this.app.pm.get('ai');
  }
}

export default PluginAINemotronClient;
