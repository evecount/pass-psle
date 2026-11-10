
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, RefreshCw, Sparkles, BarChart, BookCheck, Loader2, Lightbulb } from "lucide-react";
import Confetti from 'react-dom-confetti';

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type QuizSummaryProps = {
  score: number;
  total: number;
  quizId: string;
  onRestart: () => void;
  onClose: () => void;
  isSample?: boolean;
  onGenerateHarderQuiz: () => Promise<void>;
  onGenerateEasierQuiz: () => Promise<void>;
  isMasteryAvailable: boolean;
};

export default function QuizSummary({
  score,
  total,
  quizId,
  onRestart,
  onClose,
  isSample = false,
  onGenerateHarderQuiz,
  onGenerateEasierQuiz,
  isMasteryAvailable,
}: QuizSummaryProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGeneratingConfidence, setIsGeneratingConfidence] = useState(false);

  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= 85;
  const needsHelp = percentage < 70;

  const summaryImage = percentage >= 70
    ? PlaceHolderImages.find((img) => img.id === "summary_perfect")
    : PlaceHolderImages.find((img) => img.id === "summary_improve");

  const handleGenerateMasteryClick = async () => {
    setIsGenerating(true);
    await onGenerateHarderQuiz();
    setIsGenerating(false);
  };

  const handleGenerateConfidenceClick = async () => {
    setIsGeneratingConfidence(true);
    await onGenerateEasierQuiz();
    setIsGeneratingConfidence(false);
  };

  return (
    <Card className="w-full mx-auto shadow-2xl overflow-hidden border-0">
        <div className="relative w-full aspect-[2.5/1]">
             {summaryImage && (
                <Image
                    src={summaryImage.imageUrl}
                    alt={summaryImage.description}
                    data-ai-hint={summaryImage.imageHint}
                    fill
                    className="object-cover"
                />
             )}
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <CardTitle className="font-headline text-4xl sm:text-5xl font-extrabold tracking-tight">
                        {isSample ? "Sample Complete!" : (percentage >= 70 ? "Congratulations!" : "Great Effort!")}
                    </CardTitle>
                    <CardDescription className="text-lg sm:text-xl mt-2 text-slate-200">
                        {isSample 
                          ? "You've had a taste of our AI-powered learning tools."
                          : (percentage >= 70 ? "You've passed the mock exam!" : "You're on the right track. Keep going!")}
                    </CardDescription>
                </div>
             </div>
        </div>
      <CardContent className="p-6 text-center">
        <div className="relative flex justify-center">
             <Confetti active={percentage >= 70 && !isSample} config={{
                 angle: 90,
                 spread: 360,
                 startVelocity: 40,
                 elementCount: 100,
                 decay: 0.9,
             }}/>
        </div>
        
        <p className="text-5xl font-bold text-primary mb-2">
          {percentage}%
        </p>
        <p className="text-muted-foreground text-lg mb-6">
          You answered{" "}
          <span className="font-bold text-foreground">{score}</span> out
          of <span className="font-bold text-foreground">{total}</span>{" "}
          questions correctly.
        </p>
        
        {isSample ? (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Button asChild size="lg" variant="default" onClick={onClose}>
                     <Link href="/fees">
                        <BookCheck className="mr-2 h-4 w-4" /> Purchase Full Exam
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" onClick={onClose}>
                     <Link href="/dashboard">
                        <Home className="mr-2 h-4 w-4" /> Go to Dashboard
                    </Link>
                </Button>
            </div>
        ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" onClick={onRestart}>
                    <RefreshCw className="mr-2 h-4 w-4" /> Try Again
                </Button>
                <Button onClick={onClose}>
                    <Home className="mr-2 h-4 w-4" /> Back to Dashboard
                </Button>
            </div>
        )}

        {passed && !isSample && isMasteryAvailable && (
            <div className="mt-8 p-4 border-2 border-dashed border-primary rounded-lg bg-primary/5">
                <h3 className="text-xl font-bold text-primary">Mastery Challenge</h3>
                <p className="text-muted-foreground mt-1 mb-3">You scored 85% or higher! Ready for a tougher test? The AI will generate a new, more difficult quiz based on the questions you got wrong.</p>
                <Button onClick={handleGenerateMasteryClick} disabled={isGenerating}>
                    {isGenerating ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Sparkles className="mr-2 h-4 w-4" />
                    )}
                    Start Mastery Challenge
                </Button>
            </div>
        )}

        {needsHelp && !isSample && (
            <div className="mt-8 p-4 border-2 border-dashed border-amber-500 rounded-lg bg-amber-500/5">
                <h3 className="text-xl font-bold text-amber-600">Need a Refresher?</h3>
                <p className="text-muted-foreground mt-1 mb-3">Let's build your confidence. The AI can create a new, simpler quiz focusing on the exact topics you struggled with.</p>
                <Button onClick={handleGenerateConfidenceClick} disabled={isGeneratingConfidence} variant="outline">
                    {isGeneratingConfidence ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
                    Start Confidence-Builder Session
                </Button>
            </div>
        )}

      </CardContent>
    </Card>
  );
}
