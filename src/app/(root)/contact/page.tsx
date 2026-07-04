import Link from "next/link";
import { FileText, Download, Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <main className="bg-[#FDF6E9] min-h-screen">
      <div className="px-4 md:px-12 lg:px-24 mx-auto py-16 max-w-6xl">
        <h1 className="text-4xl md:text-6xl font-black uppercase mb-2">
          Contact Us
        </h1>
        <p className="font-medium text-gray-700 mb-12 max-w-xl">
          Have questions, want to collaborate, or interested in becoming a
          sponsor? Contact us below.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Kotak Info Kontak */}
          <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="font-black uppercase text-xl mb-6">Get in Touch</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 min-w-0">
                <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
                  <Mail size={18} strokeWidth={2.5} />
                </span>
                <Link
                  href="mailto:alazharquatrolympic@hotmail.com"
                  className="font-bold hover:underline wrap-break-word"
                >
                  alazharquatrolympic@hotmail.com
                </Link>
              </li>

              <li className="flex items-center gap-3 min-w-0">
                <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
                  <Phone size={18} strokeWidth={2.5} />
                </span>
                <Link
                  href="https://wa.me/081292947972"
                  target="_blank"
                  className="font-bold hover:underline wrap-break-word"
                >
                  +62 812 9294 7972
                </Link>
              </li>

              <li className="flex items-start gap-3 min-w-0">
                <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
                  <MapPin size={18} strokeWidth={2.5} />
                </span>
                <span className="font-bold wrap-break-word">
                  Kemang Pratama, Bekasi{" "}
                  <Link
                    href="https://share.google/U1Vkc911s09vLWCug"
                    target="_blank"
                    className="text-sm text-blue-500 underline hover:no-underline font-medium ml-1 md:ml-3"
                  >
                    Open on Google
                  </Link>
                </span>
              </li>

              <li className="flex items-center gap-3 min-w-0">
                <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
                  <FaInstagram size={18} strokeWidth={2.5} />
                </span>
                <Link
                  href="https://instagram.com/quatrolympic"
                  target="_blank"
                  className="font-bold hover:underline break-words"
                >
                  @quatrolympic
                </Link>
              </li>
            </ul>
          </div>

          {/* Kotak Proposal Sponsor */}
          <div className="bg-[#F2BF6C] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <span className="inline-flex border-2 border-black bg-white p-3 mb-4">
                <FileText size={28} strokeWidth={2.5} />
              </span>
              <h2 className="font-black uppercase text-xl mb-2">
                Proposal Sponsorship
              </h2>
              <p className="font-medium text-sm mb-6">
                Interested in becoming a sponsor? Download our collaboration
                proposal to view package details, benefits, and more
                information.
              </p>
            </div>

            <Link
              href="https://drive.google.com/file/d/1GRNIg8Bv0CmpJ-huyfMesj10H-s1UMJ0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white font-black uppercase text-sm px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <Download size={18} strokeWidth={2.5} />
              Download Proposal
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
