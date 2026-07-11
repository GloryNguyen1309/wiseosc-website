'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  return (
    <>
      {/* Google Analytics (GA4) */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=G-QVCZZ4ZZ1J" 
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QVCZZ4ZZ1J');
        `}
      </Script>
      
      {/* Google Ads */}
      <Script 
        src="https://www.googletagmanager.com/gtag/js?id=AW-16920681253" 
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16920681253');
        `}
      </Script>
    </>
  );
} 