import { Routes, Route } from "react-router-dom";
import LightLayout from "@shared/layouts/LightLayout.jsx";
import IntelligencePage from "../pages/IntelligencePage.jsx";
import VisibilityIntelligencePage from "../pages/VisibilityIntelligencePage.jsx";
import SourceMappingPage from "../pages/SourceMappingPage.jsx";
import EntityMonitoringPage from "../pages/EntityMonitoringPage.jsx";
import CompetitiveAnalysisPage from "../pages/CompetitiveAnalysisPage.jsx";
import EnterpriseAIPage from "../pages/EnterpriseAIPage.jsx";
import BrandVisibilityPage from "../pages/BrandVisibilityPage.jsx";
import StrategicIntelligencePage from "../pages/StrategicIntelligencePage.jsx";
import ResourcesPage from "../pages/ResourcesPage.jsx";

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
      <Route element={<LightLayout />}>
        {/* Core Intelligence Routes */}
        <Route path="/" element={<IntelligencePage />} />
        <Route path="/visibility_intelligence" element={<VisibilityIntelligencePage />} />
        <Route path="/source_mapping" element={<SourceMappingPage />} />
        <Route path="/entity_monitoring" element={<EntityMonitoringPage />} />
        <Route path="/competitive_analysis" element={<CompetitiveAnalysisPage />} />
        <Route path="/enterprise_ai" element={<EnterpriseAIPage />} />
        <Route path="/brand_visibility" element={<BrandVisibilityPage />} />
        <Route path="/strategic_intelligence" element={<StrategicIntelligencePage />} />
        <Route path="/resources" element={<ResourcesPage />} />

        {/* Secondary Corporate Routes */}
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
        <Route path="/press-article-1" element={<PressArticle1Page />} />
        <Route path="/press-article-2" element={<PressArticle2Page />} />
        <Route path="/press-article-3" element={<PressArticle3Page />} />
      </Route>
    </Routes>
  );
}
