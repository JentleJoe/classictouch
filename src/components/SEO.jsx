import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteName, siteUrl } from '../data/seoData';

function upsertMeta(selector, attributeName, attributeValue, content) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`script[data-seo-jsonld="${id}"]`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.setAttribute('data-seo-jsonld', id);
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function SEO({
  title,
  description,
  keywords = [],
  image,
  imageAlt,
  schema = [],
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const canonicalUrl = new URL(pathname, siteUrl).toString();

    document.title = title;

    upsertMeta('meta[name="description"]', 'name', 'description', description);
    upsertMeta('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    upsertMeta(
      'meta[name="robots"]',
      'name',
      'robots',
      'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    );
    upsertMeta('meta[name="theme-color"]', 'name', 'theme-color', '#0f172a');

    upsertMeta('meta[property="og:site_name"]', 'property', 'og:site_name', siteName);
    upsertMeta('meta[property="og:title"]', 'property', 'og:title', title);
    upsertMeta('meta[property="og:description"]', 'property', 'og:description', description);
    upsertMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    if (image) {
      const imageUrl = new URL(image, siteUrl).toString();
      upsertMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl);
      upsertMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', imageAlt ?? title);
      upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
      upsertMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl);
    } else {
      upsertMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary');
    }

    upsertMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    upsertMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    upsertLink('canonical', canonicalUrl);

    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((node) => node.remove());

    schema.forEach((item, index) => {
      upsertJsonLd(String(index), item);
    });
  }, [pathname, title, description, keywords, image, imageAlt, schema]);

  return null;
}