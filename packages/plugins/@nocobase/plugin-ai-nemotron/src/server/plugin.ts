import { Plugin } from '@nocobase/server';
import PluginAIServer from '@nocobase/plugin-ai';
import { nemotronProviderOptions } from './llm-providers/nemotron';

export class PluginAINemotronServer extends Plugin {
  async afterAdd() {}

  async beforeLoad() {}

  async load() {
    this.aiPlugin.aiManager.registerLLMProvider('nemotron', nemotronProviderOptions);
  }

  async install() {}

  async afterEnable() {}

  async afterDisable() {}

  async remove() {}

  private get aiPlugin(): PluginAIServer {
    return this.app.pm.get('ai');
  }
}

export default PluginAINemotronServer;
