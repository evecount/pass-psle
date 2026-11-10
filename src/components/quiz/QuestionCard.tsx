"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, BookOpen, Sparkles } from "lucide-react";
import type { PSLEQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type QuestionCardProps = {
  question: PSLEQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedOptionIndex?: number;
  onSelectOption: (optionIndex: number) => void;
};

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedOptionIndex,
  onSelectOption,
}: QuestionCardProps) {
  const [showWalkthrough, setShowWalkthrough] = useState(false);
  const isAnswered = selectedOptionIndex !== undefined;

  return (
    <div className="bg-card text-card-foreground rounded-2xl border shadow-sm p-6 sm:p-8 space-y-6">
      <CardHeader className="p-0 space-y-3">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <Badge variant="outline" className="text-xs uppercase tracking-wider font-semibold">
            {question.subject} • {question.topic}
          </Badge>
          <span className="font-mono">
            Question {questionNumber} of {totalQuestions}
          </span>
        </div>
        <CardTitle className="text-lg sm:text-xl font-bold leading-relaxed text-foreground">
          {question.questionText}
        </CardTitle>
      </CardHeader>

      {/* Options */}
      <CardContent className="p-0 space-y-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const isCorrect = option.isCorrect;

          let optionStyle = "border-border hover:border-primary/50 hover:bg-muted/40 text-foreground";
          let badgeStyle = "bg-muted text-muted-foreground";

          if (isAnswered) {
            if (isCorrect) {
              optionStyle = "border-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-950 dark:text-emerald-100 font-medium";
              badgeStyle = "bg-emerald-600 text-white";
            } else if (isSelected) {
              optionStyle = "border-rose-500 bg-rose-50/80 dark:bg-rose-950/30 text-rose-950 dark:text-rose-100";
              badgeStyle = "bg-rose-600 text-white";
            } else {
              optionStyle = "border-border/60 opacity-60";
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => !isAnswered && onSelectOption(idx)}
              className={cn(
                "rounded-xl border p-4 transition-all duration-150 cursor-pointer flex flex-col space-y-2 select-none",
                optionStyle,
                isAnswered ? "cursor-default" : "active:scale-[0.99]"
              )}
            >
              <div className="flex items-start gap-3">
                <span className={cn("px-2.5 py-0.5 rounded-md text-xs font-bold font-mono shrink-0 mt-0.5", badgeStyle)}>
                  {option.id}
                </span>
                <span className="flex-1 text-sm sm:text-base leading-snug">{option.text}</span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
              </div>

              {/* Instant Option Explanation (Zero AI / Zero Token Bleed) */}
              {isAnswered && (isSelected || isCorrect) && (
                <div
                  className={cn(
                    "text-xs sm:text-sm pl-9 pt-1 leading-relaxed rounded-md",
                    isCorrect ? "text-emerald-800 dark:text-emerald-200" : "text-rose-800 dark:text-rose-200"
                  )}
                >
                  {option.reason}
                </div>
              )}
            </div>
          );
        })}
      </CardContent>

      {/* Deep Concept Walkthrough and Exam Trap */}
      {isAnswered && (
        <div className="pt-2 border-t space-y-4 animate-in fade-in duration-200">
          {question.examTrap && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold block mb-0.5">PSLE Marker's Trap:</strong>
                {question.examTrap}
              </div>
            </div>
          )}

          <div className="bg-muted/50 rounded-xl p-4 space-y-2">
            <button
              onClick={() => setShowWalkthrough(!showWalkthrough)}
              className="flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-primary"
            >
              <span className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Step-by-Step Heuristic Solution
              </span>
              <span>{showWalkthrough ? "Hide" : "Show"}</span>
            </button>
            {showWalkthrough && (
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 border-t font-sans">
                {question.walkthrough}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
