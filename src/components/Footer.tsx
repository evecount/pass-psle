import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-12 text-center text-xs text-muted-foreground">
      <div className="container mx-auto px-4 max-w-4xl space-y-4">
        <div className="flex items-center justify-center gap-1.5 text-sm font-semibold text-foreground">
          <span>Built for Singapore Students with</span>
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
        </div>
        <p className="max-w-md mx-auto text-muted-foreground/80 leading-relaxed">
          100% free, deterministic, and open. No AI hallucinations, no token limits, and no registration walls. You are more than your AL score.
        </p>
        <div className="pt-2 text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} pass-psle.sg • Independent community education initiative.
        </div>
      </div>
    </footer>
  );
}
