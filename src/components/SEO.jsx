import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogType = 'website',
  schema 
}) => {
  const siteName = 'VISHVADHARA GROUP';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} - Premium Lawn & Garden Services in Sydney`;
  const defaultDescription = 'Professional Lawn Mowing & Garden Care Services in Sydney. Transform your lawn into a green paradise with VISHVADHARA GROUP.';
  const siteUrl = 'https://bharatlawncare.vercel.app';
  const fullDescription = description || defaultDescription;

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || fullDescription} />
      <meta property="og:image" content={ogImage || `${siteUrl}/hero_lawn.png`} />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || fullDescription} />
      <meta name="twitter:image" content={ogImage || `${siteUrl}/hero_lawn.png`} />

      {/* JSON-LD Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
