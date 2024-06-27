import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import  ImageUrlBuilder  from '@sanity/image-url'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  perspective: 'published',
})
const builder = ImageUrlBuilder(client)
export function urlForImage(source: any){
return builder.image(source);
}
