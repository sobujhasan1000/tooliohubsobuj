"use client";
import { useEffect } from "react";

export default function AdTop() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
      data-ad-slot="TOP_SLOT_ID"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}