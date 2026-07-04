import { spaceGrotesk, spaceMono } from "@/libs/Fonts";
import Link from "next/link";
import React from "react";
import { FcLeft } from "react-icons/fc";

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-800 font-sans antialiased">
      <Link href={"/"} className={`flex gap-4 items-center group mb-5`}>
        <FcLeft className="group-hover:-translate-x-2 duration-150" /> Back
      </Link>
      <h1 className="text-3xl font-black mb-2 tracking-tight">
        TERMS OF SERVICE
      </h1>
      <p className="text-sm text-slate-500 mb-8">Last Updated: July 4, 2026</p>

      <p className="mb-6 leading-relaxed text-base text-slate-700">
        Welcome to the official website of{" "}
        <strong>Al Azhar Quatrolympic 19</strong>, an event themed{" "}
        <em>"Serenade of the Archipelago: Harmony of Heritage"</em>, organized
        and managed by the Quatrolympic 19 Committee of{" "}
        <strong>SMA Islam Al Azhar 4 Kota Bekasi</strong>. By accessing,
        registering, or using this website, you agree to be legally bound by
        these Terms of Service. If you do not agree with any part of these
        terms, you are not permitted to use our services.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        1. Registration & Eligibility Requirements
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          <strong>Target Participants:</strong> Registration for the
          competitions is strictly open to Middle School (SMP) and High School
          (SMA) students or equivalents across the <strong>Jabodetabek</strong>{" "}
          area, as well as the General Public for specific categories designated
          by the committee.
        </li>
        <li>
          <strong>Scope of Activities:</strong> These terms cover registrations
          for all official events within Quatrolympic 19, including the
          pre-event <strong>ACS (Al Azhar Creative Steps) Fun Run</strong>, the
          main non-academic competitions (Basketball, Futsal, Ratoeh Jaroe,
          Graphic Design, Solo Vocal, Badminton, Poetry, MSQ, MHQ, and Coding),
          and the Closing Arts Festival (Pentas Seni).
        </li>
        <li>
          <strong>Data Verification:</strong> Registrants must provide
          authentic, accurate, and verifiable data. The committee reserves the
          absolute right to disqualify teams or individuals who submit
          fraudulent identification or inaccurate institutional data.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        2. Fees, Payments, and Financial Policy
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          <strong>Payment Confirmation:</strong> A registration is only declared
          official and valid once the registrant has completed the transfer
          payment and submitted legitimate verification to the committee.
        </li>
        <li>
          <strong>Strict Non-Refundable Policy:</strong> In alignment with the
          designated allocation of the Quatrolympic 19 budget, all registration
          fees are final and <strong>strictly non-refundable</strong> under any
          circumstances, unless a specific competition category is unilaterally
          canceled by the committee.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        3. Intellectual Property Rights
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          <strong>Event Branding Ownership:</strong> All creative assets, logos,
          design emblems, website content, graphics, and promotional media are
          the sole intellectual property of the Quatrolympic 19 Committee of SMA
          Islam Al Azhar 4.
        </li>
        <li>
          <strong>Copyright Enforcement:</strong> No user or external entity is
          allowed to duplicate, distribute, or modify the official Quatrolympic
          19 creative assets for any external promotional or commercial purposes
          without formal written authorization.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        4. Disqualification and Event Regulations
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          All participants must strictly adhere to the technical rules of their
          respective competition categories. The committee and technical
          officials maintain the full authority to disqualify any participant or
          school team found violating sportsmanship, engaging in physical/verbal
          misconduct, or causing disruptions at the SMA Islam Al Azhar 4 Bekasi
          campus venue.
        </li>
      </ul>
    </div>
  );
}
