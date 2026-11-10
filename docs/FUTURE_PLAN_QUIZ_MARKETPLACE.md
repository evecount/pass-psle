# Future Vision: The "Airbnb for Quizzes" Marketplace

This document outlines a long-term strategic vision for evolving the platform into a two-sided marketplace where educators can sell their custom-generated quizzes.

## 1. Core Concept: A Marketplace for Learning

The core idea is to empower educators, tutors, and even high-achieving students to become "Creators" who can monetize their expertise. Our platform provides the tools to create high-quality, interactive learning content, and this new model would provide the infrastructure to sell it.

-   **Standard Users (The "Learners"):** Can continue to create and share quizzes for free, as they do now.
-   **Creators (The "Sellers"):** A new, premium user role for those who wish to sell their quizzes.

## 2. The Structural Plan

### Step 1: Evolving the User Model
We will introduce a new user role, likely managed by a field in their Firestore user document (e.g., `isCreator: true`).
-   **Standard User (Default):** Can create, save, and share quizzes for free.
-   **Creator User (Subscribed):** A Standard User who upgrades via a new "Creator Subscription." This unlocks the monetization features.

### Step 2: Database & Monetization Fields
The quiz documents in Firestore will need to be enhanced to support sales:
-   When a Creator lists a quiz for sale, we will add new fields to that quiz document:
    -   `isPaid: true`
    -   `price: 20.00` (A price in dollars set by the Creator).
    -   `stripePriceId: 'price_xyz...'` (A unique Stripe Price ID for this user's specific product).

### Step 3: The Payment & Subscription Flow

This is the most significant architectural change, requiring two distinct flows:

**A. The Creator Flow (Seller):**
1.  **Creator Subscription:** Introduce a new subscription plan on our `/fees` page specifically for creators. This fee grants them the right to list quizzes for sale.
2.  **Monetization UI:** Once subscribed, a Creator will see new UI elements in their dashboard, such as a "Set Price" button on their custom quizzes.
3.  **Stripe Connect Integration:** To facilitate payouts, we must integrate **Stripe Connect**. This is a crucial step that allows our platform to act as a marketplace, routing payments from buyers directly to creators' bank accounts while programmatically taking a small platform fee from each transaction.

**B. The Learner Flow (Buyer):**
1.  **Payment Prompt:** When a learner accesses a shared quiz link that is marked as `isPaid`, they will be shown a payment page instead of the quiz lobby.
2.  **Secure Checkout:** This page will use Stripe to process the payment for the price set by the creator.
3.  **Access Granted:** Upon successful payment, the learner's user record in Firestore will be updated to grant them permanent access to that specific purchased quiz (e.g., by adding the `quizId` to a `purchasedCustomQuizzes` array).

## 3. Business Model

This model opens two new revenue streams for the platform:
1.  **Creator Subscription Fees:** A recurring fee for educators to access the tools and right to sell on our marketplace.
2.  **Platform Transaction Fees:** A small, automated percentage taken from each quiz sale, rewarding us only when our creators succeed.

This plan transforms our platform from a simple content delivery service into a dynamic, two-sided marketplace, creating a powerful incentive for the best educators to bring their high-quality content into our ecosystem.
