"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw, HeartHandshake, X } from "lucide-react";
import type { PSLEQuiz } from "@/lib/types";
import QuestionCard from "./QuestionCard";

interface QuizModalProps {
  quiz: PSLEQuiz | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizModal({ quiz, isOpen, onClose }: QuizModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  if (!quiz) return null;

  const currentQuestion = quiz.questions[currentIndex];
  const totalQuestions = quiz.questions.length;

  const handleSelectOption = (optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: optionIndex,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setIsCompleted(false);
  };

  const correctCount = Object.entries(userAnswers).filter(
    ([qIdx, optIdx]) => quiz.questions[Number(qIdx)].options[optIdx]?.isCorrect
  ).length;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-full max-w-lg sm:max-w-2xl h-[92vh] sm:h-auto max-h-[92vh] flex flex-col p-0 overflow-hidden rounded-2xl sm:rounded-3xl border shadow-2xl">
        {/* Sticky Mobile Cramming Header */}
        <div className="px-4 py-3 border-b flex items-center justify-between bg-background shrink-0">
          <div className="flex flex-col truncate pr-2">
            <span className="text-xs font-black tracking-tight text-foreground truncate">
              {quiz.title}
            </span>
            <span className="text-[10px] text-emerald-600 font-mono">
              {quiz.subject} • Fast Cram Mode
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-muted text-foreground">
              {currentIndex + 1}/{totalQuestions}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Question Body */}
        <div className="flex-1 overflow-y-auto px-4 py-4 sm:px-6">
          {!isCompleted ? (
            <div className="space-y-4">
              <QuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={totalQuestions}
                selectedOptionIndex={userAnswers[currentIndex]}
                onSelectOption={handleSelectOption}
              />
            </div>
          ) : (
            <div className="text-center py-10 space-y-6">
              <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600">
                <HeartHandshake className="w-10 h-10" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-2xl font-black tracking-tight">Run Complete!</h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-sm mx-auto">
                  You drilled through all {totalQuestions} high-yield questions on the fly.
                </p>
              </div>

              <div className="p-4 bg-muted/50 rounded-2xl inline-block border">
                <div className="text-3xl font-black text-emerald-600">
                  {correctCount} / {totalQuestions}
                </div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold mt-1">
                  Patterns Mastered
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-2 pt-2">
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="h-11 rounded-xl text-xs font-bold gap-2"
                >
                  <RotateCcw className="w-4 h-4" /> Redo Run
                </Button>
                <Button
                  onClick={onClose}
                  className="h-11 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                  Back to Hub
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Sticky Thumb-Zone Navigation Footer (Mobile Optimized) */}
        {!isCompleted && (
          <div className="p-3 border-t bg-background/95 backdrop-blur-md flex items-center justify-between gap-2 shrink-0">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="h-12 flex-1 rounded-xl text-xs font-bold gap-1 active:scale-95"
            >
              <ArrowLeft className="w-4 h-4" /> Prev
            </Button>

            <Button
              onClick={handleNext}
              disabled={userAnswers[currentIndex] === undefined}
              className="h-12 flex-[2] rounded-xl text-xs font-bold gap-1 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md active:scale-95 disabled:opacity-50"
            >
              {currentIndex === totalQuestions - 1 ? "Finish Drill" : "Next Question"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
