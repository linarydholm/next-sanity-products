import { PortableTextBlock } from 'next-sanity';

export type PageProps = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};
