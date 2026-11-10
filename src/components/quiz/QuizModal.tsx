"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, RotateCcw, HeartHandshake } from "lucide-react";
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
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 rounded-2xl">
        <DialogHeader className="border-b pb-3 text-left">
          <DialogTitle className="text-base sm:text-lg font-bold flex items-center justify-between">
            <span>{quiz.title}</span>
            <span className="text-xs text-muted-foreground font-normal">
              {quiz.subject} • {quiz.paperType}
            </span>
          </DialogTitle>
        </DialogHeader>

        {!isCompleted ? (
          <div className="space-y-6 pt-2">
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={totalQuestions}
              selectedOptionIndex={userAnswers[currentIndex]}
              onSelectOption={handleSelectOption}
            />

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="gap-1 text-xs"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Previous
              </Button>

              <span className="text-xs text-muted-foreground font-mono">
                {currentIndex + 1} / {totalQuestions}
              </span>

              <Button
                size="sm"
                onClick={handleNext}
                disabled={userAnswers[currentIndex] === undefined}
                className="gap-1 text-xs bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                {currentIndex === totalQuestions - 1 ? "Finish Drill" : "Next Question"}
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="inline-flex p-4 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 mb-2">
              <HeartHandshake className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold tracking-tight">Drill Complete!</h3>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                You worked through all {totalQuestions} questions. Every mistake caught here is a mark saved in the real exam hall.
              </p>
            </div>

            <div className="p-4 bg-muted/50 rounded-xl inline-block">
              <div className="text-3xl font-black text-primary">
                {correctCount} / {totalQuestions}
              </div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1">
                Concepts Mastered
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-xl p-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200 max-w-md mx-auto text-left">
              <strong>Remember:</strong> Review the questions where you got tripped up. The explanation shows exactly why the wrong choices were placed there by examiners.
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <Button variant="outline" size="sm" onClick={handleReset} className="gap-2 text-xs">
                <RotateCcw className="w-3.5 h-3.5" /> Retry Drill
              </Button>
              <Button size="sm" onClick={onClose} className="text-xs bg-primary text-primary-foreground">
                Back to Home
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
