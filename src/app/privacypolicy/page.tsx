import Link from "next/link";
import React from "react";
import { FcLeft } from "react-icons/fc";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-slate-800 font-sans antialiased">
      <Link href={"/"} className={`flex gap-4 items-center group mb-5`}>
        <FcLeft className="group-hover:-translate-x-2 duration-150" /> Back
      </Link>
      <h1 className="text-3xl font-black mb-2 tracking-tight">
        PRIVACY POLICY
      </h1>
      <p className="text-sm text-slate-500 mb-8">Last Updated: July 4, 2026</p>

      <p className="mb-6 leading-relaxed text-base text-slate-700">
        The Quatrolympic 19 Committee of SMA Islam Al Azhar 4 ("we," "our," or
        "us") is deeply committed to protecting and respecting your personal
        data privacy as a website user, registrant, or representative. This
        Privacy Policy details how we collect, process, utilize, and protect
        your information in compliance with relevant data privacy principles.
      </p>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        1. Personal Information We Collect
      </h2>
      <p className="mb-3 text-slate-700">
        To facilitate smooth coordination and legal compliance for all events,
        we collect information submitted directly through our forms, including:
      </p>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          <strong>Identity & Institutional Data:</strong> Full name, gender,
          school of origin (SMP/SMA), and scans of official student identity
          cards (Kartu Pelajar) to verify eligibility.
        </li>
        <li>
          <strong>Contact Records:</strong> Email address, personal phone
          numbers, and WhatsApp contact details of participants, team captains,
          or supervising teachers.
        </li>
        <li>
          <strong>Financial & Payment Records:</strong> Bank account holder
          names and physical or digital transfer receipts submitted for
          verification.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        2. Purpose of Data Processing
      </h2>
      <p className="mb-3 text-slate-700">
        Your submitted information will be processed and used exclusively for
        the following operational needs of Quatrolympic 19:
      </p>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          Verifying competition entry requirements, establishing official team
          match brackets, and managing schedule allocations.
        </li>
        <li>
          Distributing direct transactional updates, match technical rules,
          entry credentials, and formal event notifications.
        </li>
        <li>
          Administrative manufacturing of participant credentials, winner
          certificates, prize disbursements, and archival documentation of the
          event.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        3. Data Security and Internal Access Boundaries
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          We apply reasonable technical and administrative access boundaries to
          keep your information secure. Access to your personal data is strictly
          limited to authorized members of the <strong>Sie. Admin</strong>,{" "}
          <strong>Sie. Lomba</strong>, and core committee leaders who require
          the information to execute tournament logistics.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        4. Third-Party Restrictions and Authorized Disclosures
      </h2>
      <p className="mb-3 text-slate-700">
        We do <strong>not sell, rent, lease, trade, or distribute</strong> your
        personal information to third-party commercial entities. Data disclosure
        is restricted exclusively to:
      </p>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          Internal coordination with school executives of SMA Islam Al Azhar 4
          and the Al Azhar Kemang Pratama Campus.
        </li>
        <li>
          Official certification processes involving external professional
          judges, certified athletic referees, or authorized legal personnel.
        </li>
        <li>
          Compliance with mandatory legal requirements enforced by the
          governmental and educational authorities of the Republic of Indonesia.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        5. Data Lifespan and Destruction Policy
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          Your data is stored securely throughout the preparation, execution,
          and wrap-up administrative phases of the project. Following the full
          completion of the event cycle, financial accountability loops, and
          final evaluations, your personal data records will be securely
          archived or completely deleted from our immediate registration files
          to protect your permanent privacy.
        </li>
      </ul>

      <h2 className="text-xl font-bold mt-8 mb-4 text-slate-900">
        6. User Acknowledgment and Consent
      </h2>
      <ul className="ml-5 list-disc space-y-3 mb-6 text-slate-700">
        <li>
          By finalizing and submitting any registration form on this platform,
          you grant explicit, unconditional consent to the Quatrolympic 19
          Committee to process, manage, and store your personal information for
          the specific operational purposes explicitly laid out in this Privacy
          Policy.
        </li>
      </ul>
    </div>
  );
}
