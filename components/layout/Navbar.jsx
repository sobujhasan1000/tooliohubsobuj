"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  // 🔥 Dynamic Menu
  const menu = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    {
      name: "Tools",
      dropdown: true,
      items: [
        { name: "Image Compressor", path: "/tools/image-compressor" },
        { name: "JSON Formatter", path: "/tools/json-formatter" },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) =>
    pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          ToolioHub
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-medium relative">
          {menu.map((item, i) =>
            item.dropdown ? (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-600">
                  {item.name} ▾
                </button>

                {/* Dropdown */}
                {toolsOpen && (
                  <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-3 w-48">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.path}
                        href={sub.path}
                        className="block py-2 px-3 rounded hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                className={`${isActive(item.path)} hover:text-blue-600`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Admin Button */}
          <Link
            href="/login"
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-3">
          {menu.map((item, i) =>
            item.dropdown ? (
              <div key={i}>
                <p className="font-semibold">{item.name}</p>
                <div className="ml-3 mt-2 space-y-2">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.path}
                      href={sub.path}
                      onClick={() => setOpen(false)}
                      className="block text-gray-700"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`block ${isActive(item.path)}`}
              >
                {item.name}
              </Link>
            )
          )}

          {/* Admin Mobile */}
          <Link
            href="/admin/login"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white px-3 py-2 rounded"
          >
            Admin Panel
          </Link>
        </div>
      )}
    </nav>
  );
}