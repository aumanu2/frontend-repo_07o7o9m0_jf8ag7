"use client";
import Image from "next/image";
import { useState } from "react";

const covers = Array.from({ length: 12 }).map((_, i) => ({
  src: `/covers/${(i % 6) + 1}.jpg`,
  title: `Cover ${i + 1}`,
  mood: ["cosmic", "rainy", "pastel", "nightdrive"][i % 4],
  date: `2025-0${(i % 6) + 1}-01`,
}));

export const metadata = {
  title: "Gallery",
  description: "Album and track artwork gallery.",
};

export default function GalleryPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered = filter ? covers.filter((c) => c.mood === filter) : covers;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h1 className="font-display text-4xl">Gallery of Covers</h1>
          <p className="text-cloud/70">Hover to reveal details. Click to zoom.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {['cosmic','rainy','pastel','nightdrive'].map((m)=> (
            <button key={m} onClick={()=> setFilter(m === filter ? null : m)} className={`px-3 py-1 rounded-full border text-sm ${filter===m? 'bg-teal/20 border-teal/40':'border-teal/20 hover:bg-teal/10'}`}>{m}</button>
          ))}
        </div>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]
      *:break-inside-avoid">
        {filtered.map((c, idx) => (
          <div key={idx} className="relative group mb-4 overflow-hidden rounded-xl border border-teal/20">
            <Image src={c.src} alt={`${c.title} ${c.mood}`} width={900} height={900} className="w-full h-auto object-cover transition group-hover:blur-sm" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-night/90 via-night/40 to-transparent">
              <div className="text-sm text-teal">{c.mood} • {new Date(c.date).toLocaleDateString()}</div>
              <div className="font-semibold">{c.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
