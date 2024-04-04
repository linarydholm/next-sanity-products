// this file will generate our Sanity Studio
// https://www.sanity.io/docs/config-api-reference

import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemas } from './sanity/schemas';
import { visionTool } from '@sanity/vision';

export const config = defineConfig({
  projectId: 'klpvilbh',
  dataset: 'production',
  title: 'my-sanityyyy-studioooooo',
  apiVersion: 'v2024-04-03',
  basePath: '/admin',
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: {
    types: schemas,
  },
});
