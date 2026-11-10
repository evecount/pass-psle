import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 py-12 text-center text-xs text-muted-foreground">
      <div className="container mx-auto px-4 max-w-4xl space-y-4">
        {/* Memorial Dedication */}
        <div className="bg-background/80 border rounded-xl p-5 max-w-2xl mx-auto space-y-2 text-left sm:text-center shadow-xs">
          <div className="text-xs font-bold text-foreground uppercase tracking-wider flex items-center justify-center gap-1.5">
            <span>In Loving Memory of Mdm Su Kim Chu</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            First Principal of Haig Girls' School (est. 1951). Dedicated to the pioneering belief that education is about lifting up character, instilling quiet dignity, and protecting the heart of every child.
          </p>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-xs font-medium text-foreground pt-2">
          <span>A free, open civic initiative for Singapore students</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </div>

        <p className="max-w-md mx-auto text-[11px] text-muted-foreground/80 leading-relaxed">
          100% free forever. No registration walls, no paywalls, zero token bleed. Every child is more than an AL score.
        </p>

        <div className="pt-1 text-[10px] text-muted-foreground/50">
          © {new Date().getFullYear()} pass-psle.sg • Civic Education Archive
        </div>
      </div>
    </footer>
  );
}
