import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VorantirLandingPage from "../../vorantir_enterprise_landing_page_react.jsx";
import { getCrossDomainNavigateUrl } from "../../shared/utils/urls.js";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Vorantir — Intelligence, Strategy & Digital Influence";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Premium intelligence, strategic positioning, and digital influence infrastructure for modern brands.");
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", "Premium intelligence, strategic positioning, and digital influence infrastructure for modern brands.");
    }
    
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute("content", "Premium intelligence, strategic positioning, and digital influence infrastructure for modern brands.");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://vorantir.com/");
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://vorantir.com/");
    }
    
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", "Vorantir — Intelligence, Strategy & Digital Influence");
    }
    
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute("content", "Vorantir — Intelligence, Strategy & Digital Influence");
    }
  }, []);
  const navigate = useNavigate();
  const handleNavigate = (page) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const targetUrl = getCrossDomainNavigateUrl(page, "landing");
    if (targetUrl.startsWith("/")) {
      navigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  return <VorantirLandingPage onNavigate={handleNavigate} />;
}
