"use client";

import { useState } from "react";
import {
  HeartHandshake,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Compass,
  MessageCircle,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { psleQuizzes } from "@/lib/data/content/psle";
import type { PSLEQuiz } from "@/lib/types";
import QuizModal from "@/components/quiz/QuizModal";

export default function HomePage() {
  const [activeQuiz, setActiveQuiz] = useState<PSLEQuiz | null>(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/70 via-background to-background py-16 sm:py-24 border-b">
        <div className="container mx-auto px-4 max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            100% Free • Zero Token Bleed • Pre-Baked Solutions
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-tight">
            Clear the PSLE haze. <br className="hidden sm:inline" />
            <span className="text-emerald-600 dark:text-emerald-400">Without the mental breakdown.</span>
          </h1>

          <p className="max-w-2xl mx-auto text-muted-foreground text-sm sm:text-lg leading-relaxed">
            High-yield cramming heuristics, exact Science keyword scoring chains, and instant answers explaining <strong>why right</strong> and <strong>why wrong</strong> for every single option.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-2 px-6 rounded-full shadow-md"
              onClick={() => setActiveQuiz(psleQuizzes[0])}
            >
              <BookOpen className="w-4 h-4" /> Start Free Science Drill
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-bold gap-2 px-6 rounded-full"
              onClick={() => setActiveQuiz(psleQuizzes[1])}
            >
              Math Heuristics Drill <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* The Anchor / "Talk Off The Edge" Lifeline Banner */}
      <section id="decompress" className="py-12 bg-amber-50/60 dark:bg-amber-950/20 border-b border-amber-200/60 dark:border-amber-900/40">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-background/95 p-6 sm:p-8 rounded-2xl border border-amber-300/80 dark:border-amber-800 shadow-xs">
            <div className="p-3.5 rounded-2xl bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300 shrink-0">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <div className="space-y-1.5 flex-1">
              <h2 className="text-xl sm:text-2xl font-black text-foreground flex items-center gap-2">
                First: Take a deep breath.
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                You are 12 years old. Your dignity, intelligence, and entire human future are <strong>not</strong> defined by an AL aggregate score. If your mind is racing or you feel overwhelmed, read this protocol:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-background p-5 rounded-xl border space-y-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-4 h-4" /> The 2-Minute Skip Rule
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If you stare at a problem sum for 2 minutes without writing a model or equation, circle the question number, take a breath, and <strong>skip it immediately</strong>. Don't let Question 12 rob you of marks on Questions 13 to 18.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border space-y-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> The "Blank Mind" Protocol
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If panic sets in during the paper: put your pencil down. Inhale 4 seconds, hold 4 seconds, exhale 4 seconds. Look up at the ceiling clock. The exam room is safe. Pick up your pencil and start with what you know.
              </p>
            </div>

            <div className="bg-background p-5 rounded-xl border space-y-2">
              <div className="text-emerald-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                <MessageCircle className="w-4 h-4" /> Talk to a Tutor Directly
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need someone in Singapore to talk you through a concept or off the ledge without judging or scolding?
              </p>
              <a
                href="https://wa.me/6580000000?text=Hi%20tutor%2C%20I%20am%20feeling%20overwhelmed%20with%20PSLE%20and%20need%20help."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-emerald-600 hover:underline pt-1"
              >
                Reach out on WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Drills Section */}
      <section id="practice-drills" className="py-16 sm:py-24 container mx-auto px-4 max-w-5xl space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Interactive Practice Drills
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            No signup required. Click any drill to see instant breakdowns for every right and wrong choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {psleQuizzes.map((quiz) => (
            <Card key={quiz.id} className="border shadow-xs hover:border-emerald-500/50 transition-all flex flex-col justify-between">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-semibold uppercase tracking-wider text-emerald-600">
                    {quiz.subject}
                  </span>
                  <span className="font-mono">{quiz.paperType}</span>
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {quiz.title}
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm leading-relaxed">
                  {quiz.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xs text-muted-foreground font-mono">
                    {quiz.questions.length} High-Yield Questions
                  </span>
                  <Button
                    size="sm"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs gap-1.5 rounded-full"
                    onClick={() => setActiveQuiz(quiz)}
                  >
                    Start Drill <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Heuristics & Keywords Cramming Sheets */}
      <section id="heuristics" className="py-16 bg-muted/40 border-t">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              The Last-Minute Heuristics Cheat Sheet
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Master these four patterns to unlock 80% of Paper 2 problem sums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background p-6 rounded-2xl border space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Lightbulb className="w-4 h-4" /> 1. Constant Difference (Ages / Equal Transfer)
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>When to spot it:</strong> Questions involving ages (e.g. "Mother was 4x older than son") or when the same amount is added/subtracted from two parties.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono text-foreground">
                Difference = (Units_Before - Units_After) = CONSTANT
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Lightbulb className="w-4 h-4" /> 2. Remainder Concept (Branching Tree)
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>When to spot it:</strong> Look for the magic keyword: "gave 2/5 away, and 1/3 of the <em>remainder</em> to sister".
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono text-foreground">
                Total (1) ➔ Spent (2/5) ➔ Remainder (3/5) ➔ Branch further
              </div>
            </div>

            <div id="science-keywords" className="bg-background p-6 rounded-2xl border space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> 3. Science Heat Transfer Chain
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>MOE Keyword Requirement:</strong> Always identify the heat source and direction of flow.
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono text-foreground">
                [Object] gained heat from [Heat source] ➔ expanded ➔ [Observation]
              </div>
            </div>

            <div className="bg-background p-6 rounded-2xl border space-y-3">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <ShieldCheck className="w-4 h-4" /> 4. Science CER (Claim-Evidence-Reasoning)
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <strong>For Open-Ended Questions:</strong> Never write bare conclusions. State Claim (what happened), Evidence (numbers from table), and Scientific Reasoning (principle).
              </p>
              <div className="bg-muted/60 p-3 rounded-lg text-xs font-mono text-foreground">
                Claim + Comparative Data ("more than") + Science Concept
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Quiz Modal */}
      {activeQuiz && (
        <QuizModal
          quiz={activeQuiz}
          isOpen={!!activeQuiz}
          onClose={() => setActiveQuiz(null)}
        />
      )}
    </div>
  );
}
