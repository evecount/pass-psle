# Site Index & Route Map

This document serves as a master list of all pages within the application, their corresponding routes, and their purpose.

---

## Core Application Pages

| Route             | File Path                          | Purpose                                                                                                  |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/`               | `src/app/page.tsx`                 | The main homepage, featuring the hero section, exam listings, and the AI Co-pilot chat.                   |
| `/dashboard`      | `src/app/dashboard/page.tsx`       | The user's personal dashboard. Displays purchased exams, bookmarked questions, and AI practice tools.      |
| `/login`          | `src/app/login/page.tsx`           | The main authentication page, handling both user login and new user sign-ups.                            |
| `/m8-exam`        | `src/app/m8-exam/page.tsx`         | A dedicated route to launch the M8 mock exam directly in a modal.                                        |
| `/share/...`      | `src/app/share/[...quizInfo]/page.tsx` | A dynamic route for loading publicly shared, user-generated quizzes.                                     |

## Informational & Static Pages

| Route             | File Path                          | Purpose                                                                                                  |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/about`          | `src/app/about/page.tsx`           | Details the story and philosophy behind the platform.                                                    |
| `/careers`        | `src/app/careers/page.tsx`         | Lists open job positions and information about working with the company.                                 |
| `/compare`        | `src/app/compare/page.tsx`         | A marketing page that compares our platform against other study solutions like expensive courses or PDFs. |
| `/contact`        | `src/app/contact/page.tsx`         | Provides contact information, including email and WhatsApp links.                                        |
| `/db`             | `src/app/db/page.tsx`              | A technical page explaining the database architecture and data model.                                    |
| `/demo`           | `src/app/demo/page.tsx`            | The "Curriculum Generator" sandbox, allowing users to generate quiz questions from their own text.       |
| `/features`       | `src/app/features/page.tsx`        | Showcases the key technological features of the platform (Next.js, AI, etc.).                            |
| `/faq`            | `src/app/faq/page.tsx`             | Displays a list of frequently asked questions and answers.                                               |
| `/terms`          | `src/app/terms/page.tsx`           | The official Terms of Use and Privacy Policy document.                                                   |
| `/whitepaper`     | `src/app/whitepaper/page.tsx`      | Outlines the company's Intellectual Property and Data Asset Strategy.                                    |

## Partnership & Business Pages

| Route             | File Path                          | Purpose                                                                                                  |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/affiliateprogram`| `src/app/affiliateprogram/page.tsx`| The main landing page for the affiliate/partner program, featuring the AI Captain and webinar info.        |
| `/fundraising`    | `src/app/fundraising/page.tsx`     | A tailored landing page for NGOs and non-profits, explaining how they can use the platform.              |
| `/partnership`    | `src/app/partnership/page.tsx`     | The primary page for institutional and white-label partnerships. Includes the NTU Research Pilot proposal. |
| `/pitchdeck`      | `src/app/pitchdeck/page.tsx`       | An interactive, carousel-based presentation of the company's investment proposal.                        |
| `/pricing`        | `src/app/pricing/page.tsx`         | Details the pricing tiers for different partnership models (Parent, Tutor, Institution).                 |

## Resource Pages

| Route             | File Path                          | Purpose                                                                                                  |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/auditing`       | `src/app/auditing/page.tsx`        | A study guide explaining the different types of auditing relevant to the RES5 exam.                        |
| `/formulas`       | `src/app/formulas/page.tsx`        | A study guide listing key formulas and definitions for various CMFAS exams.                              |
| `/numerical-list` | `src/app/numerical-list/page.tsx`  | A study guide providing a master list of crucial numerical data points for the RES5 exam.                |

## Misspelled / Erroneous Routes (To be reviewed)

| Route             | File Path                          | Notes                                                                                                    |
| ----------------- | ---------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `/discounts`      | `src/app/discounts/page.tsx`       | This appears to be a typo for `/discounts`. It displays available promotional codes.                     |
