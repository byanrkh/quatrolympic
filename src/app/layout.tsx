import type { Metadata } from "next";
import "./globals.css";
import { spaceGrotesk } from "@/libs/Fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.quatrolympic.com"),
  title: {
    default: "Quatrolympic 19: “Harmony Of Heritage” ✨🌺",
    template: "%s - Quatrolympic 19",
  },
  description:
    "Carrying “Serenade of the Archipelago: Harmony of Heritage,” bringing together culture, identity, and shared expression 🎭",
  keywords: [
    "quatrolympic",
    "Al Azhar 4",
    "Al Azhar",
    "SMAI Al Azhar 4",
    "quatrolympic.com",
    "quatrolympic 19",
  ],
  openGraph: {
    siteName: "Quatrolympic",
    title: "Quatrolympic 19: “Harmony Of Heritage” ✨🌺",
    description:
      "Carrying “Serenade of the Archipelago: Harmony of Heritage,” bringing together culture, identity, and shared expression 🎭",
    locale: "en-ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quatrolympic 19: “Harmony Of Heritage” ✨🌺",
    description:
      "Carrying “Serenade of the Archipelago: Harmony of Heritage,” bringing together culture, identity, and shared expression 🎭",
    creator: "@quatrolympic",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`antialiased bg-[#F9F5F2] ${spaceGrotesk.className}`}
    >
      <body>
        {children}
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="6fec0873-fa19-4371-97d2-0e17520553d8"
        ></script>
      </body>
    </html>
  );
}
