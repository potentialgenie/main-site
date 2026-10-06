import { ImageResponse } from "next/og";

export const alt = "Make It Real designs and builds software";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#131313",
          color: "#ffffff",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", color: "#df2919", fontSize: 28, letterSpacing: 6 }}>MAKE IT REAL</div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
          We design and build software.
        </div>
        <div style={{ display: "flex", marginTop: 28, maxWidth: 820, color: "#c8c8c8", fontSize: 32, lineHeight: 1.35 }}>
          Websites, web apps, mobile products, stores, and AI features.
        </div>
      </div>
    ),
    { ...size },
  );
}
