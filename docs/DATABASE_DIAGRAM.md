# Database Diagram (DBML)

This document contains the Database Markup Language (DBML) code that visually represents our application's data architecture. It is designed to be used with tools like [dbdiagram.io](https://dbdiagram.io) to generate a clear entity-relationship diagram (ERD).

This diagram has been updated to reflect our multi-tenant architecture, the "Content Seed Bank," and the new "Cognitive Biometrics" tables for generating a machine learning dataset.

## DBML Code (Enterprise & Content Architecture)

```dbml
// --- EVE COUNT: ENTERPRISE COGNITIVE ARCHITECTURE ---

// 1. TENANCY & ACCESS CONTROL
Table organizations {
  id varchar [pk]
  name varchar
  slug varchar [note: 'For white-label URLs: pass-exams.com/org-slug']
  api_key_hash varchar [note: 'For secure QKD seed extraction']
  created_at timestamp
}

Table users {
  id varchar [pk, note: 'Firebase Auth UID']
  org_id varchar [ref: > organizations.id]
  email varchar [unique]
  role varchar [note: 'student, tutor, institution_admin']
  last_login timestamp
}

// 2. CORE CONTENT SEED BANK (NEW)
// This is the "plottable location" for all official curriculum.
Table quizzes {
  id varchar [pk, note: 'e.g., res-5, m9a-exam']
  title varchar
  description text
  year varchar
  is_public boolean [default: true]
}

Table questions {
  id varchar [pk, note: 'Unique ID for this specific question variant']
  quiz_id varchar [ref: > quizzes.id]
  concept_id varchar [note: 'Links all difficulty variants, e.g., "res5-q15"']
  difficulty varchar [note: 'easy, standard, or hard']
  questionText jsonb
  options jsonb
  explanation jsonb
  topic varchar
}

// 3. THE ALPHA LOOP (MASTERY DATA)
Table bookmarks {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  question_id varchar [ref: > questions.id]
  weighting_modifier integer [default: 5, note: 'The Alpha Loop weight multiplier']
  created_at timestamp
}

// 4. COGNITIVE BIOMETRICS (THE RAW MACHINE LEARNING DATA)
Table cognitive_interactions {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  question_id varchar [ref: > questions.id]
  latency_ms integer [note: 'Variable 1: Decision Latency']
  pathing_data jsonb [note: 'Variable 2: Heuristic Pathing']
  dwell_time_ms integer [note: 'Variable 3: Rationale Dwell-Time']
  semantic_variance float [note: 'Variable 4: Semantic KPC Variance']
  correction_count integer [note: 'Variable 5: Self-Correction Pulse']
  session_timestamp timestamp [note: 'Used for Variable 7: Stamina Decay']
  is_correct boolean [note: 'The ground truth label for training']
}

// 5. IDENTITY & SECURITY (THE ANALYZED OUTPUT)
Table cognitive_profiles {
  user_id varchar [pk, ref: - users.id]
  intellectual_topography jsonb [note: 'Variable 6: Topic Gravity map']
  stamina_decay_constant float [note: 'The calculated physiological decay slope']
  cognitive_fingerprint_hash varchar [note: 'Unique non-spoofable PII']
  qkd_entropy_seed varchar [note: 'The generated cryptographic seed']
  last_updated timestamp
}

Table progress_logs {
  id varchar [pk]
  user_id varchar [ref: > users.id]
  exam_id varchar [ref: > quizzes.id]
  score float
  is_mastery_achieved boolean
  completed_at timestamp
}

Table question_stats {
  id varchar [pk, note: 'Same as questions.id']
  correct_answers integer
  total_answers integer
}


// --- Relationships ---
Ref: organizations.id < users.org_id
Ref: users.id < bookmarks.user_id
Ref: users.id < cognitive_interactions.user_id
Ref: users.id < progress_logs.user_id
Ref: questions.id < bookmarks.question_id
Ref: questions.id < cognitive_interactions.question_id
Ref: questions.id - question_stats.id
Ref: quizzes.id < questions.quiz_id
Ref: quizzes.id < progress_logs.exam_id
```

## How This Explains Our Model

1.  **Multi-Tenancy & Data Isolation:** The `organizations` table is the root for all organizational content. By linking `users` and `exams` to a specific `org_id`, we guarantee that one institution cannot access another's proprietary curriculum. Our `firestore.rules` enforce this at the database level.
2.  **Role-Based Access Control (RBAC):** The `role` field in the `users` table is central to our security model. A user with the role of 'tutor' in `organization_A` can create exams within that organization, but cannot even read exams from `organization_B`.
3.  **The Content Seed Bank:** The new `quizzes` and `questions` tables represent the "plottable location" for our core curriculum. By moving questions out of static code files and into a dynamic database, we can easily query, manage, and analyze them.
4.  **The Raw ML Data:** The new `cognitive_interactions` table is the heart of the machine learning dataset. It logs every user-question interaction, capturing the raw data for the 7 Cognitive Variables. The `is_correct` field provides the ground truth label needed to train a model.
5.  **The Analyzed Output:** The `cognitive_profiles` table stores the *result* of analyzing the raw interaction data, generating the unique Cognitive Fingerprint and QKD seed for each user. This separates raw data from processed, high-value insights.