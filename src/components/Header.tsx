"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartHandshake, BookOpen, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b shadow-xs">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-base shadow-xs">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-extrabold tracking-tight text-foreground leading-none">
              pass-psle<span className="text-emerald-600">.sg</span>
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">
              Singapore • Free & Open
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#practice-drills" className="hover:text-foreground transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" /> Practice Drills
          </a>
          <a href="#heuristics" className="hover:text-foreground transition-colors">
            Math Heuristics
          </a>
          <a href="#science-keywords" className="hover:text-foreground transition-colors">
            Science Keywords
          </a>
          <a href="#decompress" className="hover:text-foreground transition-colors flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <HeartHandshake className="w-4 h-4" /> Take a Breath
          </a>
        </nav>

        {/* SOS Hotline Button */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/6580000000?text=Hi%20tutor%2C%20I%20am%20feeling%20overwhelmed%20with%20PSLE%20and%20need%20to%20talk."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold gap-1.5 rounded-full px-4 shadow-sm">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>SOS: Talk to Tutor</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
