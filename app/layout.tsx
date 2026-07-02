import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: "Httply - API Client | The Ultimate API & WebSocket Testing Platform",
    template: "%s | Httply - API Client"
  },
  description: "Download Httply — the modern, open-source Postman alternative to test REST APIs, debug WebSocket connections, manage collections, and collaborate with your team. Available for Windows, macOS, Linux, and Web.",
  keywords: [
    "API Testing Tool", "Postman Alternative", "API Client", "API Development Platform",
    "API Request Testing", "REST API Testing", "GraphQL Testing", "API Collaboration Tool",
    "Open Source API Testing", "Httply", "WebSocket Client", "REST Client"
  ],
  authors: [{ name: "Httply Team" }],
  creator: "Httply - API Client",
  publisher: "Httply - API Client",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Httply - API Client | The Ultimate API & WebSocket Testing Platform",
    description: "Download Httply - API Client to start testing, managing, and collaborating on APIs faster. The perfect Postman alternative.",
    url: "/",
    siteName: "Httply - API Client",
    images: [
      {
        url: "/og-image.png", // Assuming we have or will add a standard og-image
        width: 1200,
        height: 630,
        alt: "Httply API Testing Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Httply - API Client | API Testing Made Simple",
    description: "Test REST APIs, debug WebSockets, and collaborate with your team. Try the modern Postman alternative today.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
    // yandex: "yandex-verification",
    // yahoo: "yahoo-verification",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`,
                  "name": "Httply - API Client",
                  "url": process.env.NEXT_PUBLIC_SITE_URL,
                  "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/icon.png`,
                  "sameAs": [
                    "https://github.com/malleshpareet/httply-product"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#website`,
                  "url": process.env.NEXT_PUBLIC_SITE_URL,
                  "name": "Httply - API Client",
                  "description": "The Ultimate API & WebSocket Testing Platform",
                  "publisher": {
                    "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/#organization`
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Httply - API Client",
                  "operatingSystem": "Windows, macOS, Linux, Web",
                  "applicationCategory": "DeveloperApplication",
                  "description": "Modern API Testing Platform. Test REST APIs, debug WebSockets, and collaborate with your team.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
