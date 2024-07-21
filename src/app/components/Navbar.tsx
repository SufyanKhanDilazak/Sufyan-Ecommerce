"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links = [
  { name: "Home", href: "/" },
  { name: "Audio", href: "/audio" },
  { name: "Accessories", href: "/accessories" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();
  return (
    <header className="mb-8 border-b bg-[#61892F] h-20 rounded-sm">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
        <h1 className="text-2xl md:text-4xl font-bold">
  <span className="inline-block text-transparent bg-clip-text bg-white">
    Rizz
  </span>
  <span className="inline-block text-transparent bg-clip-text bg-gray-950">
    Store
  </span>
</h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary text-white rounded-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold transition duration-100 hover:text-primary text-white rounded-sm">
                  {link.name}
                </Link>
              )}
              
            </div>
          ))}
          
        </nav>

        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 bg-gray-950 text-[#61892F] hover:bg-gray-200 rounded-lg"
          >
            <ShoppingBag  className="  rounded-lg"/>
            <span className="hidden text-lg font-semibold text-white sm:block ">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}