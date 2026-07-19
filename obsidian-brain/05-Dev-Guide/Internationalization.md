# Internationalization (i18n)

#i18n #dev-guide

All user-facing strings must go through the i18n layer. Never hardcode English text in UI components.

## Client-Side

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation('my-plugin');
  return <Button>{t('Submit')}</Button>;
};
```

## Server-Side

```ts
import { i18n } from '@nocobase/server';
const t = i18n.t.bind(i18n);
throw new Error(t('Record not found'));
```

## Adding Translation Keys

Both `en-US` and `zh-CN` are required for every new string.

```
packages/plugins/@nocobase/plugin-my-plugin/
└── src/
    └── locale/
        ├── en-US.json
        └── zh-CN.json
```

```json
// en-US.json
{
  "Submit": "Submit",
  "Record not found": "Record not found"
}

// zh-CN.json
{
  "Submit": "提交",
  "Record not found": "记录未找到"
}
```

## Documentation i18n

Docs live in `docs/docs/` with subdirectories per language:
`en/` · `cn/` · `ja/` · `fr/` · `es/` · `pt/` · `ko/` · `ar/` · `ru/` · `de/`

## Related Notes

- [[Code Conventions]]
- [[Dev Workflow]]
