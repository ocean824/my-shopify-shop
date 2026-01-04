import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoMarquee } from '@/components/PromoMarquee';
import { ProductGrid } from '@/components/ProductGrid';

export default function SampleKits() {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoMarquee />
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sample Kits</h1>
            <p className="text-muted-foreground">
              Premium sample packs with loops, melodies, and textures
            </p>
          </div>
          <ProductGrid category="Sample Kit" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
