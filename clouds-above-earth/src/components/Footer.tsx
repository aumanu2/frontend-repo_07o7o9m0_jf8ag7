import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-teal/10">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-cloud/70">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-cloud/90 relative">
            <div className="absolute -inset-1 rounded-full bg-teal/20 blur" />
          </div>
          <span>Made in the Clouds. Powered by Vercel.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="mailto:hello@cloudsabove.earth" className="hover:text-cloud">Email</Link>
          <Link href="https://youtube.com" className="hover:text-cloud" target="_blank">YouTube</Link>
          <Link href="https://instagram.com" className="hover:text-cloud" target="_blank">Instagram</Link>
          <Link href="https://tiktok.com" className="hover:text-cloud" target="_blank">TikTok</Link>
          <Link href="https://spotify.com" className="hover:text-cloud" target="_blank">Spotify</Link>
        </div>
        <div className="w-full md:w-auto max-w-sm">
          <form className="flex gap-2">
            <input type="email" placeholder="Email for updates" className="flex-1 glass px-3 py-2 rounded-md text-cloud placeholder:text-cloud/40" />
            <button className="px-3 py-2 rounded-md bg-teal/20 text-cloud border border-teal/30">Join</button>
          </form>
        </div>
      </div>
    </footer>
  )
}
