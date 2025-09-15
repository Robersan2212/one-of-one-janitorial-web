export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "One of One Janitorial Service",
  "description": "Professional janitorial and commercial cleaning services in Logan and Cache Valley, Utah",
  "url": "https://yourwebsite.com",
  "telephone": "your-phone-number",
  "email": "your-email@domain.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address",
    "addressLocality": "Logan",
    "addressRegion": "Utah",
    "postalCode": "84321",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.7370",
    "longitude": "-111.8338"
  },
  "serviceArea": [
    {
      "@type": "City",
      "name": "Logan",
      "addressRegion": "Utah"
    },
    {
      "@type": "Place",
      "name": "Cache Valley",
      "addressRegion": "Utah"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Janitorial Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Cleaning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Office Cleaning"
        }
      }
    ]
  },
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-17:00"
} 