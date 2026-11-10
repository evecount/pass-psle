
'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Bot, Loader2, Sparkles, Wand2, Book, Save, FileCheck2, ArrowLeft } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { generateQuestionsFromText, saveGeneratedQuiz } from '@/lib/ai-actions';
import type { GenerateQuestionsFromTextInput } from '@/ai/flows/generate-questions-from-text-flow';
import { useToast } from '@/hooks/use-toast';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { Quiz, Question as FullQuestionType } from '@/lib/types';
import { Input } from '../ui/input';

type GeneratedQuestion = {
  id: number;
  questionText: string;
  options?: { text: string; isCorrect: boolean }[];
  explanation: string;
};

type CreateQuizModalProps = {
  isOpen: boolean;
  onClose: () => void;
  userId: string;
};

export default function CreateQuizModal({ isOpen, onClose, userId }: CreateQuizModalProps) {
  const [step, setStep] = useState(1); // 1: Form, 2: Generated Quiz
  const [sourceText, setSourceText] = useState('');
  const [quizTitle, setQuizTitle] = useState('My Custom Quiz');
  const [questionType, setQuestionType] = useState<GenerateQuestionsFromTextInput['questionType']>('multipleChoice');
  const [difficultyLevel, setDifficultyLevel] = useState<GenerateQuestionsFromTextInput['difficultyLevel']>('primarySchool');
  const [generatedQuestions, setGeneratedQuestions] = useState<GeneratedQuestion[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsGenerating(true);
    setGeneratedQuestions([]);
    try {
      const result = await generateQuestionsFromText({ sourceText, questionType, difficultyLevel, numQuestions: 5 });
      if (result.error || !result.questions) {
        throw new Error(result.error || "The model failed to generate questions.");
      }
      setGeneratedQuestions(result.questions.map((q, i) => ({...q, id: i})) as GeneratedQuestion[]);
      setStep(2); // Move to the review step
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Generation Failed",
        description: error.message,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveQuiz = async () => {
    if (generatedQuestions.length === 0) {
      toast({ variant: 'destructive', title: 'Error', description: 'No quiz to save.' });
      return;
    }
    setIsSaving(true);
    
    const quizToSave: Quiz = {
      id: `custom-${Date.now()}`,
      title: quizTitle || 'My Custom Quiz',
      description: 'A quiz generated from your provided text.',
      year: new Date().getFullYear().toString(),
      questions: generatedQuestions.map((q, i) => ({
        ...q,
        id: Date.now() + i,
        topic: 'Custom',
        difficulty: 5
      } as FullQuestionType))
    };

    try {
      const result = await saveGeneratedQuiz(userId, quizToSave);
      if (result.error) {
        throw new Error(result.error);
      }
      toast({
        title: 'Quiz Saved!',
        description: 'Your custom quiz has been saved to your dashboard.',
      });
      onClose(); // Close the modal on successful save
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Failed to Save Quiz',
        description: error.message,
      });
    } finally {
      setIsSaving(false);
    }
  };
  
  const resetAndClose = () => {
    setStep(1);
    setSourceText('');
    setGeneratedQuestions([]);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="max-w-2xl">
        {step === 1 && (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <Wand2 className="text-primary" />
                <span>Create a Custom Quiz</span>
              </DialogTitle>
              <DialogDescription>
                Paste your notes or any text, and our AI will generate a quiz for you.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
               <div>
                <Label htmlFor="quizTitle" className="text-lg font-semibold">Quiz Title</Label>
                <Input
                  id="quizTitle"
                  value={quizTitle}
                  onChange={(e) => setQuizTitle(e.target.value)}
                  placeholder="e.g., Chapter 1 Review"
                  className="mt-2"
                  disabled={isGenerating}
                />
              </div>
              <div>
                <Label htmlFor="sourceText" className="text-lg font-semibold">Source Material</Label>
                <Textarea
                  id="sourceText"
                  value={sourceText}
                  onChange={(e) => setSourceText(e.target.value)}
                  placeholder="Paste your lesson notes, a chapter from a textbook, or any source material here..."
                  className="h-32 mt-2"
                  disabled={isGenerating}
                />
              </div>

              <div>
                <Label className="text-lg font-semibold">Question Type</Label>
                <RadioGroup value={questionType} onValueChange={(value) => setQuestionType(value as any)} className="flex gap-4 mt-2" disabled={isGenerating}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multipleChoice" id="mc-modal" />
                    <Label htmlFor="mc-modal">Multiple Choice</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="shortAnswer" id="sa-modal" />
                    <Label htmlFor="sa-modal">Written Comprehension</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-lg font-semibold">Difficulty Level</Label>
                <RadioGroup value={difficultyLevel} onValueChange={(value) => setDifficultyLevel(value as any)} className="flex flex-wrap gap-4 mt-2" disabled={isGenerating}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="primarySchool" id="primary-modal" />
                    <Label htmlFor="primary-modal">Primary School</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="highSchool" id="high-modal" />
                    <Label htmlFor="high-modal">High School</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="professional" id="prof-modal" />
                    <Label htmlFor="prof-modal">Professional</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleGenerate} disabled={isGenerating || !sourceText}>
                {isGenerating ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating...</> : <><Sparkles className="mr-2 h-4 w-4" /> Generate Quiz</>}
              </Button>
            </DialogFooter>
          </>
        )}
        
        {step === 2 && (
           <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <FileCheck2 className="text-primary"/>
                <span>Review Your Generated Quiz</span>
              </DialogTitle>
              <DialogDescription>
                Here is the quiz generated by the AI. Review it and save it to your dashboard.
              </DialogDescription>
            </DialogHeader>
            <div className="max-h-[60vh] overflow-y-auto pr-4 space-y-4 py-4">
              {generatedQuestions.map((q, index) => (
                <div key={q.id} className="p-4 border rounded-lg">
                  <p className="font-semibold">{index + 1}. {q.questionText}</p>
                   {q.options && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {q.options.map((opt, i) => (
                          <li key={i} className={opt.isCorrect ? 'font-bold text-primary' : 'text-muted-foreground'}>
                            {opt.text}
                          </li>
                        ))}
                      </ul>
                    )}
                   <p className="text-xs text-muted-foreground mt-2 pt-2 border-t"><strong>Explanation:</strong> {q.explanation}</p>
                </div>
              ))}
            </div>
            <DialogFooter className="flex-col sm:flex-row gap-2">
               <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft className="mr-2 h-4 w-4"/>Back to Edit</Button>
               <Button onClick={handleSaveQuiz} disabled={isSaving}>
                {isSaving ? <><Loader2 className="mr-2 h-4 w-4 animate-spin"/> Saving...</> : <><Save className="mr-2 h-4 w-4"/>Save to Dashboard</>}
              </Button>
            </DialogFooter>
           </>
        )}
        
      </DialogContent>
    </Dialog>
  );
}

