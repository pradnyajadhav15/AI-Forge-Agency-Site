/**
 * All site copy lives here. Edit this file, not the components.
 */


export const BRAND = {
  name: "AI Forge",
  full: "AI Forge Agency",
  tagline: "Forging ideas into intelligent experiences.",
  email: "hello@aiforge.agency",
  instagram: "#",
  linkedin: "#",
};

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const HERO_STATS = [
  { value: "04", label: "Disciplines forged" },
  { value: "100%", label: "Custom-built, never templated" },
  { value: "AI-native", label: "Design & engineering process" },
  { value: "Global", label: "Remote-first studio" },
];

export type Service = { no: string; title: string; desc: string };

export const SERVICES: Service[] = [
  {
    no: "01",
    title: "Websites & Web Apps",
    desc: "Fast, good-looking websites that are easy to use and built to bring you customers.",
  },
  {
    no: "02",
    title: "AI Automation",
    desc: "We set up systems that handle your repetitive work, so your team doesn't have to.",
  },
  {
    no: "03",
    title: "Branding & Design",
    desc: "Logos, colours, fonts and design rules that keep your brand looking the same everywhere.",
  },
  {
    no: "04",
    title: "AI Images & Video",
    desc: "Product shots, ads and video made with AI, then finished by hand so they look real.",
  },
];

export type ArtKey = "topo" | "orchard" | "arch" | "forge";

export type Project = {
  no: string;
  name: string;
  cat: string;
  desc: string;
  tags: string[];
  art: ArtKey;
  /** Drop a file in /public/work/ and set this to swap the generative plate for a real image. */
  image?: string;
  href: string;
};

export const PROJECTS: Project[] = [
 
  {
    no: "01",
    name: "Mango Farm",
    cat: "Agriculture / E-commerce", 
    tags: ["Website Design", "Branding", "Multilingual", "seo"],
    desc: "A single-orchard brand taken online - seasonal availability, farm storytelling and ordering that runs straight through WhatsApp.",
    art: "orchard",
    href: "https://mango-farm.netlify.app/",
  },
  {
    no: "02",
    name: "Ganapati",
    cat: "E-commerce / Cultural Brand",
    desc: "A craft studio's storefront: catalogue, live payments, order tracking and receipts, in three languages.",
    tags: ["Website Design", "Branding", "Multilingual", "Admin Dashboard","CMS", "SEO",],
    art: "arch",
    href: "https://www.rramesharts.com/",
  },
  
  {
    no: "03",
    name: "Developer Portfolio",
    cat: "Student Project",
    desc: "A portfolio site for a full-stack developer, with project case studies, skills and contact.",
    tags: ["Next.js", "React", "Tailwind", "Responsive"],
    art: "forge",
    href: "https://pradnya-jadhav-portfolio.vercel.app/",
  },
];



export type BrandArtKey =
  | "bIdentity"
  | "bPalette"
  | "bType"
  | "bMarks"
  | "bPack"
  | "bStat";

export const BRANDS: { title: string; sub: string; art: BrandArtKey; wide?: boolean }[] = [
  { title: "AI Forge", sub: "Agency identity system", art: "bIdentity", wide: true },
  { title: "Palette", sub: "Teal, sand and ivory", art: "bPalette" },
  { title: "Type Board", sub: "Poppins Ã— Playfair Display", art: "bType" },
  { title: "Marque Studies", sub: "Monogram explorations", art: "bMarks" },
  { title: "Packaging", sub: "Applied identity", art: "bPack" },
  { title: "Stationery", sub: "Print and digital rules", art: "bStat" },
];

export type MediaArtKey = "mCinematic" | "mProduct" | "mMotion" | "mCampaign";

export const MEDIA: { title: string; art: MediaArtKey }[] = [
  { title: "Cinematic Concept", art: "mCinematic" },
  { title: "Product Visualisation", art: "mProduct" },
  { title: "Motion Study", art: "mMotion" },
  { title: "Campaign Artwork", art: "mCampaign" },
];

export const PRINCIPLES = [
  {
    no: "01",
    title: "Think Intelligently",
    desc: "We combine human creativity with AI capabilities â€” direction from people, leverage from machines.",
  },
  {
    no: "02",
    title: "Build Boldly",
    desc: "We create digital products that stand apart, not products that look like the category average.",
  },
  {
    no: "03",
    title: "Automate Smartly",
    desc: "We turn repetitive processes into intelligent systems that keep running after we leave.",
  },
  {
    no: "04",
    title: "Craft Obsessively",
    desc: "Every detail matters â€” from typography and spacing to the easing on a single hover.",
  },
];

export const PROCESS = [
  {
    no: "01",
    title: "Discover",
    desc: "Understand the idea, the audience and the opportunity before anything gets designed.",
  },
  {
    no: "02",
    title: "Define",
    desc: "Shape the strategy, the direction and the experience into something decidable.",
  },
  {
    no: "03",
    title: "Forge",
    desc: "Design, develop and integrate AI until the thing exists and behaves.",
  },
  {
    no: "04",
    title: "Launch",
    desc: "Deploy, refine and evolve â€” the first release is the starting point, not the finish.",
  },
];
