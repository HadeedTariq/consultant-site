import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  // Allows passing page-specific schemas (like Job postings) later
  schema?: Record<string, any>;
}

export function SEO({ title, description, url, image, schema }: SEOProps) {
  const siteName = "Helping Hand Consultant";
  const defaultImage = "https://helpinghandconsultant.site/logo.png";
  const currentUrl = url || "https://helpinghandconsultant.site";

  // Core Business Schema representing your firm globally
  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: "Helping Hand Consultant",
    description:
      "Professional firm providing Statutory Audit, Taxation, HR Outsourcing, and Financial Advisory services across public and private sectors.",
    url: "https://helpinghandconsultant.site",
    logo: "https://helpinghandconsultant.site/logo.png",
    telephone: ["+92-313-5588989", "+92-423-7106680"],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot # 382, Block A, New Shalimar Housing Scheme, Salamatpura, Darogawala",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "31.5925", // Approximate for Darogawala, Lahore
      longitude: "74.3875",
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    priceRange: "$$",
  };

  // Use the specific schema passed via props, or fallback to the core business schema
  const activeSchema = schema || defaultLocalBusinessSchema;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Social Media Sharing */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* JSON-LD Structured Data for Google Crawlers */}
      <script type="application/ld+json">{JSON.stringify(activeSchema)}</script>
    </Helmet>
  );
}
