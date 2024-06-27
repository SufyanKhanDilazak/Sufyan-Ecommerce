import { type SchemaTypeDefinition } from 'sanity'
import products from './products'
import { category } from "../sanity/category"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,category],
}
