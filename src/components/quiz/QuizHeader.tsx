
"use client";

import Link from "next/link";
import { Languages, Home, ShoppingCart } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AVAILABLE_LANGUAGES } from "@/lib/types";
import { Button } from "@/components/ui/button";


type QuizHeaderProps = {
  title: string;
  currentProgress: number;
  totalQuestions: number;
  score: number;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  isTranslating: boolean;
};

export default function QuizHeader({
  title,
  currentProgress,
  totalQuestions,
  score,
  selectedLanguage,
  onLanguageChange,
  isTranslating,
}: QuizHeaderProps) {
  const progressPercentage = (currentProgress / totalQuestions) * 100;

  return (
    <header className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="font-headline text-3xl font-bold text-primary">
          {title}
        </h1>
        <div className="flex items-center gap-2 sm:gap-4">
          <Badge variant="secondary" className="text-lg py-1 px-3 sm:px-4">
            Score: {score} / {totalQuestions}
          </Badge>
          <div className="flex items-center gap-1 sm:gap-2">
            <Languages className="h-5 w-5 text-muted-foreground" />
            <Select
              value={selectedLanguage}
              onValueChange={onLanguageChange}
              disabled={isTranslating}
            >
              <SelectTrigger className="w-[120px] sm:w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {AVAILABLE_LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <Progress value={progressPercentage} className="w-full h-3" />
      <p className="text-sm text-muted-foreground mt-2">
        Question {currentProgress + 1} of {totalQuestions}
      </p>
    </header>
  );
}

    
