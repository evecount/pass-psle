"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Zap, ShieldAlert } from "lucide-react";
import type { PSLEQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  const isAnswered = selectedOptionIndex !== undefined;

  return (
    <div className="bg-card text-card-foreground rounded-2xl border shadow-xs p-5 sm:p-7 space-y-5">
      {/* Rapid Header */}
      <CardHeader className="p-0 space-y-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <Badge variant="outline" className="text-[11px] font-mono tracking-tight text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            {question.topic}
          </Badge>
          <span className="font-mono text-xs text-muted-foreground">
            {questionNumber} / {totalQuestions}
          </span>
        </div>
        <CardTitle className="text-base sm:text-lg font-bold leading-snug text-foreground">
          {question.questionText}
        </CardTitle>
      </CardHeader>

      {/* Options - Rapid Selection with Immediate Feedback */}
      <CardContent className="p-0 space-y-2.5">
        {question.options.map((option, idx) => {
          const isSelected = selectedOptionIndex === idx;
          const isCorrect = option.isCorrect;

          let optionStyle = "border-border hover:border-emerald-500/50 hover:bg-muted/30 text-foreground";
          let badgeStyle = "bg-muted text-muted-foreground";

          if (isAnswered) {
            if (isCorrect) {
              optionStyle = "border-emerald-500 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-100 font-semibold";
              badgeStyle = "bg-emerald-600 text-white";
            } else if (isSelected) {
              optionStyle = "border-rose-500 bg-rose-50/90 dark:bg-rose-950/40 text-rose-950 dark:text-rose-100";
              badgeStyle = "bg-rose-600 text-white";
            } else {
              optionStyle = "border-border/50 opacity-40";
            }
          }

          return (
            <div
              key={option.id}
              onClick={() => !isAnswered && onSelectOption(idx)}
              className={cn(
                "rounded-xl border p-3.5 transition-all cursor-pointer flex flex-col space-y-1.5 select-none",
                optionStyle,
                isAnswered ? "cursor-default" : "active:scale-[0.99]"
              )}
            >
              <div className="flex items-start gap-2.5">
                <span className={cn("px-2 py-0.5 rounded text-xs font-bold font-mono shrink-0 mt-0.5", badgeStyle)}>
                  {option.id}
                </span>
                <span className="flex-1 text-sm sm:text-base leading-snug">{option.text}</span>
                {isAnswered && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
              </div>

              {/* Instant High-Yield Cramming Reason (Zero Fluff, Straight to Point) */}
              {isAnswered && (isSelected || isCorrect) && (
                <div
                  className={cn(
                    "text-xs sm:text-sm pl-8 pt-1 leading-relaxed",
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

      {/* Immediate Cramming Key - Instant Pattern Recognition */}
      {isAnswered && (
        <div className="pt-2 border-t space-y-3 animate-in fade-in duration-150">
          {question.examTrap && (
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-3 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold">The Trap: </strong>
                {question.examTrap}
              </div>
            </div>
          )}

          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-3 text-xs space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-emerald-700 dark:text-emerald-300">
              <Zap className="w-3.5 h-3.5" /> High-Yield Execution Heuristic
            </div>
            <pre className="text-xs text-foreground font-mono whitespace-pre-wrap leading-relaxed">
              {question.walkthrough}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
