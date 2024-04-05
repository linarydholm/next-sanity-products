import Link from 'next/link';
import Image from 'next/image';
import { getProducts } from '@/sanity/sanity-utils';
// use revalidateTag to do a refetch on demand - step 2 (previous step in sanity-utils)
import { revalidateTag } from 'next/cache';

export default async function Home() {
  // use revalidateTag to do a refetch on demand - step 3
  revalidateTag('products');
  // get all products with Next app router
  const products = await getProducts();

  // console.log(products);

  return (
    <div className="px-4">
      <div className="m-auto max-w-5xl">
        <h1 className="font-bold text-5xl pb-12 pt-3">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Map
          </span>{' '}
          products here
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products &&
            products.map((product) => {
              return (
                <Link
                  className="group"
                  key={product._id}
                  href={`/products/${product.product_slug}`}
                >
                  <div className="grid-cols-1 border border-gray-500 rounded p-4">
                    {product.product_image && (
                      <div className="mb-2 overflow-hidden">
                        <Image
                          alt={product.product_image_alt}
                          width={400}
                          height={500}
                          src={product.product_image}
                          // place image? center?
                          className="aspect-4/5 hover:scale-105 object-cover transition duration-200"
                        />
                      </div>
                    )}
                    <h2 className="font-bold text-purple-600 text-xl mb-1 group-hover:transition-colors group-hover:duration-200 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:via-red-500 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                      {product.product_title}
                    </h2>
                    <p className="text-md font-medium">
                      {product.product_price ? product.product_price : 0} SEK
                    </p>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
