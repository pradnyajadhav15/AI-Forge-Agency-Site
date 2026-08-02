import type { Metadata, Viewport } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE = "https://aiforge.agency";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "AI Forge | Premium Web & AI Agency",
    template: "%s | AI Forge Agency",
  },
  description:
    "AI Forge Agency builds intelligent websites, AI-powered experiences, automation systems and digital identities for ambitious brands.",
  keywords: [
    "AI agency",
    "AI website design",
    "AI automation",
    "brand identity",
    "creative studio",
    "Next.js development",
  ],
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "AI Forge Agency",
    title: "AI Forge | Premium Web & AI Agency",
    description:
      "A premium AI and web creative studio. Intelligent websites, automation systems, brand identity and AI media.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Forge | Premium Web & AI Agency",
    description: "Forging ideas into intelligent experiences.",
  },
  icons: { icon: "/logo.png" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F3",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Forge Agency",
  slogan: "Forging Ideas Into Intelligent Experiences.",
  description:
    "Premium AI and web creative agency building intelligent websites, automation systems, brand identity and AI media.",
  url: SITE,
  areaServed: "Worldwide",
  knowsAbout: ["AI Websites", "AI Automation", "Brand Identity", "Generative Media"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
