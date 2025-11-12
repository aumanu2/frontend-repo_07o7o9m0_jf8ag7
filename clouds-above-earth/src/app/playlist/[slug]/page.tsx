import Image from "next/image";
import { notFound } from "next/navigation";

const data: Record<string, any> = {
  "cosmic-echoes": {
    title: "Cosmic Echoes",
    cover: "/covers/cosmic.jpg",
    tracks: ["Stardust Dreams", "Neon Drift", "Midnight Haze"],
  },
};

export async function generateStaticParams() {
  return Object.keys(data).map((slug) => ({ slug }));
}

export default function PlaylistPage({ params }: { params: { slug: string } }) {
  const playlist = data[params.slug];
  if (!playlist) return notFound();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-square rounded-xl overflow-hidden border border-teal/20">
          <Image src={playlist.cover} alt={playlist.title} fill className="object-cover" />
        </div>
        <div>
          <h1 className="font-display text-4xl mb-2">{playlist.title}</h1>
          <ul className="list-disc pl-5 text-cloud/80">
            {playlist.tracks.map((t: string) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
