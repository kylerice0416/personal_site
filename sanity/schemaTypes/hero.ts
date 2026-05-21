import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'headline', title: 'Headline', type: 'string' }),
    defineField({ name: 'subtext', title: 'Subtext', type: 'text', rows: 3 }),
    defineField({ name: 'primaryCtaLabel', title: 'Primary CTA Label', type: 'string' }),
    defineField({ name: 'primaryCtaHref', title: 'Primary CTA Href', type: 'string' }),
    defineField({ name: 'secondaryCtaLabel', title: 'Secondary CTA Label', type: 'string' }),
    defineField({ name: 'secondaryCtaHref', title: 'Secondary CTA Href', type: 'string' }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
    }),
    defineField({ name: 'animatedPhraseZh', title: 'Animated Phrase — Chinese', type: 'string', description: 'e.g. "世界"' }),
    defineField({ name: 'animatedPhraseEn', title: 'Animated Phrase — English', type: 'string', description: 'e.g. "the world."' }),
    defineField({ name: 'focusAreasEyebrow', title: 'Focus Areas Eyebrow', type: 'string' }),
    defineField({
      name: 'focusAreas',
      title: 'Focus Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'string' }),
          ],
          preview: { select: { title: 'title' } },
        },
      ],
    }),
  ],
})
