import { Routes, Route } from "react-router-dom";
import DarkLayout from "@shared/layouts/DarkLayout.jsx";
import LightLayout from "@shared/layouts/LightLayout.jsx";
import SignalPage from "../pages/SignalPage.jsx";

// Shared Secondary Pages
import PhilosophyPage from "../../../landing/src/pages/PhilosophyPage.jsx";
import CareersPage from "../../../landing/src/pages/CareersPage.jsx";
import ContactPage from "../../../landing/src/pages/ContactPage.jsx";
import CompanyPage from "../../../landing/src/pages/CompanyPage.jsx";
import MediaPage from "../../../landing/src/pages/MediaPage.jsx";
import StrategyPage from "../../../landing/src/pages/StrategyPage.jsx";
import PrivacyPolicyPage from "../../../landing/src/pages/PrivacyPolicyPage.jsx";
import TermsPage from "../../../landing/src/pages/TermsPage.jsx";
import TrustCenterPage from "../../../landing/src/pages/TrustCenterPage.jsx";
import StatusPage from "../../../landing/src/pages/StatusPage.jsx";
import PressPage from "../../../landing/src/pages/PressPage.jsx";
import PressArticle1Page from "../../../landing/src/pages/PressArticle1Page.jsx";
import PressArticle2Page from "../../../landing/src/pages/PressArticle2Page.jsx";
import PressArticle3Page from "../../../landing/src/pages/PressArticle3Page.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Dark Layout Core Route */}
      <Route element={<DarkLayout />}>
        <Route path="/" element={<SignalPage />} />
      </Route>

      {/* Light Layout Secondary Routes */}
      <Route element={<LightLayout />}>
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/strategy" element={<StrategyPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/trust" element={<TrustCenterPage />} />
        <Route path="/status" element={<StatusPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/press-article-1" element={<PressArticle1Page />} />
        <Route path="/press-article-2" element={<PressArticle2Page />} />
        <Route path="/press-article-3" element={<PressArticle3Page />} />
      </Route>
    </Routes>
  );
}
