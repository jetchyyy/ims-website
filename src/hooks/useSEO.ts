import { useEffect } from 'react';

type SEOConfig = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const SITE_NAME = 'International Marketing Services';
const DEFAULT_IMAGE_PATH = '/logo.png';

const upsertMetaTag = (
  attribute: 'name' | 'property',
  key: string,
  content: string
) => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', href);
};

export const useSEO = ({ title, description, path = '/', image = DEFAULT_IMAGE_PATH }: SEOConfig) => {
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || window.location.origin;
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${baseUrl}${normalizedPath}`;
    const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

    document.title = `${title} | ${SITE_NAME}`;
    upsertCanonical(canonicalUrl);

    upsertMetaTag('name', 'description', description);
    upsertMetaTag('property', 'og:title', `${title} | ${SITE_NAME}`);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:type', 'website');
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:image', imageUrl);
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', `${title} | ${SITE_NAME}`);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', imageUrl);
  }, [title, description, path, image]);
};
