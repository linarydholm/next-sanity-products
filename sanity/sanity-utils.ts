// in this file are all the functions that we are going to use to grab data
// groq query cheat sheet:
// https://www.sanity.io/docs/query-cheat-sheet

// import your client to use
import { ProductProps } from '@/types/Product.types';
import { client } from './client';

// I don't have to import groq (anymore?)
// import { groq } from 'next-sanity';

export async function getProducts(): Promise<ProductProps[]> {
  // example of an image asset that product_image is:
  // https://www.sanity.io/docs/image-type#df3f768ce073

  // grab the "products" and the following content:
  // another example: "product_description_text": product_description[].children[].text,
  const products = await client.fetch(
    // groq (I don't have to use this to my query anymore?)
    `*[_type == "products"]{
      _id,
      _createdAt,
      product_title,
      "product_slug": product_slug.current,
      product_price,
      "product_image": product_image.asset->url,
      "product_image_alt": product_image.alt,
      supplier_url,
      product_description,
    }`,
    {},
    {
      // use revalidateTag to do a refetch on demand - step 1, next step on index page
      // https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#on-demand-revalidation
      next: { tags: ['products'] },
    }
  );

  return products;
}
