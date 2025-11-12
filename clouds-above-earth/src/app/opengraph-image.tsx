import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #2A1342, #3D1A5B 50%, #09090B)',
          color: '#F6F6F8',
          fontSize: 64,
          fontWeight: 700,
        }}
      >
        Clouds Above Earth
      </div>
    ),
    size
  );
}
