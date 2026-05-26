import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../shared/components/Navbar.jsx";
import Footer from "../../shared/components/Footer.jsx";
import { useTrackPageViews } from "../../shared/hooks/useTrackPageViews.js";
import GEOHead from "../../shared/components/GEOHead.jsx";
import ErrorBoundary from "../../shared/components/ErrorBoundary.jsx";

export default function LightLayout() {
  useTrackPageViews();
  const location = useLocation();
  const isIntelligencePage = location.pathname === "/intelligence";

  return (
    <div className={`overflow-x-hidden min-h-screen transition-colors duration-700 ${isIntelligencePage ? "bg-[#f7f3ec] text-[#11110f]" : "bg-[#f3efe8] text-[#11110f]"}`}>
      <GEOHead />
      <Navbar />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
