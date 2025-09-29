// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Area Co Real Estate",
  description: "Licensed to serve you with all your real estate needs throughout the state of Florida.",
  metadataBase: new URL("https://myarearealtorfl.vercel.app"),
  openGraph: {
    title: "Area Co Real Estate",
    description: "Real estate experts serving Miami and all of Florida.",
    url: "https://myarearealtorfl.vercel.app",
    siteName: "Area Co Real Estate",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Area Co Real Estate" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Area Co Real Estate",
    description: "Real estate experts serving Miami and all of Florida.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>

      {/* Optional: Google Analytics (safe to leave empty) */}
      {process.env.NEXT_PUBLIC_GA_ID && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `}
          </Script>
        </>
      )}
    </html>
  );
}
