export interface PSLEOption {
  id: "A" | "B" | "C" | "D";
  text: string;
  isCorrect: boolean;
  reason: string; // The "Why Right" or "Why Wrong" breakdown
}

export interface PSLEQuestion {
  id: number | string;
  topic: string;
  subject: "Science" | "Mathematics" | "English";
  difficulty: 1 | 2 | 3 | 4 | 5;
  questionText: string;
  diagramSvg?: string;
  options: PSLEOption[];
  walkthrough: string; // Step-by-step heuristic or concept chain
  examTrap?: string; // Common trap that trips up P6 students
}

export interface PSLEQuiz {
  id: string;
  subject: "Science" | "Mathematics" | "English";
  year: string;
  title: string;
  description: string;
  paperType: "Paper 1 (MCQ)" | "Paper 2 (Heuristics)" | "Oral & Composition";
  questions: PSLEQuestion[];
}
