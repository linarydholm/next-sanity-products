import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from 'next-sanity';

type PageProps = {
  params: { slug: string };
};

export default async function Page({ params }: PageProps) {
  const page = await getPage(params.slug);

  return (
    <div className="px-4">
      <div className="m-auto max-w-5xl">
        <h1 className="mt-4 mb-8 font-semibold text-3xl">{page.title}</h1>

        <div className="text-md text-blue-800">
          <PortableText value={page.content} />
        </div>
      </div>
    </div>
  );
}
