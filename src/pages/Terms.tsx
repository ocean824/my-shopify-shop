import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-3xl">
          <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
          
          <div className="prose prose-invert max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-primary">License Agreement</h2>
              <p className="text-muted-foreground">
                By purchasing any sample pack or drum kit from Niko The Great, you are granted a 
                non-exclusive, royalty-free license to use the sounds in your music productions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-primary">Permitted Uses</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use in commercial and non-commercial music productions</li>
                <li>Use in beats for sale or lease</li>
                <li>Use in streaming, radio, and broadcast</li>
                <li>Use in film, TV, and video game soundtracks</li>
                <li>Modify and manipulate sounds for your productions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-primary">Restrictions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>You may NOT resell, redistribute, or share the raw samples</li>
                <li>You may NOT include samples in competing sample packs or libraries</li>
                <li>You may NOT claim ownership of the original samples</li>
                <li>You may NOT use samples in isolation as standalone tracks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-primary">Refund Policy</h2>
              <p className="text-muted-foreground">
                Due to the digital nature of these products, all sales are final. Please listen to 
                any available previews before purchasing. If you experience technical issues with 
                your download, please contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3 text-primary">Support</h2>
              <p className="text-muted-foreground">
                For any questions about licensing or usage, please reach out via our contact page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
