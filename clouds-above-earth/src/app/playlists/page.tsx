import { Suspense } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const playlists = [
  {
    title: "Cosmic Echoes",
    cover: "/covers/cosmic.jpg",
    mood: "Lo-Fi",
    tracks: ["Stardust Dreams", "Neon Drift", "Midnight Haze"],
  },
  {
    title: "Rainy Café",
    cover: "/covers/rainy.jpg",
    mood: "Ambient",
    tracks: ["Soft Umbrella", "Window Trails", "Misty Coffee"],
  },
  {
    title: "Nightdrive Neon",
    cover: "/covers/night.jpg",
    mood: "Chillhop",
    tracks: ["Freeway Lights", "Vaporheart", "Late Turn"],
  },
];

export const metadata = {
  title: "Playlists",
  description: "Explore lo-fi playlists and ambient journeys.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="font-display text-4xl">Playlists</h1>
          <p className="text-cloud/70">Filter by mood and discover new sounds.</p>
        </div>
        <div className="flex gap-2">
          {['Lo-Fi','Ambient','Piano','Chillhop','Sleep','Focus'].map((f)=> (
            <button key={f} className="px-3 py-1 rounded-full border border-teal/20 hover:bg-teal/10 text-sm">{f}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {playlists.map((p) => (
          <div key={p.title} className="group relative overflow-hidden rounded-xl glass border border-teal/20">
            <div className="relative aspect-square">
              <Image src={p.cover} alt={p.title} fill className="object-cover transition duration-300 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="text-sm text-teal">{p.mood}</div>
              <div className="font-semibold">{p.title}</div>
              <div className="text-xs text-cloud/70 opacity-0 group-hover:opacity-100 transition">
                {p.tracks.join(" • ")}
              </div>
              <div className="mt-3">
                <Button size="sm">Play</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
