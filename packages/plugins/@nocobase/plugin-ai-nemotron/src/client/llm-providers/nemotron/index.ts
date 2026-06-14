import { LLMProviderOptions } from '@nocobase/plugin-ai/client';
import { ProviderSettingsForm } from './ProviderSettings';
import { ModelSettingsForm } from './ModelSettings';

export const nemotronProviderOptions: LLMProviderOptions = {
  components: {
    ProviderSettingsForm,
    ModelSettingsForm,
  },
};
