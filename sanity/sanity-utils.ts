// in this file are all the functions that we are going to use to grab data
// groq query cheat sheet:
// https://www.sanity.io/docs/query-cheat-sheet

// import your client to use
import { ProductProps } from '@/types/Product.types';
import { PageProps } from '@/types/Page.types';
import { client } from './client';

// I don't have to import groq (anymore?)
// import { groq } from 'next-sanity';

// returns all products
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

// returns a single product
export async function getProduct(slug: string): Promise<ProductProps> {
  const product = client.fetch(
    // find the products who's slug is equal to the slug I'm passing to the function
    // and return value for index 0 from the array: product_slug.current == $slug][0]
    `*[_type == "products" && product_slug.current == $slug][0]{
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
    // return slug: slug or just slug from the fetch? (check this out)
    { slug },
    {
      next: { tags: ['product'] },
    }
  );

  return product;
}

// (): Promise<PageProps[]> returns a Promise with the type PageProps
// returns what we need in the navbar (we don't need content)
export async function getPages(): Promise<PageProps[]> {
  const pages = client.fetch(
    `*[_type == "pages"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`,
    {},
    {
      next: { tags: ['pages'] },
    }
  );

  return pages;
}

// returns...
export async function getPage(slug: string): Promise<PageProps> {
  const page = client.fetch(
    `*[_type == "pages" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
    }`,
    { slug },
    {
      next: { tags: ['page'] },
    }
  );

  return page;
}
