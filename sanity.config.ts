import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'default',
  title: 'OloResort Blog',

  projectId,
  dataset,
  basePath: '/studio',

  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],

  schema,
})

