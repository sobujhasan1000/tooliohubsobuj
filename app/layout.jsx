import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Script from "next/script";
import FloatingCTA from "@/components/FloatingCTA";
import SmartCTA from "@/components/SmartCTA";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  metadataBase: new URL("https://www.tooliofinance.com"),

  title: {
    default: "ToolioFinance - Free Finance Tools & Blogs",
    template: "%s | ToolioFinance",
  },

  description:
    "Free finance tools, calculators and high CPC USA blogs for money growth and investment.",

  keywords: [
    "finance calculator USA",
    "investment calculator",
    "salary calculator USA",
    "retirement planner",
    "loan calculator USA",
    "high CPC finance blog",
  ],

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="ferAaVwZZKOS0wwqSn5nANeOQ9PKveokM6qxEy2rL7U"
        />
        {/* impact affilateate confirm */}
        <meta
          name="impact-site-verification"
          value="60b2ebe3-06b7-425f-bcae-d1616e9e9384"
        ></meta>
      </head>

      <body>
        <Navbar />
        {/* <SmartCTA /> */}
        <FloatingCTA />
        <main className="min-h-screen">{children}</main>

        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G0XSRPJ89T"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G0XSRPJ89T');
          `}
        </Script>
        <Footer />
      </body>
    </html>
  );
}
