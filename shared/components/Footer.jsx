import { useLocation, useNavigate } from "react-router-dom";
import { getDomainUrl, getCrossDomainNavigateUrl } from "../utils/urls.js";
import mossyHills from "../assets/mossy_hills_terrain.png";

const getCurrentAppKey = () => {
  const host = window.location.hostname;
  const port = window.location.port;
  if (host === "localhost" || host === "127.0.0.1") {
    if (port === "3001") return "landing";
    if (port === "3002") return "intelligence";
    if (port === "3003") return "signal";
  }
  if (host.startsWith("intelligence.")) return "intelligence";
  if (host.startsWith("signal.")) return "signal";
  return "landing";
};

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentAppKey = getCurrentAppKey();

  // Determine current active page key based on route path
  let currentPage = "home";
  if (location.pathname === "/intelligence" || (location.pathname === "/" && currentAppKey === "intelligence")) currentPage = "intelligence";
  else if (location.pathname === "/signal" || (location.pathname === "/" && currentAppKey === "signal")) currentPage = "signal";
  else if (location.pathname === "/media") currentPage = "media";
  else if (location.pathname === "/strategy") currentPage = "strategy";
  else if (location.pathname === "/philosophy") currentPage = "philosophy";
  else if (location.pathname === "/contact") currentPage = "contact";
  else if (location.pathname.substring(1)) currentPage = location.pathname.substring(1);

  const isDarkTheme = currentAppKey === "signal";

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const targetUrl = getCrossDomainNavigateUrl(page, currentAppKey);
    if (targetUrl.startsWith("/")) {
      navigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <footer className={`relative overflow-hidden border-t transition-all duration-700 mt-12 sm:mt-20 ${isDarkTheme ? "bg-[#070707] text-[#f7f3ec] border-white/5" : "bg-[#f3efe8] text-[#11110f] border-black/5"
      }`}>
      {/* Cinematic Background Layer for Dark Theme (Signal Page) */}
      {isDarkTheme && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img
            src={mossyHills}
            alt="Mossy hills night terrain"
            className="w-full h-full object-cover object-center scale-[1.03] brightness-[0.70] contrast-[1.05] saturate-[0.95]"
          />
          {/* Soft top gradient: from #070707 to transparent */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#070707] to-transparent" />

          {/* Gentle radial vignette around edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,7,7,0.15)_20%,rgba(7,7,7,0.65)_100%)]" />

          {/* Very subtle bottom fade only near copyright area */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#070707]/90 to-transparent" />
        </div>
      )}

      {/* Cinematic Background Layer for Intelligence Page */}
      {currentPage === "intelligence" && (
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
            alt="Yosemite valley landscape footer background"
            className="w-full h-full object-cover object-[center_bottom] scale-[1.02] brightness-[0.95] contrast-[1.08] saturate-[0.95] opacity-[0.48]"
          />
          {/* Soft warm ivory gradient ONLY near the top transition */}
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#f3efe8] to-transparent" />

          {/* A subtle transparent cream haze over the image */}
          <div className="absolute inset-0 bg-[#f3efe8]/20" />

          {/* A very light bottom fade behind copyright links */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#f3efe8]/45 to-transparent" />
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 sm:gap-14">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div
              onClick={() => navigateTo("home")}
              className="text-[28px] font-serif mb-6 sm:mb-8 tracking-[-0.04em] cursor-pointer"
            >
              Vorantir
            </div>
          </div>

          <div>
            <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
              Divisions
            </div>

            <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
              <div onClick={() => navigateTo("intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Intelligence</div>
              <div onClick={() => navigateTo("signal")} className="hover:opacity-80 cursor-pointer transition-opacity">Signal</div>
              <div onClick={() => navigateTo("media")} className="hover:opacity-80 cursor-pointer transition-opacity">Media</div>
              <div onClick={() => navigateTo("strategy")} className="hover:opacity-80 cursor-pointer transition-opacity">Strategy</div>
            </div>
          </div>

          <div>
            <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
              Platform
            </div>

            <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
              <div onClick={() => navigateTo("visibility_intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Visibility Intelligence</div>
              <div onClick={() => navigateTo("source_mapping")} className="hover:opacity-80 cursor-pointer transition-opacity">Source Mapping</div>
              <div onClick={() => navigateTo("entity_monitoring")} className="hover:opacity-80 cursor-pointer transition-opacity">Entity Monitoring</div>
              <div onClick={() => navigateTo("competitive_analysis")} className="hover:opacity-80 cursor-pointer transition-opacity">Competitive Analysis</div>
            </div>
          </div>

          <div>
            <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
              Solutions
            </div>

            <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
              <div onClick={() => navigateTo("enterprise_ai")} className="hover:opacity-80 cursor-pointer transition-opacity">Enterprise AI</div>
              <div onClick={() => navigateTo("brand_visibility")} className="hover:opacity-80 cursor-pointer transition-opacity">Brand Visibility</div>
              <div onClick={() => navigateTo("strategic_intelligence")} className="hover:opacity-80 cursor-pointer transition-opacity">Strategic Intelligence</div>
            </div>
          </div>

          <div>
            <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
              Company
            </div>

            <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
              <div onClick={() => navigateTo("philosophy")} className="hover:opacity-80 cursor-pointer transition-opacity">Philosophy</div>
              <div onClick={() => navigateTo("company")} className="hover:opacity-80 cursor-pointer transition-opacity">About</div>
              <div onClick={() => navigateTo("careers")} className="hover:opacity-80 cursor-pointer transition-opacity">Careers</div>
              <div onClick={() => navigateTo("contact")} className="hover:opacity-80 cursor-pointer transition-opacity">Contact</div>
            </div>
          </div>

          <div>
            <div className={`text-xs uppercase tracking-[0.25em] mb-4 sm:mb-6 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>
              Resources
            </div>

            <div className={`space-y-3 sm:space-y-4 text-[13px] sm:text-[15px] ${isDarkTheme ? "text-white/70" : "text-black/70"}`}>
              <div onClick={() => navigateTo("resources")} className="hover:opacity-80 cursor-pointer transition-opacity">Documentation</div>
              <div onClick={() => navigateTo("trust")} className="hover:opacity-80 cursor-pointer transition-opacity">Trust Center</div>
              <div onClick={() => navigateTo("status")} className="hover:opacity-80 cursor-pointer transition-opacity">Status</div>
              <div onClick={() => navigateTo("press")} className="hover:opacity-80 cursor-pointer transition-opacity">Press</div>
            </div>
          </div>
        </div>

        <div className={`mt-16 sm:mt-24 pt-8 sm:pt-10 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-[13px] sm:text-[14px] ${isDarkTheme ? "border-white/10 text-white/60" : "border-black/10 text-black/60"
          }`}>
          <div>© Vorantir 2026</div>

          <div className="flex items-center gap-6 sm:gap-8">
            <div onClick={() => navigateTo("privacy")} className="hover:opacity-80 cursor-pointer transition-opacity">Privacy Policy</div>
            <div onClick={() => navigateTo("trust")} className="hover:opacity-80 cursor-pointer transition-opacity">Security</div>
            <div onClick={() => navigateTo("terms")} className="hover:opacity-80 cursor-pointer transition-opacity">Terms</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
