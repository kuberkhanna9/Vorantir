import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dashboardImg from "../../Landing.png";
import { getCrossDomainNavigateUrl } from "../../shared/utils/urls.js";

const llmLogos = [
  {
    name: "OpenAI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Anthropic",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/claude-color.png",
  },
  {
    name: "Gemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg",
  },
  {
    name: "Perplexity",
    logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/perplexity.png",
  },
  {
    name: "Meta AI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
  },
];

export default function IntelligencePage() {
  useEffect(() => {
    document.title = "Vorantir Intelligence — Generative Engine Optimisation & AI Visibility";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Audit competitor share of voice, semantic attribution paths, and representation authority within modern generative engines and LLMs in real-time.");
    }
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", "Audit competitor share of voice, semantic attribution paths, and representation authority within modern generative engines and LLMs in real-time.");
    }
    
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute("content", "Audit competitor share of voice, semantic attribution paths, and representation authority within modern generative engines and LLMs in real-time.");
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", "https://intelligence.vorantir.com/");
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", "https://intelligence.vorantir.com/");
    }
  }, []);
  const navigate = useNavigate();

  const navigateTo = (page) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    const targetUrl = getCrossDomainNavigateUrl(page, "intelligence");
    if (targetUrl.startsWith("/")) {
      navigate(targetUrl);
    } else {
      window.location.href = targetUrl;
    }
  };

  return (
    <>
      {/* Cinematic Yosemite Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2200&auto=format&fit=crop"
            alt="Landscape"
            className="w-full h-full object-cover scale-[1.01]"
          />

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(247,243,236,0)_65%,rgba(247,243,236,0.25)_82%,rgba(247,243,236,0.85)_95%,#f7f3ec_100%)]" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-8 sm:bottom-14 md:bottom-20 z-10 flex flex-col items-center text-center w-full max-w-7xl px-4 sm:px-6">
          <div className="inline-flex items-center gap-3 rounded-full bg-black/45 backdrop-blur-md text-white px-5 py-2 text-[12px] mb-6 md:mb-10 shadow-[0_10px_30px_rgba(0,0,0,0.16)]">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            Vorantir Intelligence Platform
          </div>

          <h1 className="font-serif text-[28px] sm:text-[44px] md:text-[62px] leading-[1.1] md:leading-[1.05] tracking-[-0.03em] md:tracking-[-0.05em] max-w-[1080px] text-white drop-shadow-[0_8px_30px_rgba(0,0,0,0.28)]">
            The intelligence layer
            <br />
            for
            <span className="italic ml-2 sm:ml-4 text-white">
              AI discovery
            </span>
          </h1>

          <button
            onClick={() => navigateTo("contact")}
            className="mt-10 sm:mt-14 md:mt-16 rounded-full bg-black text-white px-8 py-3.5 sm:px-10 sm:py-4 text-[13px] sm:text-[15px] shadow-[0_20px_50px_rgba(0,0,0,0.16)] hover:-translate-y-0.5 transition-all duration-500"
          >
            Get started
          </button>
        </div>
      </section>

      {/* Built for modern AI marquee */}
      <section className="px-4 sm:px-6 lg:px-10 py-12 sm:py-16 bg-[#f7f3ec] overflow-hidden border-y border-black/5">
        <div className="max-w-7xl mx-auto mb-8 sm:mb-10 text-center">
          <div className="text-[13px] sm:text-[15px] text-black/45 font-medium px-4">
            Built for enterprises operating across modern AI ecosystems
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-r from-[#f7f3ec] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-32 bg-gradient-to-l from-[#f7f3ec] to-transparent" />

          <div className="flex w-max animate-marquee items-center gap-16 sm:gap-24 opacity-45">
            {[...llmLogos, ...llmLogos].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-4 sm:gap-5 shrink-0 text-black/40"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-8 w-8 sm:h-10 sm:w-10 object-contain grayscale opacity-70"
                />

                <div className="text-[28px] sm:text-[42px] font-semibold tracking-[-0.05em] whitespace-nowrap">
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Vorantir understands */}
      <section className="bg-[#f7f3ec] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          <div>
            <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-black/35 mb-6 sm:mb-8">
              What Vorantir understands
            </div>

            <h2 className="font-serif text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] lg:tracking-[-0.05em] max-w-xl mb-8 sm:mb-12">
              AI systems are becoming the interface layer of enterprise discovery.
            </h2>

            <div className="space-y-6 sm:space-y-10 text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/68 max-w-2xl">
              <p>
                Organizations are increasingly interpreted through generated answers rather than traditional search results. Vorantir continuously maps how large language models reference, prioritize, and synthesize enterprise entities.
              </p>

              <p>
                By evaluating representation, narrative alignment, and source authority across the broader LLM ecosystem, we help you understand how cognitive architectures structure public perception of your enterprise.
              </p>

              <p>
                Discovery is transitioning from user-initiated web navigation to dynamic, model-driven synthesized intelligence systems. Vorantir decodes this transition to keep your enterprise visible.
              </p>
            </div>
          </div>

          <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-black/5 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.06)] lg:shadow-[0_30px_120px_rgba(0,0,0,0.08)] mt-8 lg:mt-0">
            <img
              src={dashboardImg}
              alt="Vorantir Dashboard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Visibility Intelligence */}
      <section className="bg-white py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12 sm:mb-20">
            <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.24em] text-black/35 mb-6 sm:mb-8">
              Visibility Intelligence
            </div>

            <h2 className="font-serif text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.05] lg:leading-[0.95] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10">
              How AI systems synthesize enterprise information.
            </h2>

            <p className="text-[16px] sm:text-[18px] lg:text-[22px] leading-[1.7] sm:leading-[1.8] text-black/65">
              Frontier models do not simply index web pages. They parse authoritative citation networks, evaluate entity relationships, and compile structural summaries. Active tracking inside these cognitive pipelines is the new baseline for brand presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("visibility_intelligence")}>
              <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                Entity visibility monitoring
              </div>

              <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                92%
              </div>

              <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                Of enterprise discovery queries now route through synthesized answer engines. Proactive entity tracking ensures your capabilities are represented accurately and consistently.
              </p>
            </div>

            <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("source_mapping")}>
              <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                Source mapping & attribution
              </div>

              <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                14.5x
              </div>

              <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                Higher citation fidelity for brands that actively map and reinforce their primary source nodes, ensuring that LLM synthesized responses attribute information to authoritative domains.
              </p>
            </div>

            <div className="rounded-[24px] sm:rounded-[32px] border border-black/5 p-6 sm:p-10 bg-[#faf8f4] cursor-pointer" onClick={() => navigateTo("competitive_analysis")}>
              <div className="text-[11px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
                Competitive perception
              </div>

              <div className="text-[40px] sm:text-[56px] font-serif tracking-[-0.06em] mb-4 sm:mb-6">
                2.8x
              </div>

              <p className="text-[15px] sm:text-[18px] leading-7 sm:leading-8 text-black/65">
                Reduction in narrative drift across LLMs. Vorantir monitors competitor representation, providing strategic intelligence on where others dominate visibility within key prompt vectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic cards section */}
      <section className="bg-[#f7f3ec] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 border-t border-black/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-black/5 p-8 sm:p-12 lg:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_80px_rgba(0,0,0,0.05)] cursor-pointer" onClick={() => navigateTo("brand_visibility")}>
            <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
              Why this transition matters now
            </div>

            <h3 className="font-serif text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.1] lg:leading-[1] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10">
              Why enterprises are becoming AI-native entities.
            </h3>

            <div className="space-y-6 sm:space-y-8 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/65">
              <p>
                The fundamental unit of discovery has shifted. Traditional search engine optimization designed for human clicks is giving way to Generative Engine Optimization designed for model-synthesized responses.
              </p>

              <p>
                As artificial intelligence platforms become infrastructure, narrative consistency and source mapping are the defining competitive battlegrounds. The brands who shape their representation today will define market perception tomorrow.
              </p>
            </div>
          </div>

          <div className="rounded-[28px] sm:rounded-[36px] bg-[#f5f1ea] border border-black/5 p-8 sm:p-12 lg:p-14 shadow-[0_15px_40px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_80px_rgba(0,0,0,0.05)] text-black cursor-pointer" onClick={() => navigateTo("strategic_intelligence")}>
            <div className="text-[12px] sm:text-[14px] uppercase tracking-[0.2em] sm:tracking-[0.22em] text-black/35 mb-6 sm:mb-8">
              Strategic intelligence layer
            </div>

            <h3 className="font-serif text-[30px] sm:text-[38px] lg:text-[48px] leading-[1.1] lg:leading-[1] tracking-[-0.04em] lg:tracking-[-0.05em] mb-6 sm:mb-10 text-black">
              A permanent diagnostic system for AI ecosystems.
            </h3>

            <div className="space-y-6 sm:space-y-7 text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.7] sm:leading-[1.8] lg:leading-[1.9] text-black/65">
              <p>
                Vorantir provides the unified diagnostic console needed to trace entity reference pathways, analyze competitor positioning, and maintain authority across frontier models.
              </p>

              <p>
                Engineered specifically for institutional leaders, software platforms, and global brands, our solution provides real-time enterprise AI presence tracking and continuous ecosystem auditing at scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
