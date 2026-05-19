import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', description: 'e.g. "Ai Chien"' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string', description: 'e.g. "Chinese ↔ English"' }),
    defineField({ name: 'subtitle', title: 'Subtitle', type: 'string', description: 'e.g. "Translation & Localization"' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'location', title: 'Location', type: 'string', description: 'e.g. "Taipei, Taiwan"' }),
    defineField({ name: 'locationSubtext', title: 'Location Subtext', type: 'string', description: 'e.g. "Working with clients worldwide"' }),
    defineField({ name: 'languages', title: 'Languages', type: 'string', description: 'e.g. "English · 繁體中文 · 简体中文"' }),
    defineField({ name: 'responseTime', title: 'Response Time', type: 'string', description: 'e.g. "Within 2 working days"' }),
    defineField({ name: 'footerDescription', title: 'Footer Description', type: 'string' }),
    defineField({ name: 'aboutPhilosophy', title: 'About — Philosophy', type: 'text', rows: 4 }),
    defineField({
      name: 'background',
      title: 'About — Background',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'period', title: 'Period', type: 'string', description: 'e.g. "2024 — Present" or "MA Translation Studies"' }),
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'period' } },
        },
      ],
    }),
    defineField({
      name: 'contactProjectTypes',
      title: 'Contact Form — Project Types',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Options shown in the contact form project type dropdown',
    }),
  ],
})
