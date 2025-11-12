"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloudy } from "@/components/Cloudy";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const moods = [
  { key: "cosmic", label: "Cosmic" },
  { key: "rainy", label: "Rainy" },
  { key: "sunset", label: "Sunset" },
  { key: "nightdrive", label: "Nightdrive" },
];

export default function HomePage() {
  const [mood, setMood] = useState("cosmic");

  return (
    <div className="relative">
      {/* Background mood layers */}
      <div className="absolute inset-0 -z-10 opacity-70">
        {mood === "cosmic" && (
          <div className="absolute inset-0 bg-cosmicGradient" />
        )}
        {mood === "rainy" && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1220] via-[#121a2b] to-night" />
        )}
        {mood === "sunset" && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#422a13] via-[#5b331a] to-night" />
        )}
        {mood === "nightdrive" && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b12] via-[#1b132a] to-night" />
        )}

        {/* drifting clouds */}
        <div className="absolute left-0 right-0 top-20 h-48 opacity-30 overflow-hidden">
          <div className="w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25),transparent_60%)] animate-drift" />
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-16 pt-8">
        <div className="flex flex-col items-center text-center gap-6">
          <Cloudy className="mb-2" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl md:text-7xl tracking-tight"
          >
            Clouds Above Earth
          </motion.h1>
          <p className="text-cloud/80 max-w-2xl">
            A world of sound, mist, and memory. Nostalgic lo-fi and ambient soundscapes.
          </p>
          <div className="flex gap-3">
            <Link href="/playlists"><Button size="lg">Listen</Button></Link>
            <Link href="/playlists"><Button variant="secondary" size="lg">Playlists</Button></Link>
            <Link href="/gallery"><Button variant="ghost" size="lg">Covers</Button></Link>
          </div>

          {/* KPI */}
          <div className="mt-8 grid grid-cols-3 gap-6 w-full max-w-2xl">
            {[
              { label: "Songs", value: "128+" },
              { label: "Listeners", value: "1.2M" },
              { label: "Channels", value: "6+" },
            ].map((k) => (
              <div key={k.label} className="glass rounded-xl p-4 border border-teal/20">
                <div className="text-2xl font-semibold">{k.value}</div>
                <div className="text-cloud/60 text-xs">{k.label}</div>
              </div>
            ))}
          </div>

          {/* mood switcher */}
          <div className="mt-10 flex gap-2 flex-wrap justify-center">
            {moods.map((m) => (
              <button
                key={m.key}
                onClick={() => setMood(m.key)}
                className={`px-3 py-1 rounded-full border text-sm ${
                  mood === m.key ? "bg-teal/20 border-teal/40" : "border-teal/20 hover:bg-teal/10"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Latest release embed */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-video w-full glass rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/5qap5aO4i9A?rel=0"
              title="Latest Release"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div>
            <h2 className="font-display text-3xl mb-2">Latest Release</h2>
            <p className="text-cloud/70">
              Immerse in a drifting, neon-soaked atmosphere with soft rain and distant city lights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
