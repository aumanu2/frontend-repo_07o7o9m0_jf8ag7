import type { Metadata } from "next";
import { notFound } from "next/navigation";

const posts = {
  "production-notes-01": {
    title: "Production Notes: Building a Cosmic Pad",
    content: `# Production Notes: Building a Cosmic Pad

We layer a Juno-inspired pad with gentle tape warble, add vinyl hiss, and ride a slow phaser. The result is a shimmering bed that breathes.

## Steps
- Start with a warm saw pad
- Add subtle noise and wow/flutter
- Use long pre-delay reverb
- Sidechain softly to a muted kick

> Listen while you read — toggle the player in the footer.
`,
  },
  "artist-thoughts-01": {
    title: "Artist Thoughts: On Nostalgia",
    content: `# Artist Thoughts: On Nostalgia

Nostalgia is a place we visit through sound. Field recordings — rain on windows, train stations — become portals.

## Notes
- Keep imperfections
- Let silence breathe
- Mix with intention rather than loudness
`,
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = (posts as any)[params.slug];
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.content.slice(0, 140),
    openGraph: { images: [`/api/og?title=${encodeURIComponent(post.title)}`] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = (posts as any)[params.slug];
  if (!post) return notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 prose prose-invert">
      <h1 className="font-display text-4xl mb-6">{post.title}</h1>
      <article>
        <pre className="whitespace-pre-wrap leading-relaxed">{post.content}</pre>
      </article>
    </div>
  );
}
