import { ImageResponse } from "@vercel/og";

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Clouds Above Earth';

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
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, fontFamily: 'Inter Tight' }}>{title}</div>
        <div style={{ fontSize: 24, opacity: 0.8 }}>
          A world of sound, mist, and memory.
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
