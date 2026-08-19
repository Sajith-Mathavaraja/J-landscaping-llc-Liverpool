import { useEffect } from 'react';

const SEO = ({ title, description, path = '' }) => {
  useEffect(() => {
    // Update Title
    const fullTitle = title ? `${title} | J Landscaping LLC` : 'J Landscaping LLC | Landscaping & Lawn Care in Liverpool, NY';
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || 'Professional landscaping, lawn care, hardscaping, and property maintenance in Liverpool, NY and surrounding Onondaga County communities.';

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;
  }, [title, description, path]);

  return null;
};

export default SEO;
