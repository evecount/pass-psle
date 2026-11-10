"use client";

import { CheckCircle2, XCircle, Zap, AlertCircle } from "lucide-react";
import type { PSLEQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";

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
  const isAnswered = selectedOptionIndex !== undefined;

  return (
    <div className="flex flex-col space-y-2.5">
      {/* Ultra-Tight Header: Topic & Question Text (No wasted vertical margin) */}
      <div className="space-y-1">
        <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
            {question.topic}
          </span>
          <span className="bg-muted px-1.5 py-0.5 rounded text-[10px]">
            Q{questionNumber} of {totalQuestions}
          </span>
        </div>
        <h2 className="text-sm sm:text-base font-bold leading-snug text-foreground">
          {question.questionText}
        </h2>
      </div>

      {/* Compact Options - Fixed Tap Targets Fitting Fully In Single Screen */}
      <div className="space-y-1.5">
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const isCorrect = option.isCorrect;

          let optionStyle = "border-border/80 bg-background hover:bg-muted/30 text-foreground";
          let badgeStyle = "bg-muted text-foreground";

          if (isAnswered) {
            if (isCorrect) {
              optionStyle = "border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-medium";
              badgeStyle = "bg-emerald-600 text-white";
            } else if (isSelected) {
              optionStyle = "border-rose-500 bg-rose-50/90 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100";
              badgeStyle = "bg-rose-600 text-white";
            } else {
              optionStyle = "border-border/40 opacity-30";
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => !isAnswered && onSelectOption(idx)}
              className={cn(
                "rounded-lg border px-3 py-2 transition-all cursor-pointer flex flex-col select-none",
                optionStyle,
                isAnswered ? "cursor-default" : "active:scale-[0.99]"
              )}
            >
              <div className="flex items-center gap-2">
                <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-bold font-mono shrink-0", badgeStyle)}>
                  {option.id}
                </span>
                <span className="flex-1 text-xs sm:text-sm leading-tight">{option.text}</span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                )}
              </div>

              {/* Instant 1-Line Feedback (Shows only for selected or correct option) */}
              {isAnswered && (isSelected || isCorrect) && (
                <div
                  className={cn(
                    "text-[11px] sm:text-xs pl-6 pt-1 leading-tight font-sans",
                    isCorrect ? "text-emerald-800 dark:text-emerald-300" : "text-rose-800 dark:text-rose-300"
                  )}
                >
                  {option.reason}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Snappy Cram Strip - Fits Above The Fold */}
      {isAnswered && (
        <div className="pt-1.5 space-y-1.5 border-t border-border/60">
          {question.examTrap && (
            <div className="px-2.5 py-1.5 rounded-md bg-amber-50 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-900 text-[11px] text-amber-950 dark:text-amber-200 flex items-center gap-1.5 leading-tight">
              <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span><strong>Trap:</strong> {question.examTrap}</span>
            </div>
          )}

          <div className="px-2.5 py-1.5 rounded-md bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-500/30 text-[11px] text-foreground flex items-center gap-1.5 leading-tight font-mono">
            <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="truncate"><strong>Heuristic:</strong> {question.walkthrough.split('\n')[0]}</span>
          </div>
        </div>
      )}
    </div>
  );
}
