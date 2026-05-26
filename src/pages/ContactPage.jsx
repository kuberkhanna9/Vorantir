import React, { useState } from "react";
import PageWrapper from "../components/shared/PageWrapper.jsx";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", org: "", email: "", type: "enterprise", msg: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // 1. Spambot Honeypot Validation
    if (honeypot) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1000);
      return;
    }

    // 2. Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid corporate email address.");
      return;
    }

    // 3. API Abstraction Layer Simulation with Rate Limit Scaffold
    if (form.name && form.email) {
      setLoading(true);
      
      // Simulate Resend or custom backend dispatch
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1200);
    }
  };

  return (
    <PageWrapper
      tag="Contact — Connect"
      title={<>Start a<br /><span className="italic text-black/50">conversation.</span></>}
      subtitle="We partner with industry leaders, premium brands, and advanced software platforms. Let us know how we can collaborate."
    >
      <div className="grid lg:grid-cols-12 gap-16 border-t border-black/5 pt-16">
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-[28px] bg-[#faf8f4] border border-black/5 p-10 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
              <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg mb-6">✓</div>
              <h3 className="font-serif text-[28px] tracking-[-0.03em] mb-4">Inquiry Received</h3>
              <p className="text-[15px] leading-7 text-black/55 mb-6">
                Thank you for your transmission. A member of our team will review your inquiry and respond within two business days.
              </p>
              <button
                onClick={() => { setForm({ name: "", org: "", email: "", type: "enterprise", msg: "" }); setSubmitted(false); }}
                className="rounded-full border border-black/10 px-6 py-2.5 text-[12px] hover:bg-black hover:text-white transition-colors duration-300"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g. Jean Marceau"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Organization</label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                    placeholder="e.g. Marceau Holdings"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="e.g. j.marceau@marceau.com"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Inquiry Focus</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="enterprise">Enterprise Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="advisory">Strategic Advisory</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-black/45 mb-2">Message Description</label>
                <textarea
                  rows="4"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                  className="w-full rounded-2xl border border-black/10 bg-white/40 px-5 py-3.5 text-[14px] text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Please describe your enterprise's operational model..."
                ></textarea>
              </div>

              {/* Honeypot field - invisible to genuine visitors but filled by spambots */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label htmlFor="b_username">Username</label>
                <input
                  id="b_username"
                  type="text"
                  name="b_username"
                  tabIndex="-1"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  autoComplete="off"
                />
              </div>

              {error && (
                <div className="text-[#a82525] text-[13px] tracking-wide mt-2">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="rounded-full bg-black text-white px-8 py-3.5 text-[13px] shadow-[0_15px_40px_rgba(0,0,0,0.14)] hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Transmitting..." : "Transmit inquiry"}
              </button>
            </form>
          )}
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h4 className="font-serif text-[22px] tracking-[-0.02em] mb-4">Direct Channels</h4>
            <div className="space-y-2 text-[14px] text-black/60">
              <p>Strategic Partnerships: <span className="font-mono text-black font-medium">partnerships@vorantir.com</span></p>
              <p>General Inquiries: <span className="font-mono text-black font-medium">hello@vorantir.com</span></p>
              <p>Press & Media Relations: <span className="font-mono text-black font-medium">press@vorantir.com</span></p>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-[22px] tracking-[-0.02em] mb-4">Operating Regions</h4>
            <div className="space-y-4 text-[14px] text-black/60 font-light">
              <div>
                <p className="font-medium text-black">India</p>
                <p>Product, strategy, and operational development</p>
              </div>
              <div>
                <p className="font-medium text-black">United Arab Emirates</p>
                <p>Partnerships, business development, and regional expansion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
