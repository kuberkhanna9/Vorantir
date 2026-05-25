import { Routes, Route } from "react-router-dom";
import LightLayout from "@shared/layouts/LightLayout.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import PhilosophyPage from "../pages/PhilosophyPage.jsx";
import CareersPage from "../pages/CareersPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import CompanyPage from "../pages/CompanyPage.jsx";
import MediaPage from "../pages/MediaPage.jsx";
import StrategyPage from "../pages/StrategyPage.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.jsx";
import TermsPage from "../pages/TermsPage.jsx";
import TrustCenterPage from "../pages/TrustCenterPage.jsx";
import StatusPage from "../pages/StatusPage.jsx";
import PressPage from "../pages/PressPage.jsx";
import PressArticle1Page from "../pages/PressArticle1Page.jsx";
import PressArticle2Page from "../pages/PressArticle2Page.jsx";
import PressArticle3Page from "../pages/PressArticle3Page.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LightLayout />}>
        <Route path="/" element={<LandingPage />} />
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
