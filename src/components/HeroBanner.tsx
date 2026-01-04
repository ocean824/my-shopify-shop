import heroBanner from '@/assets/hero-banner.png';

export function HeroBanner() {
  return (
    <div className="w-full">
      <img 
        src={heroBanner} 
        alt="Niko The Great - Producer & Sound Designer" 
        className="w-full h-auto object-cover"
        style={{ imageRendering: 'pixelated' }}
      />
    </div>
  );
}
