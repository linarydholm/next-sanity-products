import Link from 'next/link';
import Image from 'next/image';
import { getProduct } from '@/sanity/sanity-utils';
import { revalidateTag } from 'next/cache';
// Link for PortableText:
// https://www.npmjs.com/package/@portabletext/react
import { PortableText } from '@portabletext/react';

type ProductPageProps = {
  params: { product: string };
};

export default async function ProductPage({ params }: ProductPageProps) {
  revalidateTag('product');

  // params gives us an object with the key product (from the route [product])
  // we get for example: { product: 'watermelon-splash' } from params
  // this is why we use params.product (to get only the slug)
  const slug = params.product;
  const product = await getProduct(slug);

  // console.log('PRODUKT:', slug, product);
  // console.log('hej', typeof product.product_description);

  return (
    <div className="px-4">
      <div className="max-w-5xl m-auto grid">
        <div className="md:grid md:grid-cols-2">
          <section className="overflow-hidden flex justify-center pt-4">
            <Image
              className="aspect-[1/1] object-cover"
              src={product.product_image}
              width={1200}
              height={1200}
              alt={product.product_image_alt}
            />
          </section>

          <section className="py-4 md:px-4">
            {product.product_title && (
              <h1 className="text-5xl font-semibold">{product.product_title}</h1>
            )}

            {product.product_price && (
              <p className="text-3xl font-medium pt-3">{product.product_price} SEK</p>
            )}

            {product.product_description && (
              <div className="pt-9 text-md list-disc">
                <PortableText
                  value={product.product_description}
                  // components={/* optional object of custom components to use */}
                />
              </div>
            )}

            {product.supplier_url && (
              <div className="pt-3">
                <Link
                  className="underline hover:bg-gradient-to-r hover:from-orange-400 hover:via-red-500 hover:to-purple-600 hover:bg-clip-text hover:text-transparent"
                  href={product.supplier_url}
                  // why do you want a title to your a or Link tag?
                  title="Link to supplier"
                  target="_blank"
                >
                  Link to supplier
                </Link>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
