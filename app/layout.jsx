import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Script from "next/script";

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
    <html lang="en">
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="ferAaVwZZKOS0wwqSn5nANeOQ9PKveokM6qxEy2rL7U"
        />
      </head>

      <body>
        <Navbar />

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
