import onion from "@/assets/onion.jpg";
import ginger from "@/assets/ginger.jpg";
import chilli from "@/assets/chilli.jpg";
import lemon from "@/assets/lemon.jpg";
import pomegranate from "@/assets/pomegranate.jpg";

export const SITE = {
  name: "THE GILL EXIM",
  tagline: "Exporting India's Finest Agricultural Products Worldwide",
    phone: "+91 98867 65144",
    phoneRaw: "9886765144",
  whatsapp: "919886765144",
  email: "eximgill0@gmail.com",
  address: {
    line1: "835/3 Kalmeshwar Street",
    line2: "Itagi, Belagavi",
    line3: "Karnataka - 591112, India",
  },
};

export const EXPORT_MARKETS = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Malaysia",
  "Singapore",
  "United Kingdom",
  "Germany",
  "Kenya",
  "South Africa",
  "Australia",
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/why-choose-us", label: "Why Us" },
  { to: "/global-export", label: "Global" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRODUCTS = [
  {
    slug: "fresh-onion",
    name: "Fresh Onion",
    image: onion,
    desc: "Premium red & pink onions, hand-graded for export — long shelf life, low TSS, uniform sizing.",
  },
  {
    slug: "fresh-ginger",
    name: "Fresh Ginger",
    image: ginger,
    desc: "Aromatic, fibre-light ginger rhizomes with rich essential oil content and clean skin.",
  },
  {
    slug: "green-chilli",
    name: "Green Chilli",
    image: chilli,
    desc: "Crisp, vivid green chillies with balanced heat — ideal for fresh produce aisles worldwide.",
  },
  {
    slug: "fresh-lemon",
    name: "Fresh Lemon",
    image: lemon,
    desc: "Juicy, thin-skinned lemons bursting with citrus aroma — graded by size and Brix.",
  },
  {
    slug: "pomegranate",
    name: "Pomegranate",
    image: pomegranate,
    desc: "Bhagwa pomegranates with ruby arils, deep colour, and exceptional sweetness.",
  },
];