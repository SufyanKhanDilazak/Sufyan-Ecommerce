import { category } from "./category";

export default {
  name: "products",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name Of Product",
    },

    {
      name: "image",
      type: "array",
      title: "Product Images",
      of: [{ type: "image" }],
    },

    {
      name: "description",
      type: "text",
      title: "Description Of Product",
    },

    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },

    {
      name: "price",
      type: "number",
      title: "Price",
    },
    {
      name: "price_id",
      title: "Stripe Price ID",
      type: "string",
    },

    {
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    },
  ],
};
