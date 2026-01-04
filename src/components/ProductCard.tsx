import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus } from 'lucide-react';
import { ShopifyProduct } from '@/lib/shopify';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

interface ProductCardProps {
  product: ShopifyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore(state => state.addItem);
  const { node } = product;
  
  const priceAmount = node.priceRange.minVariantPrice.amount;
  const compareAtAmount = node.compareAtPriceRange?.minVariantPrice?.amount;
  const price = parseFloat(priceAmount);
  const compareAtPrice = compareAtAmount && parseFloat(compareAtAmount) > 0 ? parseFloat(compareAtAmount) : null;
  const isOnSale = compareAtPrice && compareAtPrice > price;
  const salePercentage = isOnSale ? Math.round((1 - price / compareAtPrice) * 100) : 0;

  // Format price cleanly (handles "24.990" -> "24.99" and "24.00" -> "24")
  const formatPrice = (amount: number) => {
    const rounded = Math.round(amount * 100) / 100;
    return rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(2);
  };

  const imageUrl = node.images.edges[0]?.node.url;
  const firstVariant = node.variants.edges[0]?.node;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!firstVariant) return;

    addItem({
      product,
      variantId: firstVariant.id,
      variantTitle: firstVariant.title,
      price: firstVariant.price,
      quantity: 1,
      selectedOptions: firstVariant.selectedOptions || [],
    });

    toast.success('Added to cart', {
      description: node.title,
      position: 'top-center',
    });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group">
      <div className="product-card bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50">
        {/* Image */}
        <div className="aspect-square relative overflow-hidden bg-secondary/20">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={node.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No Image
            </div>
          )}
          
          {/* Sale Badge */}
          {isOnSale && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              {salePercentage}% OFF
            </Badge>
          )}

          {/* Quick Add Button */}
          <Button
            size="icon"
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Info */}
        <div className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
            {node.productType || 'Sample Pack'}
          </p>
          <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {node.title}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${formatPrice(price)}
            </span>
            {isOnSale && compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${formatPrice(compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
