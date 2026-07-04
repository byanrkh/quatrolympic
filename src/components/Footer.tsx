import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="p-5">
      <div className="bg-white p-5 border-2 rounded shadow-[5px_5px_0px_0px_black]">
        <ul className="md:flex gap-5 uppercase">
          <li>
            <Link href="/about" className="text-sm font-medium hover:underline">
              Learn More
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm font-medium hover:underline"
            >
              Sponsor & Partners
            </Link>
          </li>
        </ul>
        <div className="border-t border-b py-5 my-8">
          <ul className="flex gap-3">
            <li className="text-xs">
              <Link href={"/tos"}>Terms of Service</Link>
            </li>
            <li className="text-xs font-medium">|</li>
            <li className="text-xs">
              <Link href={"/privacypolicy"}>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <p className="text-center text-xs opacity-85">
          Copyright © 2026 Quatrolympic, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
