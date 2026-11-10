# Fork Idea: The AI Hiring Co-pilot

## 1. Core Concept

To transform the hiring process by creating an "AI Co-pilot" that generates hyper-relevant, targeted interview questions by analyzing a candidate's resume against a specific job description. This moves beyond generic interview scripts to create deeply personalized and effective interviews.

## 2. The Problem It Solves

-   **Generic Interviews:** Hiring managers, especially those who are not technical experts for the role they're hiring for, often fall back on generic or easily "gamed" interview questions.
-   **Time-Consuming Prep:** Manually reviewing a resume and cross-referencing it with a job description to create insightful questions is a time-intensive task.
-   **Inconsistent Evaluation:** Different interviewers ask different questions, leading to an inconsistent and biased evaluation process.

## 3. User Flow

The user interface would be simple and direct:

1.  **Resume Upload:** The user (a hiring manager or recruiter) uploads the candidate's resume (e.g., in PDF or DOCX format).
2.  **Job Description Input:** The user pastes the text of the job description into a separate text area.
3.  **Generate Questions:** The user clicks "Generate Interview Questions."

## 4. The AI-Generated Output

The AI processes both documents and generates a structured set of questions, categorized for clarity:

-   **Experience Deep Dive Questions:**
    -   *AI Action:* Parses the "Experience" section of the resume.
    -   *Example Question:* "On your resume, you mentioned you 'led the migration of a monolithic application to a microservices architecture.' Can you walk me through the biggest technical challenge you faced during that project and how you solved it?"

-   **Skills Validation Questions:**
    -   *AI Action:* Parses the "Skills" section (e.g., Python, SQL, AWS).
    -   *Example Question:* "You've listed Python and SQL as key skills. Describe a situation where you had to write a complex SQL query within a Python script to perform data analysis."

-   **Role-Fit & Behavioral Questions:**
    -   *AI Action:* Cross-references the resume with the requirements in the job description.
    -   *Example (Job Desc requires "stakeholder management"):* "Your role at Company X seems focused on individual contribution. Can you give an example of a time you had to manage the expectations of multiple non-technical stakeholders on a project?"

-   **Candidate Questions for the Company:**
    -   *AI Action:* Based on the candidate's profile, suggest insightful questions they could ask the interviewer.
    -   *Example:* "Given my background in high-growth startups, could you tell me more about the engineering team's current approach to managing technical debt while scaling?"

## 5. Value Proposition

-   **For Hiring Managers:** Saves hours of prep time and empowers them to conduct deeper, more effective interviews, even if they aren't subject matter experts.
-   **For Companies:** Standardizes the quality of interviews, reduces bias, and helps identify the best-fit candidates more accurately.
-   **For Candidates:** Leads to a more engaging and respectful interview process that focuses on their actual experience.

## 6. Technical Parallel

This is a direct application of our existing engine.
-   **Source Text:** The `sourceText` becomes a combination of the parsed resume and the job description.
-   **AI Prompt:** The prompt is engineered to perform the specific categorization and question generation tasks outlined above, outputting structured JSON.
-   **Output:** The front-end renders the structured JSON into a clean, categorized list of questions for the interviewer.
