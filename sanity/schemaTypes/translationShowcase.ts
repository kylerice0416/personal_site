import { defineType, defineField } from 'sanity'

export const translationShowcase = defineType({
  name: 'translationShowcase',
  title: 'Translation Showcase',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow Label', type: 'string', description: 'e.g. "Translation in Action"' }),
    defineField({ name: 'chineseText', title: 'Chinese Text (Left)', type: 'text', rows: 6 }),
    defineField({ name: 'chineseLabel', title: 'Chinese Panel Label', type: 'string', description: 'e.g. "Original · 繁體中文"' }),
    defineField({ name: 'englishText', title: 'English Translation (Right)', type: 'text', rows: 6 }),
    defineField({ name: 'englishLabel', title: 'English Panel Label', type: 'string', description: 'e.g. "Translation · English"' }),
  ],
})
