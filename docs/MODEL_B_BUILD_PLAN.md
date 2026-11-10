
# Build Plan: Model B - The "Confidence-Builder" Path

This document outlines the technical requirements and implementation strategy for "Model B," an AI-powered learning path designed to help learners who are struggling with core concepts.

## 1. Core Concept & User Experience

-   **Goal:** To provide a supportive, targeted intervention for users who score below a certain threshold on a mock exam.
-   **Philosophy:** Instead of just showing a failing grade, we turn the incorrect answers into a positive, focused learning opportunity. This builds confidence and addresses knowledge gaps directly.
-   **User Flow:**
    1.  A user completes a quiz and scores below a "confidence threshold" (e.g., 70%).
    2.  On the `QuizSummary` screen, in addition to the regular options, they are presented with a new option: **"Start Confidence-Builder Session."**
    3.  When clicked, the AI takes all the questions the user answered incorrectly.
    4.  It then generates a *new, slightly easier* practice quiz that focuses on the **same core concepts** but in a more direct and foundational way.
    5.  The user is immediately launched into this new, personalized quiz to reinforce their understanding.

## 2. Technical Implementation Plan

### Step 1: Create the AI Flow (`generateEasierPracticeQuiz-flow.ts`)

-   **Objective:** Create a new Genkit flow that can generate easier variations of questions.

-   **File:** `src/ai/flows/generate-easier-practice-quiz-flow.ts`

-   **Input Schema:** `GenerateEasierPracticeQuizInputSchema` (similar to the existing practice quiz flows, accepting an array of `Question` objects).

-   **Output Schema:** `GenerateEasierPracticeQuizOutputSchema` (returning an array of new `Question` objects).

-   **Prompt Engineering:** The core of this model lies in the prompt. The prompt for this new flow will instruct the AI as follows:
    > "You are an expert educator and curriculum designer specializing in scaffolding complex topics for beginners. Your task is to take a list of questions a student answered incorrectly and create a new, slightly *easier* practice quiz to help them build confidence.
    >
    > **Instructions for Reducing Difficulty:**
    > 1.  **Isolate the Core Concept:** For each source question, identify the single, most fundamental principle being tested.
    > 2.  **Use Direct Questions:** Avoid complex, multi-step scenarios. Phrase the new question as a direct test of the core concept.
    > 3.  **Simplify Language:** Use clearer, more straightforward language. Avoid jargon where possible or explain it simply.
    > 4.  **Create Obvious Distractors:** The incorrect options should be clearly wrong to a student who has a basic grasp of the core concept. This helps reinforce the correct answer.
    > 5.  Ensure each new question has 4 options, with one correct answer and a clear explanation."

### Step 2: Create the Server Action

-   **Objective:** Create a new server action to bridge the UI and the new AI flow.

-   **File:** `src/lib/ai-actions.ts`

-   **Function:** Create a new exported `async function generateEasierPracticeQuiz(...)`.
    -   This function will take the array of `incorrectQuestions` as input.
    -   It will call the `generateEasierPracticeQuizFlow` from the new AI flow file.
    -   It will format the AI's output into a `Quiz` object and return it, similar to the existing `generatePracticeQuiz` function.

### Step 3: Update the User Interface (`QuizSummary.tsx`)

-   **Objective:** Add the conditional button to the quiz summary screen.

-   **File:** `src/components/quiz/QuizSummary.tsx`

-   **Logic:**
    -   In the `QuizSummary` component, add a new state variable, `isGeneratingConfidenceQuiz`, to track the loading state.
    -   Modify the return statement to include a conditional block:
        ```jsx
        {percentage < 70 && !isSample && (
          <div className="mt-8 p-4 border-2 border-dashed border-amber-500 rounded-lg bg-amber-500/5">
            <h3 className="text-xl font-bold text-amber-600">Need a Refresher?</h3>
            <p className="text-muted-foreground mt-1 mb-3">Let's build your confidence. The AI can create a new, simpler quiz focusing on the exact topics you struggled with.</p>
            <Button onClick={handleGenerateConfidenceQuiz} disabled={isGeneratingConfidenceQuiz} variant="outline">
              {isGeneratingConfidenceQuiz ? <Loader2 /> : <Lightbulb />}
              Start Confidence-Builder Session
            </Button>
          </div>
        )}
        ```
    -   Implement the `handleGenerateConfidenceQuiz` function. This function will:
        1.  Set `isGeneratingConfidenceQuiz` to `true`.
        2.  Call the new `generateEasierPracticeQuiz` server action, passing in the user's incorrect questions.
        3.  On success, it will call the `onRestart` or a new dedicated function to re-initialize the `QuizModal` with the newly generated `practiceQuiz` data.
        4.  On failure, it will show a toast notification with the error.
        5.  Finally, set `isGeneratingConfidenceQuiz` to `false`.

This plan provides a clear, step-by-step path to implementing Model B, creating a valuable and supportive feature for learners who need it most.
