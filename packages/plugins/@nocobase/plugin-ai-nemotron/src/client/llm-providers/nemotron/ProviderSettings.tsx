import React from 'react';
import { SchemaComponent } from '@nocobase/client';
import { tval } from '@nocobase/utils/client';
import { namespace } from '../../locale';

export const ProviderSettingsForm: React.FC = () => {
  return (
    <SchemaComponent
      schema={{
        type: 'void',
        properties: {
          apiKey: {
            title: tval('API Key', { ns: namespace }),
            type: 'string',
            required: true,
            'x-decorator': 'FormItem',
            'x-component': 'TextAreaWithGlobalScope',
          },
          baseURL: {
            title: tval('Base URL', { ns: namespace }),
            type: 'string',
            'x-decorator': 'FormItem',
            'x-component': 'TextAreaWithGlobalScope',
            'x-component-props': {
              placeholder: 'https://integrate.api.nvidia.com/v1',
            },
          },
        },
      }}
    />
  );
};
