"use client";
import { useEffect } from "react";

export default function AdMiddle() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <div className="my-8">
      <ins
        className="adsbygoogle"
        style={{ display: "block", height: "250px" }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot="MIDDLE_SLOT_ID"
      />
    </div>
  );
}