import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Updates, behind-the-scenes, and tutorials.",
};

const posts = [
  {
    slug: "production-notes-01",
    title: "Production Notes: Building a Cosmic Pad",
    excerpt: "Layering synths with tape noise and modulated reverb to craft a dreamy bed.",
    category: "Production Notes",
    date: "2025-01-02",
  },
  {
    slug: "artist-thoughts-01",
    title: "Artist Thoughts: On Nostalgia",
    excerpt: "Memories as sound—how field recordings and analog grit evoke emotion.",
    category: "Artist Thoughts",
    date: "2025-01-10",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="font-display text-4xl mb-8">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="glass p-5 rounded-xl border border-teal/20 hover:shadow-glow block">
            <div className="text-teal text-xs mb-1">{p.category}</div>
            <h2 className="font-semibold text-lg">{p.title}</h2>
            <p className="text-cloud/70 text-sm">{p.excerpt}</p>
            <div className="text-cloud/50 text-xs mt-3">{new Date(p.date).toLocaleDateString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
