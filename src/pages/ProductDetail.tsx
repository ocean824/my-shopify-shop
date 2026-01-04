import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PromoMarquee } from '@/components/PromoMarquee';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { fetchProductByHandle } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { Loader2, ArrowLeft, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      try {
        setLoading(true);
        const data = await fetchProductByHandle(handle);
        setProduct(data);
        if (data?.variants?.edges?.[0]) {
          setSelectedVariant(data.variants.edges[0].node);
        }
      } catch (err) {
        console.error('Failed to fetch product:', err);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions || [],
    });

    toast.success('Added to cart', {
      description: product.title,
      position: 'top-center',
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to store
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const images = product.images?.edges || [];
  const price = selectedVariant ? parseFloat(selectedVariant.price.amount) : 0;
  const compareAtPrice = selectedVariant?.compareAtPrice 
    ? parseFloat(selectedVariant.compareAtPrice.amount)
    : null;
  const isOnSale = compareAtPrice && compareAtPrice > price;

  return (
    <div className="flex flex-col min-h-screen">
      <PromoMarquee />
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to store
          </Link>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-card rounded-lg overflow-hidden">
                {images[selectedImage]?.node?.url ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map((img: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-md overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={img.node.url}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.productType || 'Sample Pack'}
                </p>
                <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    ${price.toFixed(2)}
                  </span>
                  {isOnSale && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        ${compareAtPrice.toFixed(2)}
                      </span>
                      <Badge className="bg-destructive">SALE</Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Variants */}
              {product.variants?.edges?.length > 1 && (
                <div className="space-y-3">
                  {product.options?.map((option: any) => (
                    <div key={option.name}>
                      <label className="text-sm font-medium mb-2 block">
                        {option.name}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value: string) => {
                          const variant = product.variants.edges.find(
                            (v: any) => v.node.selectedOptions.some(
                              (opt: any) => opt.name === option.name && opt.value === value
                            )
                          )?.node;
                          const isSelected = selectedVariant?.selectedOptions?.some(
                            (opt: any) => opt.name === option.name && opt.value === value
                          );
                          
                          return (
                            <Button
                              key={value}
                              variant={isSelected ? 'default' : 'outline'}
                              size="sm"
                              onClick={() => variant && setSelectedVariant(variant)}
                              className={isSelected ? 'bg-primary' : ''}
                            >
                              {value}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Add to Cart */}
              <Button 
                className="w-full bg-primary hover:bg-primary/90 h-12 text-lg"
                onClick={handleAddToCart}
                disabled={!selectedVariant?.availableForSale}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>

              {/* Description */}
              {product.description && (
                <div className="pt-6 border-t border-border">
                  <h3 className="font-semibold mb-3">Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">
                    {product.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
