"use client";
import { useEffect } from "react";

export default function AdBottom() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot="BOTTOM_SLOT_ID"
        data-ad-format="auto"
      />
    </div>
  );
}