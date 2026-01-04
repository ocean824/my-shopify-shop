export function PromoMarquee() {
  const promoText = "GET 4+ PACKS 25% OFF • DISCOUNT CODE: BUNDLE • ";
  
  return (
    <div className="bg-primary text-primary-foreground py-2 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-medium text-sm mx-4">
            {promoText}
          </span>
        ))}
      </div>
    </div>
  );
}
