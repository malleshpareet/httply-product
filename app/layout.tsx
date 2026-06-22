import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Httply — Install the Modern API & WebSocket Testing Platform",
  description:
    "Download and install Httply — test REST APIs, debug WebSocket connections, manage collections and collaborate with your team. Available for Windows, macOS, Linux, and Web.",
  keywords: [
    "Httply", "API client", "API testing", "WebSocket testing", "WebSocket client",
    "download", "install", "Postman alternative", "REST client", "developer tools",
  ],
  openGraph: {
    title: "Httply — Install. Configure. Test APIs Faster.",
    description:
      "Download Httply to start testing, managing, and collaborating on APIs with your team.",
    url: "https://httply.qzz.io/install",
    siteName: "Httply",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
