// name is ...
// title is the title over the field in sanity studio

import { title } from 'process';

// type is what schema type the object has:
// https://www.sanity.io/docs/schema-types

// different types has different properties (some are required), options and validations
// see example: https://www.sanity.io/docs/array-type

export const product = {
  title: 'Products',
  name: 'products',
  type: 'document',
  fields: [
    {
      title: 'Product title',
      name: 'product_title',
      type: 'string',
    },
    {
      title: 'Product slug',
      name: 'product_slug',
      type: 'slug',
      options: {
        source: 'product_title',
      },
    },
    {
      title: 'Product price',
      name: 'product_price',
      type: 'number',
    },
    {
      title: 'Product image',
      name: 'product_image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt',
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      title: 'URL to supplier',
      name: 'supplier_url',
      type: 'url',
    },
    {
      title: 'Product description',
      name: 'product_description',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
