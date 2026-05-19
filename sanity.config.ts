import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { presentationTool } from 'sanity/presentation'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

const singletonTypes = new Set(['hero', 'siteSettings', 'featuredWork', 'cta'])

export default defineConfig({
  name: 'default',
  title: 'Ai Chien Studio',
  projectId: 'ciauzchr',
  dataset: 'production',
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Hero')
              .id('hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.listItem()
              .title('Featured Work')
              .id('featuredWork')
              .child(S.document().schemaType('featuredWork').documentId('featuredWork')),
            S.listItem()
              .title('CTA')
              .id('cta')
              .child(S.document().schemaType('cta').documentId('cta')),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId()!)
            ),
          ]),
    }),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
})
