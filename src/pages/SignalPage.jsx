import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import unsplashBg from "../../cinematic_sky_background.png";
import { getCrossDomainNavigateUrl } from "../../shared/utils/urls.js";

export default function SignalPage() {
  const navigate = useNavigate();
  const [activeRoleTab, setActiveRoleTab] = useState("founders");
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const capabilities = [
    {
      num: "01",
      title: "Brand Strategy",
      desc: "We define your position in the market. We refine your brand narrative and core messaging so you stand out and build long-term equity."
    },
    {
      num: "02",
      title: "Growth Marketing",
      desc: "Acquire customers through smart, scalable media. We build and run performance campaigns that convert clicks into lasting revenue."
    },
    {
      num: "03",
      title: "Performance Media",
      desc: "Paid search, social, and display media managed with mathematical precision. We ensure every dollar spent drives real-world business results."
    },
    {
      num: "04",
      title: "Creative Campaigns",
      desc: "Stunning visual assets, video, and design that command attention. We design campaign creative that matches your aesthetic and converts."
    },
    {
      num: "05",
      title: "Social & Content",
      desc: "Organic social direction, creator partnerships, and culture-driven placement. We grow your community across modern networks."
    },
    {
      num: "06",
      title: "Conversion Optimization",
      desc: "Turning more visitors into buyers. We audit and rebuild landing pages, user flows, and checkouts to maximize your marketing spend."
    }
  ];

  const faqs = [
    {
      q: "What types of companies do you work with?",
      a: "We partner with ambitious consumer brands, luxury products, scaling direct-to-consumer startups, and high-growth technology companies."
    },
    {
      q: "How do you use AI in your creative and media process?",
      a: "We use AI as a tool to analyze market data, test creative concepts quickly, and optimize bidding in real-time. It enhances our human talent, never replaces it."
    },
    {
      q: "What is your typical project timeline?",
      a: "Strategic audits and strategy design take four to six weeks. From there, we move directly into creative production and live campaign testing."
    },
    {
      q: "Do you handle creative production or just media buying?",
      a: "We handle both. We believe creative and media are inseparable. Outstanding assets perform better when paired with strategic targeting."
    }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#070707] text-[#f7f3ec] font-sans selection:bg-[#cbf382]/30 selection:text-[#cbf382]">

      {/* ─── 1. HERO LANDSCAPE SECTION ─── */}
      <section className="relative min-h-[960px] lg:h-screen w-full flex flex-col justify-between pt-36 pb-0 overflow-hidden z-10 select-none">

        {/* Background Landscape Layer */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img 
            src={unsplashBg} 
            alt="Lush green hillside hillside path background" 
            className="w-full h-full object-cover object-center scale-[1.01] brightness-[0.88] contrast-[1.02] saturate-[1.05]"
          />
          {/* Natural atmospheric light gradients (no heavy crushed blacks) */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#070707]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[280px] bg-gradient-to-t from-[#070707] via-[#070707]/70 to-transparent" />
          
          {/* Soft, beautiful green-gold atmospheric light bloom to separate terrain */}
          <div className="absolute bottom-[20%] left-[30%] w-[50%] h-[200px] bg-gradient-to-tr from-[#cbf382]/[0.06] to-transparent blur-[70px]" />
          <div className="absolute top-[20%] right-[10%] w-[35%] h-[250px] bg-white/[0.04] blur-[90px]" />
        </div>

        {/* Center-Left Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 lg:pl-40 lg:pr-16 w-full text-left flex flex-col justify-start items-start flex-1 pt-20 lg:pt-36">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#090909]/20 backdrop-blur-md text-[9px] tracking-[0.25em] uppercase text-white/80 mb-6 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#cbf382] animate-pulse" />
            <span>Vorantir Signal // Division II</span>
          </div>

          <h1 className="font-serif text-[36px] sm:text-[54px] lg:text-[62px] leading-[1.14] tracking-[-0.03em] text-white max-w-3xl font-light">
            Building relevance for the<br />
            <span className="text-[#cbf382] font-serif font-light italic drop-shadow-[0_2px_15px_rgba(203,243,130,0.15)]">next era of brands.</span>
          </h1>

          <p className="max-w-lg mt-5 text-[14px] sm:text-[15px] leading-[1.75] text-white/80 font-light tracking-wide">
            We scale growth, creative campaigns, and paid media for modern consumer brands. Built on real strategy, high-performing design, and optimization.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mt-8 w-full sm:w-auto relative z-30">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
                navigate("/contact");
              }}
              className="w-full sm:w-auto rounded-[12px] bg-[#cbf382] text-black font-semibold px-8 py-3.5 text-[12px] tracking-wide hover:opacity-95 hover:scale-[1.02] shadow-[0_10px_30px_rgba(203,243,130,0.2)] transition-all duration-300 active:scale-[0.98]"
            >
              Start a conversation
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("capabilities");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto rounded-[12px] border border-white/10 bg-white/[0.03] backdrop-blur-md text-white/90 px-8 py-3.5 text-[12px] tracking-wide hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300 active:scale-[0.98]"
            >
              Explore capabilities
            </button>
          </div>
        </div>
      </section>

      {/* ─── 2. PLATFORM LOGOS STRIP ─── */}
      <section className="relative z-30 bg-[#070707] w-full pt-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 text-center pb-12">
          <div className="text-[10px] tracking-[0.25em] font-medium uppercase text-white/30 mb-8">Globally trusted by industry leaders</div>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6 opacity-35 select-none">
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-white font-mono uppercase">OpenAI</span>
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-white font-mono uppercase">Anthropic</span>
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-white font-mono uppercase">Gemini</span>
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-white font-mono uppercase">Perplexity</span>
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-semibold text-white font-mono uppercase">Meta AI</span>
          </div>
        </div>

        {/* ─── 3. DOUBLE METRICS SECTION ─── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-20 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
          <div className="max-w-md">
            <h2 className="font-serif text-[24px] sm:text-[28px] leading-tight text-white/80">
              Simple, focused growth built for modern attention.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10 sm:gap-16 w-full lg:w-auto">
            <div className="flex items-start gap-8">
              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-mono">Paid Acquisition</div>
                <div className="text-[36px] sm:text-[44px] font-serif tracking-tight text-white/90">Scaled</div>
              </div>
              <div className="hidden sm:block h-12 w-[1px] bg-white/10 self-center" />
            </div>

            <div className="flex items-start gap-8">
              <div className="space-y-1">
                <div className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-mono">Brand Positioning</div>
                <div className="text-[36px] sm:text-[44px] font-serif tracking-tight text-white/90">Aligned</div>
              </div>
              <div className="hidden sm:block h-12 w-[1px] bg-white/10 self-center" />
            </div>

            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/35 font-mono">Campaign Speed</div>
              <div className="text-[36px] sm:text-[44px] font-serif tracking-tight text-white/90">Consistent</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. FEATURE BLOCK 1: SEQUENTIAL VERTICAL STACK WITH SIDE WIDGETS ─── */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-32 bg-[#070707]">
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-16">
            <div>
              <div className="text-[11px] tracking-[0.25em] font-mono uppercase text-[#cbf382] mb-4">01 / SERVICE</div>
              <h2 className="font-serif text-[36px] sm:text-[48px] leading-[1.12] tracking-[-0.03em] text-white">
                Creative campaigns and growth strategy tailored for scaling brands.
              </h2>
            </div>

            <div className="space-y-12">
              <div className="space-y-3">
                <div className="font-mono text-[10px] text-[#cbf382]">01 / BRAND DESIGN</div>
                <h3 className="font-serif text-[20px] text-white">Positioning Strategy</h3>
                <p className="text-[14px] leading-relaxed text-[#f7f3ec]/60">
                  We define who you are, who your audience is, and how to win their trust before launching media.
                </p>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-[10px] text-[#cbf382]">02 / PAID MEDIA</div>
                <h3 className="font-serif text-[20px] text-white">Performance Marketing</h3>
                <p className="text-[14px] leading-relaxed text-[#f7f3ec]/60">
                  We launch and scale targeted ad campaigns across social, search, and video channels to acquire buyers.
                </p>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-[10px] text-[#cbf382]">03 / PRODUCTION</div>
                <h3 className="font-serif text-[20px] text-white">Creative Execution</h3>
                <p className="text-[14px] leading-relaxed text-[#f7f3ec]/60">
                  We produce high-impact photography, short-form video, and copy designed to engage modern consumers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Floating Console Mockup Column */}
          <div className="lg:col-span-6 space-y-8 lg:sticky lg:top-28">

            {/* Console Widget 1 */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#cbf382] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#f7f3ec]/40 uppercase tracking-widest">Campaign Overview</span>
                </div>
                <span className="font-mono text-[8px] text-[#cbf382]">STATUS: RUNNING</span>
              </div>
              <div className="space-y-3 font-mono text-[10px] text-[#f7f3ec]/65">
                <div className="flex justify-between">
                  <span>Acquisition status:</span>
                  <span className="text-white">Healthy</span>
                </div>
                <div className="flex justify-between">
                  <span>Conversion rate:</span>
                  <span className="text-white">Rising</span>
                </div>
                <div className="w-full bg-white/5 h-[3px] rounded overflow-hidden">
                  <div className="bg-[#cbf382] h-full w-[94%]" />
                </div>
              </div>
            </div>

            {/* Console Widget 2 */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#cbf382] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#f7f3ec]/40 uppercase tracking-widest">Growth Channel Node</span>
                </div>
                <span className="font-mono text-[8px] text-[#cbf382]">INDEX_SECURE</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span>Active networks:</span>
                  <span className="font-mono text-[9px] text-[#cbf382]">Meta, Google, TikTok</span>
                </div>
                <div className="h-10 bg-black/40 rounded flex items-center justify-center border border-white/5">
                  <span className="font-mono text-[10px] text-white/50">Campaigns are active and performing</span>
                </div>
              </div>
            </div>

            {/* Console Widget 3 */}
            <div className="rounded-2xl border border-white/5 bg-white/[0.01] backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#cbf382] animate-pulse" />
                  <span className="font-mono text-[9px] text-[#f7f3ec]/40 uppercase tracking-widest">Audience Quality</span>
                </div>
                <span className="font-mono text-[8px] text-white/35">ACTIVE</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[11px] text-[#f7f3ec]/70">
                  <span>Customer engagement</span>
                  <span className="text-[#cbf382]">● High</span>
                </div>
                <div className="flex justify-between text-[11px] text-[#f7f3ec]/70">
                  <span>Retention status</span>
                  <span className="text-[#cbf382]">● Growing</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 5. FEATURE GRID SECTION 2: CORE CAPABILITIES ─── */}
      <section id="capabilities" className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 scroll-mt-24 bg-[#070707]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] tracking-[0.25em] font-mono uppercase text-[#cbf382] mb-4">Capabilities</div>
          <h2 className="font-serif text-[38px] sm:text-[54px] leading-tight tracking-[-0.03em] text-white">
            The premium strategy and growth partner built for ambitious brands.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.num}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.01] p-8 hover:border-[#cbf382]/20 hover:bg-[#cbf382]/[0.01] shadow-[0_15px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(203,243,130,0.03)] hover:-translate-y-1 transition-all duration-500 text-left"
            >
              <div className="font-mono text-[12px] text-[#cbf382] mb-6">{cap.num} // SERVICES</div>
              <h3 className="font-serif text-[22px] text-white tracking-[-0.02em] mb-4 group-hover:text-[#cbf382] transition-colors">{cap.title}</h3>
              <p className="text-[14px] leading-6 text-[#f7f3ec]/60">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. FEATURE SECTION 3: HORIZONTAL 3-COLUMN WITH SCREENSHOTS ─── */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 bg-[#070707]">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-[11px] tracking-[0.25em] font-mono uppercase text-[#cbf382] mb-4">03 / CHANNELS</div>
          <h2 className="font-serif text-[36px] sm:text-[48px] leading-tight text-white">
            Grow your presence where your customers spend time.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Panel 1 */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 space-y-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="space-y-4">
              <div className="font-mono text-[9px] text-[#cbf382] uppercase tracking-wider">01 / Media</div>
              <h3 className="font-serif text-[20px] text-white">Performance Ad Campaigns</h3>
              <p className="text-[13px] leading-relaxed text-[#f7f3ec]/60">
                Targeted paid advertising on Meta, Google, and TikTok built to drive purchases and scale efficiency.
              </p>
            </div>
            <div className="h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-center gap-2 font-mono text-[9px] text-[#f7f3ec]/60">
              <div className="flex justify-between">
                <span>Campaigns:</span>
                <span className="text-[#cbf382]">Live</span>
              </div>
              <div className="flex justify-between">
                <span>Performance:</span>
                <span className="text-white">Consistent</span>
              </div>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 space-y-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="space-y-4">
              <div className="font-mono text-[9px] text-[#cbf382] uppercase tracking-wider">02 / Design</div>
              <h3 className="font-serif text-[20px] text-white">High-End Ad Creative</h3>
              <p className="text-[13px] leading-relaxed text-[#f7f3ec]/60">
                Video, design, and conversion-focused copy that tells your brand story beautifully and converts clicks.
              </p>
            </div>
            <div className="h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-center gap-2 font-mono text-[9px] text-[#f7f3ec]/60">
              <div className="flex justify-between">
                <span>Creative assets:</span>
                <span className="text-[#cbf382]">Ready</span>
              </div>
              <div className="flex justify-between">
                <span>Visual quality:</span>
                <span className="text-white">Excellent</span>
              </div>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-6 space-y-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
            <div className="space-y-4">
              <div className="font-mono text-[9px] text-[#cbf382] uppercase tracking-wider">03 / Creators</div>
              <h3 className="font-serif text-[20px] text-white">Social Growth & Creators</h3>
              <p className="text-[13px] leading-relaxed text-[#f7f3ec]/60">
                Connecting your brand with creators and organic social channels to build authentic cultural relevance.
              </p>
            </div>
            <div className="h-32 bg-black/40 rounded-xl border border-white/5 p-4 flex flex-col justify-center gap-2 font-mono text-[9px] text-[#f7f3ec]/60">
              <div className="flex justify-between">
                <span>Creator network:</span>
                <span className="text-[#cbf382]">Connected</span>
              </div>
              <div className="flex justify-between">
                <span>Audience reach:</span>
                <span className="text-white">Growing</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── 7. FEATURE SECTION 4: ROLE-BASED ACCORDION SHOWCASE ─── */}
      <section className="relative z-30 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 bg-[#070707]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-[11px] tracking-[0.25em] font-mono uppercase text-[#cbf382] mb-4">Partnership</div>
          <h2 className="font-serif text-[36px] sm:text-[48px] leading-tight text-white">
            We collaborate with leaders who value strategic growth and high standards.
          </h2>
        </div>

        {/* Dynamic Role Switcher Tabs */}
        <div className="flex justify-center gap-6 mb-16 font-mono text-[12px] uppercase tracking-wider">
          <button
            onClick={() => setActiveRoleTab("founders")}
            className={`px-4 py-2 border-b-2 transition-all ${activeRoleTab === "founders" ? "border-[#cbf382] text-white" : "border-transparent text-white/40 hover:text-white/80"}`}
          >
            For Founders
          </button>
          <button
            onClick={() => setActiveRoleTab("cmos")}
            className={`px-4 py-2 border-b-2 transition-all ${activeRoleTab === "cmos" ? "border-[#cbf382] text-white" : "border-transparent text-white/40 hover:text-white/80"}`}
          >
            For CMOs
          </button>
          <button
            onClick={() => setActiveRoleTab("investors")}
            className={`px-4 py-2 border-b-2 transition-all ${activeRoleTab === "investors" ? "border-[#cbf382] text-white" : "border-transparent text-white/40 hover:text-white/80"}`}
          >
            For Investors
          </button>
        </div>

        {/* Showcase Container */}
        <div className="rounded-[32px] border border-white/5 bg-white/[0.01] p-8 sm:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.8)] max-w-5xl mx-auto grid lg:grid-cols-12 gap-12 items-center">

          {/* Left Stats Column */}
          <div className="lg:col-span-4 space-y-8 font-serif">
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#cbf382] font-mono">Customer Retention</div>
              <div className="text-[44px] sm:text-[56px] text-white">Strong</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#cbf382] font-mono">Creative Quality</div>
              <div className="text-[44px] sm:text-[56px] text-white">Superb</div>
            </div>
            <div className="space-y-1">
              <div className="text-[10px] tracking-[0.2em] uppercase text-[#cbf382] font-mono">Campaign Velocity</div>
              <div className="text-[44px] sm:text-[56px] text-white">Swift</div>
            </div>
          </div>

          {/* Right Testimonial/Message Column */}
          <div className="lg:col-span-8 space-y-6">
            {activeRoleTab === "founders" && (
              <div className="space-y-6 animate-[fadeIn_0.5s_ease-out_forwards]">
                <p className="font-serif text-[18px] sm:text-[22px] leading-relaxed text-white/90">
                  "Signal transformed our digital strategy. Their mix of gorgeous creative and disciplined media buying grew our business within months."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-serif text-[18px] text-white font-bold">M</div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">Marcus Vance</div>
                    <div className="text-[11px] text-white/40">Founder & CEO, Aether Goods</div>
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === "cmos" && (
              <div className="space-y-6 animate-[fadeIn_0.5s_ease-out_forwards]">
                <p className="font-serif text-[18px] sm:text-[22px] leading-relaxed text-white/90">
                  "We scaled our ad spend while keeping our premium aesthetic. Signal proved that performance marketing doesn't have to look cheap."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-serif text-[18px] text-white font-bold">E</div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">Elena Rostova</div>
                    <div className="text-[11px] text-white/40">Chief Marketing Officer, LuxCorp</div>
                  </div>
                </div>
              </div>
            )}

            {activeRoleTab === "investors" && (
              <div className="space-y-6 animate-[fadeIn_0.5s_ease-out_forwards]">
                <p className="font-serif text-[18px] sm:text-[22px] leading-relaxed text-white/90">
                  "Signal delivers the actual customer acquisition and creative consistency required to build sustainable brand value."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-serif text-[18px] text-white font-bold">D</div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">David Chen</div>
                    <div className="text-[11px] text-white/40">General Partner, Prism Ventures</div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ─── 8. FAQ ACCORDION SECTION ─── */}
      <section className="relative z-30 max-w-4xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 bg-[#070707]">
        <div className="text-center mb-16">
          <div className="text-[11px] tracking-[0.25em] font-mono uppercase text-[#cbf382] mb-4">FAQ</div>
          <h2 className="font-serif text-[36px] sm:text-[48px] text-white">Questions? We've got answers.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 pb-4 text-left cursor-pointer transition-colors hover:text-white"
              onClick={() => toggleFaq(index)}
            >
              <div className="flex justify-between items-center py-3">
                <span className="font-serif text-[16px] sm:text-[18px] text-white/90">{faq.q}</span>
                <span className="text-[18px] text-[#cbf382] font-mono">{activeFaq === index ? "−" : "+"}</span>
              </div>
              <div className={`transition-all duration-300 overflow-hidden ${activeFaq === index ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                <p className="text-[14px] leading-relaxed text-[#f7f3ec]/65">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. FINAL CTA BLOCK ─── */}
      <section className="relative z-30 max-w-5xl mx-auto px-6 sm:px-12 lg:px-16 pb-32 text-center bg-[#070707]">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.02] p-12 sm:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden relative">
          <div className="absolute inset-0 bg-[#cbf382]/5 opacity-20 blur-[100px] pointer-events-none" />

          <h2 className="font-serif text-[36px] sm:text-[54px] leading-tight tracking-[-0.03em] text-white mb-6">
            Scale your brand with strategy, media,<br /><span className="italic text-white/50">and creative design.</span>
          </h2>
          <p className="max-w-xl mx-auto text-[14px] sm:text-[15px] leading-7 text-[#f7f3ec]/60 mb-10">
            We build the strategy, media campaigns, and creative assets to grow your business sustainably.
          </p>
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
              const targetUrl = getCrossDomainNavigateUrl("contact", "signal");
              if (targetUrl.startsWith("/")) {
                navigate(targetUrl);
              } else {
                window.location.href = targetUrl;
              }
            }}
            className="rounded-full bg-white text-black px-8 py-3.5 text-[13px] font-semibold tracking-wide hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Start a conversation
          </button>
        </div>
      </section>
    </div>
  );
}
