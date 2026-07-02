import { Competition } from "@/libs/type";
import Link from "next/link";

export function RegistrationCard({
  title,
  category,
  icon,
  color,
  contactName,
  contactPhone,
  form,
}: Competition) {
  return (
    <div
      key={title}
      className="outline-2 rounded-xl bg-white shadow-[4px_4px_0px_0px_black]"
    >
      <div className="p-5">
        <div className=" flex items-center gap-5">
          <div
            className={`w-14 h-14 ${color} rounded border-2 flex justify-center items-center text-4xl`}
          >
            {icon}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-black">{title}</h1>
            <p className="text-sm">{category}</p>
          </div>
        </div>
        <div className="mt-4">
          <Link
            href={form}
            target="_blank"
            className="block text-center w-full border-2 border-black bg-pink-400 py-2 text-sm font-black uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
          >
            Register Now
          </Link>
        </div>
      </div>
      <div className={`${color} p-2 rounded-br-xl rounded-bl-xl border-t-2`}>
        <h3 className="text-center font-bold text-black">
          Contact: <Link href={`tel:${contactPhone}`}>{contactPhone}</Link> (
          {contactName})
        </h3>
      </div>
    </div>
  );
}
