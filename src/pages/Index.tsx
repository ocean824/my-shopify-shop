import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroBanner } from '@/components/HeroBanner';
import { PromoMarquee } from '@/components/PromoMarquee';
import { ProductGrid } from '@/components/ProductGrid';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PromoMarquee />
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Premium <span className="text-primary">Sample Packs</span> & <span className="text-primary">Drum Kits</span>
            </h1>
            <p className="text-muted-foreground">
              Hand-crafted sounds for producers who want to stand out
            </p>
          </div>
          <ProductGrid title="All Products" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
