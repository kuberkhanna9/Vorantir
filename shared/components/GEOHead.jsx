import React from "react";
import { useLocation } from "react-router-dom";

export default function GEOHead() {
  const location = useLocation();
  const host = typeof window !== "undefined" ? window.location.hostname : "";

  // Determine App Context
  let appKey = "landing";
  if (host.startsWith("intelligence.")) appKey = "intelligence";
  else if (host.startsWith("signal.")) appKey = "signal";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://vorantir.com/#organization",
    "name": "Vorantir",
    "url": "https://vorantir.com",
    "logo": "https://vorantir.com/logo.png",
    "description": "Premium strategy, media campaigns, entity monitoring, and AI visibility intelligence.",
    "sameAs": [
      "https://x.com/vorantir",
      "https://www.linkedin.com/company/vorantir"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "press@vorantir.com",
      "contactType": "strategy lead"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://vorantir.com/#website",
    "name": "Vorantir",
    "url": "https://vorantir.com"
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://vorantir.com"
      }
    ]
  };

  if (location.pathname !== "/") {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    pathSegments.forEach((segment, idx) => {
      const cleanName = segment.replace(/[-_]/g, " ");
      breadcrumbList.itemListElement.push({
        "@type": "ListItem",
        "position": idx + 2,
        "name": cleanName.charAt(0).toUpperCase() + cleanName.slice(1),
        "item": `https://vorantir.com${location.pathname}`
      });
    });
  }

  // Define service schema if on specific domains
  let serviceSchema = null;
  if (appKey === "intelligence") {
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Visibility & Threat Intelligence",
      "provider": {
        "@type": "Organization",
        "name": "Vorantir"
      },
      "areaServed": "Global",
      "description": "Comprehensive Generative Engine Optimisation (GEO), AI citation audits, entity mapping, and LLM visibility mapping."
    };
  } else if (appKey === "signal") {
    serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Performance Media & Digital Influence",
      "provider": {
        "@type": "Organization",
        "name": "Vorantir"
      },
      "areaServed": "Global",
      "description": "Engineered digital strategy, target narrative campaigns, and structured visibility optimization."
    };
  }

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(orgSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbList)}
      </script>
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </>
  );
}
