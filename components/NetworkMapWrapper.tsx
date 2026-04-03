"use client";

import dynamic from "next/dynamic";

const NetworkMap = dynamic(() => import("@/components/NetworkMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-forest/5 flex items-center justify-center">
      <span className="text-forest/40 font-semibold text-sm">Loading map…</span>
    </div>
  ),
});

export default function NetworkMapWrapper() {
  return <NetworkMap />;
}
