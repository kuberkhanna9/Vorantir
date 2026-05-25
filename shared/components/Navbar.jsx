import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDomainUrl, getCrossDomainNavigateUrl } from "../utils/urls.js";

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentAppKey = getCurrentAppKey();

  // Determine currentPage within the context of the sub-app
  let currentPage = "home";
  if (location.pathname === "/intelligence" || (location.pathname === "/" && currentAppKey === "intelligence")) currentPage = "intelligence";
  else if (location.pathname === "/signal" || (location.pathname === "/" && currentAppKey === "signal")) currentPage = "signal";
  else if (location.pathname === "/media") currentPage = "media";
  else if (location.pathname === "/strategy") currentPage = "strategy";
  else if (location.pathname === "/philosophy") currentPage = "philosophy";
  else if (location.pathname === "/contact") currentPage = "contact";
  else if (location.pathname.substring(1)) currentPage = location.pathname.substring(1);

  const isDarkTheme = currentAppKey === "signal";
  const isLightPage = currentAppKey !== "intelligence" && currentAppKey !== "signal";

  const navigateTo = (page) => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
    const targetUrl = getCrossDomainNavigateUrl(page, currentAppKey);
    if (targetUrl.startsWith("/")) {
      navigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <nav
      className={`fixed z-50 top-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[94%] transition-all duration-700 ease-out border ${scrolled
        ? isDarkTheme
          ? "max-w-5xl h-[68px] rounded-[24px] bg-[#0c0c0b]/80 backdrop-blur-xl border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          : isLightPage
            ? "max-w-5xl h-[68px] rounded-[24px] bg-[#f3efe8]/80 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            : "max-w-5xl h-[68px] rounded-[24px] bg-[#f7f3ec]/85 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        : isDarkTheme
          ? "max-w-6xl h-20 rounded-[28px] bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
          : isLightPage
            ? "max-w-6xl h-20 rounded-[28px] bg-[#f3efe8]/75 backdrop-blur-xl border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.04)]"
            : "max-w-6xl h-20 rounded-[28px] bg-black/25 backdrop-blur-xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
        }`}
    >
      <div
        className="mx-auto flex items-center justify-between px-6 sm:px-8 lg:px-10 h-full"
      >
        <div
          onClick={() => navigateTo("home")}
          className={`font-medium tracking-[0.28em] text-[11px] sm:text-[13px] uppercase cursor-pointer transition-colors duration-700 ${isDarkTheme ? "text-white" : isLightPage ? "text-[#11110f]" : scrolled ? "text-[#11110f]" : "text-white"
            }`}
        >
          Vorantir
        </div>

        <div
          className={`hidden md:flex items-center gap-8 lg:gap-10 text-[13px] sm:text-[14px] transition-colors duration-700 ${isDarkTheme ? "text-white/70" : isLightPage ? "text-[#11110f]/60" : scrolled ? "text-black/60" : "text-white/70"
            }`}
        >
          <div className="relative group py-2">
            <span className={`cursor-pointer transition-colors flex items-center gap-1 ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
              } ${["intelligence", "signal", "media", "strategy"].includes(currentPage) ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
              }`}>
              Divisions <span className="text-[8px]">▼</span>
            </span>
            {/* Luxury Dropdown Menu */}
            <div className="absolute top-full left-0 mt-2 w-56 rounded-2xl bg-[#faf8f4] border border-black/5 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.06)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 text-black flex flex-col gap-1 text-[13px] uppercase tracking-wider font-medium text-left">
              <span onClick={() => navigateTo("intelligence")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "intelligence" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Intelligence</span>
              <span onClick={() => navigateTo("signal")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "signal" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Signal</span>
              <span onClick={() => navigateTo("media")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "media" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Media</span>
              <span onClick={() => navigateTo("strategy")} className={`px-3 py-2 rounded-xl hover:bg-black/5 cursor-pointer transition-colors ${currentPage === "strategy" ? "bg-black/5 font-semibold text-black" : "text-black/75"}`}>Strategy</span>
            </div>
          </div>

          <span onClick={() => navigateTo("philosophy")} className={`cursor-pointer transition-colors ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
            } ${currentPage === "philosophy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
            }`}>
            Philosophy
          </span>

          <span onClick={() => navigateTo("contact")} className={`cursor-pointer transition-colors ${isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black"
            } ${currentPage === "contact" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : ""
            }`}>
            Contact
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigateTo("contact")}
            className={`hidden sm:inline-block rounded-full px-6 py-3 text-[13px] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${isDarkTheme
              ? "bg-white text-black hover:opacity-90"
              : isLightPage
                ? "bg-black text-white hover:opacity-90"
                : scrolled
                  ? "bg-black text-white hover:opacity-90"
                  : "bg-white text-black hover:opacity-90"
              }`}
          >
            Start a conversation
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-[11px] sm:text-[13px] uppercase tracking-[0.2em] font-medium focus:outline-none flex items-center gap-2 transition-colors duration-700 ${isDarkTheme ? "text-white/70" : isLightPage ? "text-[#11110f]/60" : scrolled ? "text-black/60" : "text-white/70"
              }`}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="text-[10px]">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Minimal Mobile Dropdown */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-8 py-6 flex flex-col gap-4 text-[13px] sm:text-[14px] tracking-wider uppercase font-medium backdrop-blur-xl rounded-b-[24px] transition-all duration-700 max-h-[85vh] overflow-y-auto ${isDarkTheme ? "bg-[#0c0c0b]/95 text-white/75 border-white/5" : isLightPage ? "bg-[#f3efe8]/95 text-[#11110f]/75 border-black/5" : "bg-[#f7f3ec]/95 text-black/75 border-black/5"
            }`}
        >
          <div className={`font-bold text-[10px] tracking-[0.2em] mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Divisions</div>
          <span className={`cursor-pointer transition-colors ${currentPage === "intelligence" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("intelligence")}>Intelligence</span>
          <span className={`cursor-pointer transition-colors ${currentPage === "signal" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("signal")}>Signal</span>
          <span className={`cursor-pointer transition-colors ${currentPage === "media" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("media")}>Media</span>
          <span className={`cursor-pointer transition-colors ${currentPage === "strategy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("strategy")}>Strategy</span>

          <div className={`font-bold text-[10px] tracking-[0.2em] mt-3 mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Philosophy</div>
          <span className={`cursor-pointer transition-colors ${currentPage === "philosophy" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("philosophy")}>Philosophy</span>

          <div className={`font-bold text-[10px] tracking-[0.2em] mt-3 mb-1 ${isDarkTheme ? "text-white/40" : "text-black/40"}`}>Contact</div>
          <span className={`cursor-pointer transition-colors ${currentPage === "contact" ? (isDarkTheme ? "text-white font-semibold" : "text-black font-semibold") : (isDarkTheme ? "text-white/70 hover:text-white" : "text-[#11110f]/60 hover:text-black")}`} onClick={() => navigateTo("contact")}>Contact</span>

          <button
            onClick={() => navigateTo("contact")}
            className={`block w-full rounded-full px-6 py-3 text-[13px] shadow-[0_10px_30px_rgba(0,0,0,0.16)] hover:opacity-90 transition-all mt-4 text-center uppercase tracking-wider ${isDarkTheme ? "bg-white text-black font-semibold" : "bg-black text-white"
              }`}
          >
            Start a conversation
          </button>
        </div>
      )}
    </nav>
  );
}
