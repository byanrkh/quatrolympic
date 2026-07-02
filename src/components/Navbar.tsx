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
              src="/assets/logo.PNG"
              alt="Logo Quatro"
              width={150}
              height={150}
              className="block"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
