import { defineType, defineField } from 'sanity'

export const portfolioProject = defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({ name: 'year', title: 'Year', type: 'string' }),
    defineField({
      name: 'sector',
      title: 'Sector',
      type: 'string',
      options: {
        list: [
          { title: 'Cultural', value: 'Cultural' },
          { title: 'Game', value: 'Game' },
          { title: 'Marketing', value: 'Marketing' },
          { title: 'Editorial', value: 'Editorial' },
        ],
      },
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'client', title: 'Client (optional)', type: 'string' }),
    defineField({ name: 'details', title: 'Details', type: 'text', rows: 3 }),
    defineField({ name: 'caseStudy', title: 'Has Case Study', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'sector' } },
})
