import Link from "next/link";
import { IIprops } from "../components/Interface";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";

async function getData() {
  const query = `*[_type == "products"][0...4] {
_id,
price,
name,
image,
"slug": slug.current,
"categoryName": category->name,
}`;
  const data = await client.fetch(query);

  return data;
}
export default async function Newest() {
  const data: IIprops[] = await getData();

  return (
    <div className="bg-[#474B4F]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold font-sans tracking-tight text-white mobile:mt-9">
            Our Newest products
          </h2>

      
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product: IIprops) => (
  <div key={product._id} className="group relative rounded-sm">
    <Link href={`/product/${product.slug}`} className="block">
      <div className="aspect-square w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80">
        <Image
          src={urlForImage(product.image[0]).url()}
          alt="Product image"
          className="w-full h-full object-cover object-center lg:h-full lg:w-full rounded-xl"
          width={300}
          height={300}
        />
      </div>
      <div className="mt-4 bg-gray-300  text-center rounded-lg">
        <h3 className="md:text-lg text-black font-bold ml-1">{product.name}</h3>
      </div>
    </Link>
    <div className="mt-1 flex justify-between bg-black rounded-lg">
      <p className="md:text-lg text-white ml-1">
        {product.categoryName}
      </p>
      <p className="md:text-lg font-medium text-white mr-2">
        ${product.price}
      </p>
    </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
}

