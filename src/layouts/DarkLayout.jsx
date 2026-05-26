import { Outlet } from "react-router-dom";
import Navbar from "../../shared/components/Navbar.jsx";
import Footer from "../../shared/components/Footer.jsx";
import { useTrackPageViews } from "../../shared/hooks/useTrackPageViews.js";
import GEOHead from "../../shared/components/GEOHead.jsx";
import ErrorBoundary from "../../shared/components/ErrorBoundary.jsx";

export default function DarkLayout() {
  useTrackPageViews();
  return (
    <div className="overflow-x-hidden min-h-screen transition-colors duration-700 bg-[#0c0c0b] text-[#f7f3ec]">
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
