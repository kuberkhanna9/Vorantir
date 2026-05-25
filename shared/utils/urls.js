/**
 * Resolves absolute URLs for cross-subdomain navigation.
 * During development (localhost), maps domains to individual dev server ports.
 * In production, maps to the live domains and subdomains.
 */
export const getDomainUrl = (subdomain) => {
  const isDev = 
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1";

  if (isDev) {
    if (subdomain === "landing" || subdomain === "home") return "http://localhost:3001";
    if (subdomain === "intelligence") return "http://localhost:3002";
    if (subdomain === "signal") return "http://localhost:3003";
  }

  if (subdomain === "landing" || subdomain === "home") return "https://vorantir.com";
  return `https://${subdomain}.vorantir.com`;
};

export const getLandingUrl = () => {
  return getDomainUrl("landing");
};

export const getIntelligenceUrl = () => {
  return getDomainUrl("intelligence");
};

export const getSignalUrl = () => {
  return getDomainUrl("signal");
};

export const getGlobalUrl = (path = "") => {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${getLandingUrl()}${cleanPath}`;
};

export const getCrossDomainNavigateUrl = (page, currentAppKey) => {
  // 1. Determine target subdomain mapping
  let targetSubdomain = "landing";
  if (
    page === "intelligence" ||
    page === "visibility_intelligence" ||
    page === "source_mapping" ||
    page === "entity_monitoring" ||
    page === "competitive_analysis" ||
    page === "enterprise_ai" ||
    page === "brand_visibility" ||
    page === "strategic_intelligence" ||
    page === "resources"
  ) {
    targetSubdomain = "intelligence";
  } else if (page === "signal") {
    targetSubdomain = "signal";
  }

  // 2. If target subdomain matches current subdomain, return local route path
  if (targetSubdomain === currentAppKey) {
    if (page === "home") return "/";
    
    let pageRoute = page;
    if (currentAppKey === "landing" && page === "landing") {
      pageRoute = "";
    } else if (currentAppKey === "intelligence" && page === "intelligence") {
      pageRoute = "";
    } else if (currentAppKey === "signal" && page === "signal") {
      pageRoute = "";
    }
    return `/${pageRoute}`;
  }

  // 3. Cross subdomain transition (returns absolute URL)
  const targetBaseUrl = getDomainUrl(targetSubdomain);
  let path = "";
  if (page === "home") {
    path = "/";
  } else {
    if (targetSubdomain === "intelligence" && page === "intelligence") {
      path = "/";
    } else if (targetSubdomain === "signal" && page === "signal") {
      path = "/";
    } else {
      path = `/${page}`;
    }
  }
  return `${targetBaseUrl}${path}`;
};
