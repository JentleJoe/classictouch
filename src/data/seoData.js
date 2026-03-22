import { contactInfo, socialLinks } from './siteData';

export const siteName = 'Glacetouch';
export const siteUrl = 'https://glacetouch.com';

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'PaintingContractor',
  name: siteName,
  url: siteUrl,
  telephone: contactInfo.phone,
  email: contactInfo.email,
  areaServed: ['Benin City', 'Lagos', 'Nigeria'],
  serviceType: [
    'Professional painting',
    'Decorative wall finishes',
    'Wall screeding',
    'Wallpaper installation',
    'Exterior and interior finishing',
  ],
  sameAs: [socialLinks.instagram, socialLinks.tiktok].filter(Boolean),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  description:
    'Professional painting and wall finishing services in Benin City, Lagos, and across Nigeria.',
};

const defaultImage = '/og-image.svg';

const routes = {
  '/': {
    title: 'Professional Painting in Benin, Lagos & Nigeria | Glacetouch',
    description:
      'Glacetouch delivers professional painting, decorative wall finishes, screeding, and wallpaper installation for homes and businesses in Benin City, Lagos, and across Nigeria.',
    keywords: [
      'painting company in Benin City',
      'painters in Lagos',
      'professional painting Nigeria',
      'decorative wall finishes',
      'wall screeding',
      'wallpaper installation',
    ],
    image: defaultImage,
    imageAlt: 'Glacetouch professional painting in Benin City, Lagos and Nigeria',
    schema: [websiteSchema, businessSchema],
  },
  '/about': {
    title: 'About Glacetouch | Painting Company in Benin & Lagos',
    description:
      'Learn about Glacetouch, a professional painting and wall finishing brand serving Benin City, Lagos, and clients across Nigeria.',
    keywords: [
      'about Glacetouch',
      'painting company in Benin City',
      'painting company in Lagos',
      'wall finishing Nigeria',
    ],
    image: defaultImage,
    imageAlt: 'Glacetouch professional painting in Benin City, Lagos and Nigeria',
    schema: [websiteSchema, businessSchema],
  },
  '/services': {
    title: 'Painting & Wall Finishing Services in Benin and Lagos | Glacetouch',
    description:
      'Explore Glacetouch services for professional painting, wall treatments, screeding, wallpaper installation, and decorative finishes in Benin City, Lagos, and nationwide.',
    keywords: [
      'painting services in Benin City',
      'painting services in Lagos',
      'decorative painting Nigeria',
      'wall screeding services',
      'wallpaper installation Nigeria',
    ],
    image: defaultImage,
    imageAlt: 'Glacetouch professional painting in Benin City, Lagos and Nigeria',
    schema: [websiteSchema, businessSchema],
  },
  '/portfolio': {
    title: 'Painting Portfolio in Benin, Lagos & Nigeria | Glacetouch',
    description:
      'Browse Glacetouch project work and see professional painting and wall finish results delivered in Benin City, Lagos, and across Nigeria.',
    keywords: [
      'painting portfolio Nigeria',
      'painting projects in Benin City',
      'painting projects in Lagos',
      'decorative wall finishes portfolio',
    ],
    image: defaultImage,
    imageAlt: 'Glacetouch professional painting in Benin City, Lagos and Nigeria',
    schema: [websiteSchema, businessSchema],
  },
  '/contact': {
    title: 'Contact Glacetouch | Painters in Benin City & Lagos',
    description:
      'Contact Glacetouch for professional painting and wall finishing services in Benin City, Lagos, and across Nigeria.',
    keywords: [
      'contact painters in Benin City',
      'contact painters in Lagos',
      'painting quotation Nigeria',
      'wall finishing contact',
    ],
    image: defaultImage,
    imageAlt: 'Glacetouch professional painting in Benin City, Lagos and Nigeria',
    schema: [websiteSchema, businessSchema],
  },
};

export function getSeoData(pathname) {
  return routes[pathname] ?? routes['/'];
}