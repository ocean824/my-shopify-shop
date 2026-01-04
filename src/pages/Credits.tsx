import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ExternalLink } from 'lucide-react';

interface Credit {
  song: string;
  artist: string;
  album: string;
}

export default function Credits() {
  const credits: Credit[] = [
    // Major Label / Notable Credits
    { song: "Street", artist: "G Herbo", album: "Humble Beast" },
    { song: "Genie", artist: "YoungBoy Never Broke Again", album: "Until Death Call My Name Reloaded" },
    { song: "Can't Be Saved", artist: "YoungBoy Never Broke Again", album: "4Respect 4Freedom 4Loyalty 4WhatImportant" },
    { song: "Chase tha Bag", artist: "Roddy Ricch", album: "Feed tha Streets" },
    { song: "Common Ground", artist: "Jack Harlow", album: "Jackman." },
    { song: "On God (feat. KayCyy)", artist: "Fivio Foreign", album: "B.I.B.L.E." },
    { song: "Walk By Faith (feat. Josh Kream)", artist: "Maxo Kream", album: "Personification" },
    { song: "Hold Back Tears", artist: "Conway the Machine", album: "You Can't Kill God With Bullets" },
    { song: "BETHLEHEM/SC FREESTYLE", artist: "VIC MENSA", album: "V TAPE" },
    { song: "Shmurda Talk (feat. Rowdy Rebel)", artist: "Doe Boy", album: "Shmurda Talk - Single" },
    { song: "Adderall", artist: "Loe Shimmy, Fredo Bang", album: "Zombieland 2.6" },
    { song: "GOLDTOOTH (feat. Blaqbonez)", artist: "Knucks", album: "A Fine African Man" },
    
    // PHABO
    { song: "Palm Trees", artist: "PHABO", album: "Soulquarius" },
    { song: "Luv Me Back", artist: "PHABO", album: "Before I Let Her Go - EP" },
    
    // Michael Christmas
    { song: "Ball", artist: "Michael Christmas", album: "Role Model" },
    
    // Teezo Touchdown
    { song: "Out of Respect", artist: "Teezo Touchdown", album: "How Do You Sleep At Night? With You" },
    
    // AUGUST 08
    { song: "Keep Me Around", artist: "AUGUST 08", album: "Keep Me Around - Single" },
    
    // Seddy Hendrinx
    { song: "Hmm", artist: "Seddy Hendrinx, Quay Global", album: "BLITZ" },
    
    // Reuben Vincent
    { song: "GRAND CHERRY", artist: "Reuben Vincent", album: "GRAND CHERRY - Single" },
    
    // Devin Malik
    { song: "PEARLS", artist: "Devin Malik", album: "DEADSTOCK" },
    
    // Angelo Mota
    { song: "i'll never forgive you", artist: "Angelo Mota", album: "i changed my mind" },
    
    // DETO BLACK
    { song: "Bornstar (feat. Bratzbih)", artist: "DETO BLACK", album: "Bornstar - Single" },
    
    // Ausar
    { song: "poster CHILD", artist: "Ausar, Dende, Sam Williams", album: "I Now Know." },
    { song: "Win", artist: "Ausar, Tri Nohbi", album: "I Now Know." },
    { song: "PLEAsure", artist: "Ausar, Senite", album: "I Now Know." },
    { song: "I Now Know.", artist: "Ausar", album: "I Now Know." },
    
    // The Other Eric
    { song: "Blown Away", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "Cut Off", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "Tell Nobody", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "Temporary", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "Let Me Down (feat. Chanelle Truvillion)", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "Like This (Version 1)", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "You Know Better", artist: "The Other Eric", album: "Conflict Perspective" },
    { song: "The Plug", artist: "The Other Eric", album: "The Plug - Single" },
    { song: "Bad Habits", artist: "The Other Eric", album: "Bad Habits - Single" },
    { song: "Felt This Way", artist: "The Other Eric", album: "Felt This Way - Single" },
    { song: "Best Mistake (feat. Niko The Great)", artist: "The Other Eric", album: "Broken Cookies - Single" },
    { song: "Overblown (feat. Niko The Great)", artist: "The Other Eric", album: "Broken Cookies - Single" },
    { song: "Purest (feat. Niko The Great)", artist: "The Other Eric", album: "Broken Cookies - Single" },
    
    // Jay2
    { song: "Stay In", artist: "Jay2", album: "Send Heartss" },
    { song: "Arm N Leg (feat. Bari)", artist: "Jay2", album: "Send Heartss" },
    { song: "Abundance", artist: "Jay2", album: "Send Heartss" },
    
    // Young Pink
    { song: "Outlaw", artist: "Young Pink", album: "Neva Look Back" },
    { song: "In the Mix", artist: "Young Pink", album: "Neva Look Back" },
    { song: "Call Her Bae", artist: "Young Pink", album: "Neva Look Back" },
    { song: "Frosty (feat. Jay2)", artist: "Young Pink", album: "Neva Look Back" },
    { song: "Got Weight", artist: "Young Pink", album: "Neva Look Back" },
    { song: "Make Em Sick", artist: "Young Pink", album: "Neva Look Back" },
    { song: "Set Fire", artist: "Young Pink", album: "F*@k It... Burn It All Down" },
    
    // Fee4Three
    { song: "Earth is The Trap", artist: "Fee4Three", album: "Earth is TheTrap" },
    { song: "Finally, I Vent", artist: "Fee4Three", album: "Epitome of Balance" },
    { song: "Useless II", artist: "Fee4Three", album: "Epitome of Balance" },
    { song: "Gossip", artist: "Fee4Three", album: "Epitome of Balance" },
    { song: "Tabernacle", artist: "Fee4Three", album: "Epitome of Balance" },
    { song: "6AM", artist: "Fee4Three", album: "6AM - Single" },
    
    // Gnarly Brown
    { song: "Add Gin (feat. Niko the Great)", artist: "Gnarly Brown, Fee4Three", album: "5 Songs - EP" },
    { song: "B******t (feat. Niko the Great)", artist: "Gnarly Brown, Fee4Three", album: "5 Songs - EP" },
    { song: "Red Eye", artist: "Gnarly Brown", album: "Orange Rose - EP" },
    
    // myquale
    { song: "Isolation", artist: "myquale", album: "Isolation - Single" },
    { song: "fortyfour4's", artist: "myquale", album: "fortyfour4's - Single" },
    { song: "North (feat. Trapo)", artist: "myquale", album: "North - Single" },
    { song: "Above All (feat. KETU & Denzel Lavell)", artist: "myquale", album: "Above All" },
    { song: "& Then There Were Two", artist: "myquale", album: "Above All" },
    { song: "Butler (feat. Maceo & Aaliyah Allah)", artist: "Myquale", album: "Heard Well Collection, Vol. 18" },
    
    // Qari
    { song: "Zoo (feat. Elton Aura)", artist: "Qari", album: "Igotproblems - EP" },
    
    // NLite
    { song: "Thokoza (feat. ASAP Shembe)", artist: "NLite.", album: "Remix - EP" },
    
    // Lei Dominique
    { song: "No Angel", artist: "Lei Dominique", album: "No Angel - Single" },
    
    // Tweetsie Baby
    { song: "THREW MY LIFE AWAY", artist: "Tweetsie Baby", album: "THREW MY LIFE AWAY - Single" },
    
    // Outernet
    { song: "Evol", artist: "Outernet", album: "Evol - Single" },
    
    // aubreykingx
    { song: "Fefifo", artist: "aubreykingx", album: "Pregame - EP" },
    
    // Dom Sarfo
    { song: "Grown", artist: "Dom Sarfo", album: "Grown - Single" },
    
    // isaiah Rusk
    { song: "FRITO LAY", artist: "isaiah Rusk", album: "Happily Ever AFTRs - EP" },
    
    // Nali
    { song: "Hold Me Close", artist: "Nali", album: "No Spaces - Single" },
    
    // Tahjer
    { song: "Mr. DJ", artist: "Tahjer", album: "Mr. DJ - Single" },
    
    // Foggieraw
    { song: "B Word Demo", artist: "Foggieraw", album: "Fogtavious Vandross 2" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Production Credits</h1>
            <p className="text-muted-foreground">
              Music produced, co-produced, or featuring Niko The Great
            </p>
            <a
              href="https://music.apple.com/library/playlist/p.mmRl3ZAfvVYGqq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
            >
              View on Apple Music <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/50 text-sm font-medium text-muted-foreground">
              <div className="col-span-5">Song</div>
              <div className="col-span-4">Artist</div>
              <div className="col-span-3">Album</div>
            </div>
            
            <div className="divide-y divide-border">
              {credits.map((credit, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-12 gap-4 p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="col-span-5 font-medium truncate">{credit.song}</div>
                  <div className="col-span-4 text-muted-foreground truncate">{credit.artist}</div>
                  <div className="col-span-3 text-muted-foreground truncate text-sm">{credit.album}</div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-sm">
            {credits.length} production credits
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
