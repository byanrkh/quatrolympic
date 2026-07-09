import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="bg-[#F2BF6C] py-2"></div>
      <nav className="bg-[#F5D89A] border-b-2 border-t-2 border-black">
        <div className="px-4 md:px-12 lg:px-24 mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 py-3 md:py-0 md:h-20">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Logo Quatro"
              width={150}
              height={150}
              className="block"
            />
          </Link>
          <ul className="flex gap-5">
            <li>
              <Link href={"/"} className="font-medium hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/about"} className="font-medium hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="font-medium hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="font-medium hover:underline">
                Pics
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
