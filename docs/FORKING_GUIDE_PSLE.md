# Project Forking Guide: Pass-PSLE.sg (MENDAKI Partnership)

## 1. Vision & Purpose

This document provides a technical blueprint for forking the existing `pass-exams.com` CMFAS application to create `pass-psle.sg`, a dedicated Primary School Leaving Examination (PSLE) preparation platform in partnership with Yayasan MENDAKI.

The core principle is to leverage the existing, stable, and feature-rich application architecture—including user authentication, payment processing, AI features, and the quiz modal system—and re-purpose it with new branding and educational content. This guide serves as the step-by-step checklist to ensure a smooth transition.

## 2. Core Architecture Overview (What to Keep)

The current application is a robust Next.js project. The following components are critical and should be retained "as-is" during the fork, as they provide the core functionality.

-   **Firebase Backend**:
    -   **Authentication**: The entire Firebase Auth flow (`/firebase/non-blocking-login.tsx`, `/components/LoginForm.tsx`) is battle-tested. It handles email/password and Google sign-in, user record creation in Firestore, and session management. **This should not be modified.**
    -   **Firestore Database**: The database structure, centered around the `/users/{userId}` collection, is sound. User-specific data like purchased exams (`purchasedExams` array) and bookmarks (`bookmarkedQuestions` subcollection) will work perfectly for the new content.
    -   **Server-Side Logic**: All API routes (`/api/...`) for session creation and Stripe webhooks are essential and must be preserved. They are the backbone of our commercial features.

-   **Stripe Integration**:
    -   The checkout flow (`/components/CheckoutButton.tsx`) and webhook handler (`/api/stripe/webhooks/route.ts`) are fully functional. This system correctly assigns purchased products (now PSLE papers) to a user's `purchasedExams` array in Firestore, granting them access. We will only need to create new product and price IDs in the Stripe dashboard and update them in the code.

-   **Frontend Components**:
    -   **Quiz Modal (`QuizModal.tsx`)**: This is the heart of the user experience. Its ability to handle both `full` and `sample` modes is perfect for our "freemium" model.
    -   **Dashboard (`dashboard/page.tsx`)**: The dashboard is the central, stable launchpad for all content. Its logic for checking user access against their purchases is working correctly and should be the sole entry point for paid quizzes.
    -   **AI & Translation Flows (`/ai/flows/`)**: The Genkit flows for the "Deeper Dive" explanations, AI Hints, and especially language translation are a key differentiator. The translation feature is particularly vital for ESL (English as a Second Language) students and their parents, aligning with MENDAKI's mission.

## 3. The Forking & Re-branding Checklist

This is the action plan to execute after the project directory has been duplicated.

### Phase 1: Content & Data Replacement

1.  **Update `quiz-data.ts`**:
    -   This is the most critical step. The entire `quizzes` array in `src/lib/quiz-data.ts` must be deleted.
    -   It will be replaced with new objects representing the PSLE papers from MENDAKI. Based on the provided screenshot, the initial set of quizzes will be:
        -   PSLE Foundation Science 2025
        -   PSLE Foundation Science 2025 (Answer Key)
        -   PSLE Standard Science 2025
        -   PSLE Standard Science 2025 (Answer Key)
        -   PSLE Malay 2025 - Paper 2
        -   PSLE Malay 2025 - Paper 2 (Answer Key)
    -   Each quiz object will need a unique `id` (e.g., `'psle-science-standard-2025'`), `title`, `description`, and the array of `questions` sourced from the MENDAKI papers.

2.  **Update `placeholder-images.json`**:
    -   The image placeholders in `src/lib/placeholder-images.json` must be updated. New images relevant to PSLE subjects (Science, Malay) and the MENDAKI brand should be added. The `id` of each image should correspond to the new quiz `id`s.

3.  **Update `stripe-price-ids.ts`**:
    -   Log in to the Stripe dashboard and create new products for each paid PSLE exam paper.
    -   Generate new Price IDs for both one-time payments and (if applicable) subscriptions.
    -   Replace the existing CMFAS price IDs in `src/lib/stripe-price-ids.ts` with the new PSLE price IDs.

### Phase 2: Security & Configuration

1.  **Generate New Stripe API Keys**:
    -   In your Stripe Dashboard, go to **Developers > API Keys**.
    -   Generate a new **Publishable key** and a new **Secret key**.
    -   Go to **Developers > Webhooks**. Select your webhook endpoint and generate a new **Signing secret**. It's crucial to use new keys for each project fork to maintain security.

2.  **Create and Populate `.env` file**:
    -   The `.env` file is intentionally not saved in the repository for security. You must create a new one.
    -   Create a new file named `.env` in the root of your forked project.
    -   Add your new Stripe keys to this file, like so:
        ```
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
        STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxx
        STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxx
        ```
    - This file securely provides the application with the necessary keys without exposing them in the code.

### Phase 3: Branding & Textual Changes (Search & Replace)

1.  **Global Find/Replace**:
    -   Search for `"CMFAS"` and replace with `"PSLE"`.
    -   Search for `"Pass-Exams"` and replace with `"Pass-PSLE.sg"` or `"MENDAKI Exam Ready"`.
    -   Search for any references to financial exams (`RES5`, `M9`, etc.) and remove or replace them with PSLE-relevant context.

2.  **Update Static Pages**:
    -   `about/page.tsx`: Rewrite the "Our Story" section to reflect the partnership with MENDAKI.
    -   `faq/page.tsx`: Replace all CMFAS-related questions with PSLE-specific questions.
    -   `compare/page.tsx`, `exams/page.tsx`, `exam-info/page.tsx`: These pages are CMFAS-specific and should be either deleted or completely rewritten for the PSLE context.
    -   `Footer.tsx` & `Header.tsx`: Update links and branding. Change the copyright notice to reflect the new entity.

3.  **Update Theme & Styling**:
    -   `globals.css`: Modify the HSL color variables (`--primary`, `--accent`, etc.) to match MENDAKI's brand colors (yellow and dark grey/black).
    -   `layout.tsx`: Update the `<title>` and `<meta>` tags for SEO, focusing on PSLE, MENDAKI, and related keywords.
    -   `public/images`: Replace the favicon and any other brand logos.

### Phase 4: Final Review & Deployment

-   Once all content and branding changes are made, the forked project can be deployed.
-   The existing Firebase project and Stripe account can be reused, but all webhooks and API keys will function correctly as they are part of the core retained architecture.

This structured approach ensures that we build upon a stable foundation while creating a fully independent, branded, and valuable educational tool for the MENDAKI community.
