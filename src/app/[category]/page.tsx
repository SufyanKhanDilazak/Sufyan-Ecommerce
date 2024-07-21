import Link from "next/link";
import Image from "next/image";
import { IIprops } from "../components/Interface";
import { client } from "../../../sanity/lib/client";
import Footer from "../components/Footer";

async function getData(cateogry: string) {
  const query = `*[_type == "products" && category->name == "${cateogry}"]{
_id,
   "imageUrl": image[0].asset->url,
  price,
  name,
  "slug": slug.current,
  "categoryName": category->name
}`

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const data: IIprops[] = await getData(params.category);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="justify-center items-center rounded-lg h-10 bg-gray-950">
          <h2 className="flex items-center justify-center text-4xl font-bold tracking-tight text-[#61892F] mt-12 font-serif ">
            Our Products for {params.category}
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
               <Link href={`/product/${product.slug}`}></Link>
               <Link href={`/product/${product.slug}`}>
              
                  <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.imageUrl}
                      alt="Product image"
                      className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer/>
    </div>
  );
}