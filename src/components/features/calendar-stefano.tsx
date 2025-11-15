"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalendarStefano() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: { "cal-brand": "#FD5F0C" },
          light: { "cal-brand": "#FD5F0C" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="flex flex-col gap-10">
      <h2 className="font-bold text-2xl">Schedule a Discovery Call</h2>
      <Cal
        calLink="stefanozoli/30min"
        config={{ layout: "month_view", theme: "dark" }}
        namespace="30min"
        style={{ width: "100%", height: "100%", overflow: "hidden" }}
      />
    </div>
  );
}
