import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ciauzchr',
  dataset: 'production',
  apiVersion: '2025-05-19',
  useCdn: true,
  stega: {
    studioUrl: '/studio',
  },
})
