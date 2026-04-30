"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function SmartCTA() {
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  // Show logic (delay + page control)
  useEffect(() => {
    let timer;

    if (pathname.startsWith("/tools")) {
      setShow(true); // instant for tools
    } else if (pathname.startsWith("/blog")) {
      timer = setTimeout(() => setShow(true), 4000); // delay for blog
    } else {
      setShow(false);
    }

    return () => clearTimeout(timer);
  }, [pathname]);

  // Scroll trigger (extra boost)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;

      if (scrollY / height > 0.3) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Analytics tracking
  const handleClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cta_click", {
        event_category: "engagement",
        event_label: "smart_cta",
      });
    }
  };

  if (!show || closed) return null;

  const isTool = pathname.startsWith("/tools");

  return (
    <>
      {/* DESKTOP CTA */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50 animate-slideUp">
        <div className="bg-white shadow-2xl rounded-2xl p-4 w-72 border relative">
          {/* Close */}
          <button
            onClick={() => setClosed(true)}
            className="absolute top-2 right-3 text-gray-400 hover:text-black"
          >
            ✕
          </button>

          {/* Text */}
          <p className="text-sm font-semibold text-gray-800 mb-2">
            {isTool ? "📊 Get Instant Results" : "💰 Want to grow your money?"}
          </p>

          {/* Button */}
          <a
            href="https://singingfiles.com/show.php?l=0&u=2522036&id=73805"
            target="_blank"
            onClick={handleClick}
            className="block text-center bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            {isTool ? "Calculate Now" : "Explore Options"}
          </a>
        </div>
      </div>

      {/* MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 animate-slideUp">
        <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-3 shadow-lg">
          <span className="text-sm font-medium">
            {isTool ? "📊 Calculate your results" : "💰 Grow your money"}
          </span>

          <div className="flex items-center gap-2">
            <a
              href="https://singingfiles.com/show.php?l=0&u=2522036&id=73805"
              target="_blank"
              onClick={handleClick}
              className="bg-white text-blue-600 px-3 py-1.5 rounded-lg text-sm font-semibold"
            >
              Start
            </a>

            <button
              onClick={() => setClosed(true)}
              className="text-white text-lg px-2"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
