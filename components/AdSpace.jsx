"use client";
import { useEffect } from "react";

export default function AdSpace({ height = "150px", adSlot }) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log("AdSense error:", err);
    }
  }, []);

  return (
    <div className="w-full my-6 flex justify-center">
      <div style={{ width: "100%", height }}>
        {/* Google AdSense Unit */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height }}
          data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
          data-ad-slot={adSlot || "YOUR_AD_SLOT_ID"}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}