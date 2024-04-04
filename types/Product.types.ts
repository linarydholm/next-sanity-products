// sanity stores rich content in PortableTextBlock
import { PortableTextBlock } from 'next-sanity';

export type ProductProps = {
  _id: string;
  _createdAt: Date;
  product_title: string;
  product_slug: string;
  product_price: number;
  product_image: string;
  product_image_alt: string;
  supplier_url: string;
  product_description: PortableTextBlock[];
  // product_description_text: string;
};
