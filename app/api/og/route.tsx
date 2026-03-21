import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const service = searchParams.get("service");
  const location = searchParams.get("location");
  const near = searchParams.get("near");

  const heading = service ?? "Inspection & Consultancy";
  const subheading = near === "1" && location
    ? `Near ${location}`
    : location ?? "Manchester & North West England";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0a1628 0%, #1a365d 50%, #1e40af 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top: Logo text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#93c5fd",
            }}
          >
            Safe Lee
          </div>
          <div
            style={{
              width: 80,
              height: 4,
              backgroundColor: "#f59e0b",
              borderRadius: 2,
            }}
          />
        </div>

        {/* Centre: Service + Location */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: "90%",
            }}
          >
            {heading}
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 400,
              color: "#93c5fd",
            }}
          >
            {subheading}
          </div>
        </div>

        {/* Bottom: Phone number + tagline */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "#d1d5db",
            }}
          >
            Professional Statutory Inspections
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#f59e0b",
            }}
          >
            0161 706 2022
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
