import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdTop from "@/components/ads/AdTop";
import AdBottom from "@/components/ads/AdBottom";
import "./globals.css";

export const metadata = {
  title: "Free Online Tools",
  description: "Best free tools website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body>
        <Navbar />

        {/* 🔝 TOP AD */}
        {/* <div className="max-w-6xl mx-auto px-4">
          <div className="mt-4">
            <AdTop />
          </div>
        </div> */}

        <main className="min-h-screen">{children}</main>

        {/* 🔽 FOOTER AD */}
        {/* <div className="max-w-6xl mx-auto px-4">
          <AdBottom />
        </div> */}

        <Footer />
      </body>
    </html>
  );
}