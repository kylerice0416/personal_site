import { defineType, defineField } from 'sanity'

export const cta = defineType({
  name: 'cta',
  title: 'CTA',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'buttonLabel', title: 'Button Label', type: 'string' }),
    defineField({ name: 'buttonHref', title: 'Button Href', type: 'string' }),
  ],
})
