// Centralized Analytics Engine for the Vorantir Ecosystem

export const initAnalytics = () => {
  if (typeof window === "undefined") return;

  const gaId = import.meta.env.VITE_GA4_ID;
  const clarityId = import.meta.env.VITE_CLARITY_ID;
  const linkedinId = import.meta.env.VITE_LINKEDIN_INSIGHT_ID;

  // 1. Google Analytics 4 (GA4)
  if (gaId && !document.getElementById("gtag-base")) {
    const script = document.createElement("script");
    script.id = "gtag-base";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    const initScript = document.createElement("script");
    initScript.id = "gtag-init";
    initScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', '${gaId}', { page_path: window.location.pathname });
    `;
    document.head.appendChild(initScript);
  }

  // 2. Microsoft Clarity
  if (clarityId && !document.getElementById("clarity-script")) {
    const clarityScript = document.createElement("script");
    clarityScript.id = "clarity-script";
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script","${clarityId}");
    `;
    document.head.appendChild(clarityScript);
  }

  // 3. LinkedIn Insight Tag
  if (linkedinId && !document.getElementById("linkedin-insight")) {
    const linkedinScript = document.createElement("script");
    linkedinScript.id = "linkedin-insight";
    linkedinScript.innerHTML = `
      _linkedin_partner_id = "${linkedinId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
      (function(l) {
        if (!l) return;
        var s = document.getElementsByTagName("script")[0];
        var b = document.createElement("script");
        b.type = "text/javascript";b.async = true;
        b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
        s.parentNode.insertBefore(b, s);
      })(window._linkedin_data_partner_ids);
    `;
    document.head.appendChild(linkedinScript);
  }

  // 4. Meta Pixel (Prepared disabled placeholder)
  // To enable, set VITE_META_PIXEL_ID env var and uncomment activation block
  const metaPixelId = import.meta.env.VITE_META_PIXEL_ID;
  if (metaPixelId && !document.getElementById("meta-pixel-script") && false) {
    const pixelScript = document.createElement("script");
    pixelScript.id = "meta-pixel-script";
    pixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${metaPixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(pixelScript);
  }
};

export const trackPageView = (path) => {
  if (typeof window === "undefined") return;

  const gaId = import.meta.env.VITE_GA4_ID;
  if (gaId && window.gtag) {
    window.gtag("config", gaId, { page_path: path });
  }

  if (import.meta.env.DEV) {
    console.log(`[Analytics] Tracked pageview: ${path}`);
  }
};
