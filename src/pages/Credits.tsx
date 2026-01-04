import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

export default function Credits() {
  // Production credits - to be populated
  const credits = [
    {
      artist: "Coming Soon",
      tracks: ["Credits will be listed here"],
      link: null,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Production Credits</h1>
            <p className="text-muted-foreground">
              Music produced, co-produced, or engineered by Niko The Great
            </p>
            <a
              href="https://music.apple.com/search?term=niko%20the%20great"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
            >
              View on Apple Music <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-center text-muted-foreground">
              Provide your production credits and I'll display them here in a professional format!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
