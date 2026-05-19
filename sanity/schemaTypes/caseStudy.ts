import { defineType, defineField } from 'sanity'

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'number', title: 'Number', type: 'string', description: 'e.g. "01"' }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'challenge', title: 'Challenge', type: 'text', rows: 3 }),
    defineField({
      name: 'approach',
      title: 'Approach',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'outcome', title: 'Outcome', type: 'text', rows: 2 }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category' } },
})
