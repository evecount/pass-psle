# White Label Configuration Checklist

This document serves as the master checklist for configuring a new white-label instance of the application after forking the main repository.

---

## Client & Branding

- [ ] **Client Name:** ________________
- [ ] **Application Title:** ________________ (e.g., "Pass-PSLE.sg", "MENDAKI Exam Ready")
- [ ] **Primary Color Hex:** `#_________`
- [ ] **Accent Color Hex:** `#_________`
- [ ] **Logo Asset Updated?** (Y/N) - *Replace `public/images/favicon_whiteBKG.png`*
- [ ] **SEO Metadata Updated?** (Y/N) - *Update `title` and `description` in `src/app/layout.tsx`*

## Content & Data

- [ ] **Update Quiz Data:** (Y/N) - *Replace content in `src/lib/quiz-data.ts`*
- [ ] **Update Placeholder Images:** (Y/N) - *Update `src/lib/placeholder-images.json` to match new content*
- [ ] **Update Numerical List (if applicable):** (Y/N) - *Update `src/lib/numerical-list-data.ts`*

## Monetization (Stripe)

- [ ] **New Stripe Product IDs Created?** (Y/N)
- [ ] **New Stripe Price IDs Created?** (Y/N)
- [ ] **Update Price IDs in Code:** (Y/N) - *Replace IDs in `src/lib/stripe-price-ids.ts`*
- [ ] **Stripe Webhook Endpoint Updated?** (Y/N)

## Backend & Deployment

- [ ] **New Firebase Project ID:** ________________
- [ ] **Update Firebase Config:** (Y/N) - *Update `src/firebase/config.ts`*
- [ ] **DNS/Custom Domain Mapped?** (Y/N)
- [ ] **Environment Variables Set?** (Y/N) - *e.g., Stripe keys in `.env`*

## Static Content (Text & Pages)

- [ ] **Global Find/Replace Executed?** (Y/N) - *e.g., "CMFAS" -> "PSLE"*
- [ ] **Update `about/page.tsx`** (Y/N)
- [ ] **Update `faq/page.tsx`** (Y/N)
- [ ] **Update `Footer.tsx` & `Header.tsx`** (Y/N)
- [ ] **Review/Delete Obsolete Pages:** (Y/N) - *e.g., `compare`, `exams`, `exam-info`*
- [ ] **Update `terms/page.tsx`** (Y/N)
- [ ] **Update `discounts/page.tsx`** (Y/N)

---
