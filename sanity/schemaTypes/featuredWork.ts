import { defineType, defineField } from 'sanity'

export const featuredWork = defineType({
  name: 'featuredWork',
  title: 'Featured Work',
  type: 'document',
  fields: [
    defineField({
      name: 'metrics',
      title: 'Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. "40+"' }),
            defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. "Projects"' }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        },
      ],
    }),
    defineField({ name: 'sectionHeading', title: 'Section Heading', type: 'string' }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'category', title: 'Category', type: 'string' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'hasCaseStudy', title: 'Has Case Study Link', type: 'boolean', initialValue: false }),
          ],
          preview: { select: { title: 'title', subtitle: 'category' } },
        },
      ],
    }),
  ],
})
