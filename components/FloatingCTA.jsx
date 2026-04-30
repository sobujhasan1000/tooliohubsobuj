"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function FloatingCTA() {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timer;

    const handleShow = () => {
      if (pathname.startsWith("/tools")) {
        setShow(true);
      } else if (pathname.startsWith("/blog")) {
        timer = setTimeout(() => setShow(true), 4000);
      } else {
        setShow(false);
      }
    };

    handleShow();

    return () => clearTimeout(timer);
  }, [pathname]);

  // Scroll trigger (ONLY if not already shown)
  useEffect(() => {
    const handleScroll = () => {
      if (show) return; // prevent override

      const scrollY = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;

      if (scrollY / height > 0.4) {
        setShow(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [show]);

  if (!show || closed) return null;

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 ${
        pathname.startsWith("/tools") ? "animate-bounce" : "animate-slideUp"
      }`}
    >
      <div className="bg-white shadow-xl rounded-2xl p-4 max-w-xs border relative">
        {/* Close */}
        <button
          onClick={() => setClosed(true)}
          className="absolute top-0 right-3 text-red-500 hover:text-black"
        >
          ✕
        </button>

        {/* Text */}
        <p className="text-sm font-medium text-gray-800 mb-2">
          💰 Want to grow your money?
        </p>

        {/* CTA */}
        <a
          href="https://singingfiles.com/show.php?l=0&u=2522036&id=74818"
          target="_blank"
          className="block text-center bg-green-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-700 transition"
        >
          Explore Options
        </a>
      </div>

      {/* Smooth slide animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(40px);
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
    </div>
  );
}
