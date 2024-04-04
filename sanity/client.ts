import { createClient } from 'next-sanity';

// will eventually come from .env-file
const projectId = 'klpvilbh';
const dataset = 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || 'v2024-04-03';

// create a client:
export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: false, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
});
