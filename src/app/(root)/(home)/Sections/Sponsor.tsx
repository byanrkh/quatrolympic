// import Link from "next/link";
// import { FileText, Download, Mail, Phone, MapPin, Instagram } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="bg-[#FDF6E9] min-h-screen">
//       <div className="px-4 md:px-12 lg:px-24 mx-auto py-16 max-w-6xl">
//         <h1 className="text-4xl md:text-6xl font-black uppercase mb-2">
//           Contact Us
//         </h1>
//         <p className="font-medium text-gray-700 mb-12 max-w-xl">
//           Ada pertanyaan, kerja sama, atau mau jadi sponsor? Hubungi kami
//           lewat kontak di bawah ini.
//         </p>

//         <div className="grid md:grid-cols-2 gap-8">
//           {/* Kotak Info Kontak */}
//           <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
//             <h2 className="font-black uppercase text-xl mb-6">
//               Get in Touch
//             </h2>
//             <ul className="space-y-4">
//               <li className="flex items-center gap-3">
//                 <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
//                   <Mail size={18} strokeWidth={2.5} />
//                 </span>
//                 <a href="mailto:hello@quatrolympic.com" className="font-bold hover:underline">
//                   hello@quatrolympic.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
//                   <Phone size={18} strokeWidth={2.5} />
//                 </span>
//                 <a href="tel:+6281234567890" className="font-bold hover:underline">
//                   +62 812-3456-7890
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
//                   <MapPin size={18} strokeWidth={2.5} />
//                 </span>
//                 <span className="font-bold">Yogyakarta, Indonesia</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <span className="border-2 border-black bg-[#F2BF6C] p-2 shrink-0">
//                   <Instagram size={18} strokeWidth={2.5} />
//                 </span>

//                   href="https://instagram.com/quatrolympic"
//                   target="_blank"
//                   className="font-bold hover:underline"
//                 >
//                   @quatrolympic
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Kotak Proposal Sponsor */}
//           <div className="bg-[#F2BF6C] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
//             <div>
//               <span className="inline-flex border-2 border-black bg-white p-3 mb-4">
//                 <FileText size={28} strokeWidth={2.5} />
//               </span>
//               <h2 className="font-black uppercase text-xl mb-2">
//                 Proposal Sponsorship
//               </h2>
//               <p className="font-medium text-sm mb-6">
//                 Tertarik jadi sponsor? Unduh proposal kerja sama kami untuk
//                 melihat detail paket, benefit, dan informasi selengkapnya.
//               </p>
//             </div>

//             <Link
//               href="/documents/proposal-sponsor.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 bg-black text-white font-black uppercase text-sm px-5 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
//             >
//               <Download size={18} strokeWidth={2.5} />
//               Download Proposal
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SponsorSection() {
  return (
    <section className="bg-[#F2BF6C] border-t-4 border-b-4 border-black py-16">
      <div className="px-4 md:px-12 lg:px-24 mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-1.5 font-black uppercase text-xs mb-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
            <Sparkles size={14} strokeWidth={2.5} />
            Sponsorship Open
          </span>

          <h2 className="text-3xl md:text-5xl font-black uppercase mb-4">
            Jadi Bagian dari Acara Ini
          </h2>
          <p className="font-medium text-gray-800">
            Kami membuka kesempatan kerja sama sponsorship untuk brand,
            komunitas, maupun perusahaan yang ingin mendukung dan tampil bersama
            acara ini. Yuk, jadi sponsor kami!
          </p>
        </div>

        <div className="flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white font-black uppercase text-sm px-6 py-4 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-none"
          >
            Jadi Sponsor Sekarang
            <ArrowRight size={18} strokeWidth={2.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
