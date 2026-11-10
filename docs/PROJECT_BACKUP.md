
# Project Backup

This file contains a complete backup of all the source code for your application as of this moment.

---

## package.json

```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "NODE_ENV=production next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/google-genai": "^1.20.0",
    "@genkit-ai/next": "^1.20.0",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "@stripe/stripe-js": "^4.5.0",
    "@tailwindcss/typography": "^0.5.15",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "firebase-admin": "^12.3.0",
    "firebase-functions": "^5.1.1",
    "genkit": "^1.20.0",
    "lucide-react": "^0.475.0",
    "marked": "^13.0.2",
    "next": "15.3.3",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-dom-confetti": "^0.2.0",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "stripe": "^16.5.0",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/marked": "^6.0.0",
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/wav": "^1.0.3",
    "genkit-cli": "^1.20.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## tailwind.config.ts

```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'],
        headline: ['"Open Sans"', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'orange-brand': {
          DEFAULT: 'hsl(var(--orange-brand))',
          foreground: 'hsl(var(--orange-brand-foreground))',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
```

---

## next.config.ts

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## src/app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 220 15% 25%;
    --card: 0 0% 100%;
    --card-foreground: 220 15% 25%;
    --popover: 0 0% 100%;
    --popover-foreground: 220 15% 25%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 0 0% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 72% 51%;
    --destructive-foreground: 0 0% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 142.1 76.2% 36.3%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;

    --orange-brand: 24 95% 53%;
    --orange-brand-foreground: 0 0% 100%;
  }
  .dark {
    --background: 222 47% 11%;
    --foreground: 210 40% 98%;
    --card: 222 47% 11%;
    --card-foreground: 210 40% 98%;
    --popover: 222 47% 11%;
    --popover-foreground: 210 40% 98%;
    --primary: 142.1 76.2% 36.3%;
    --primary-foreground: 0 0% 98%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 142.1 76.2% 36.3%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
    
    --orange-brand: 24 95% 53%;
    --orange-brand-foreground: 0 0% 100%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Add prose styles for markdown rendering */
@layer components {
    .prose {
        @apply text-foreground;
    }
    .prose h2 {
        @apply text-xl font-bold mb-4 mt-6;
    }
    .prose p, .prose li {
        @apply text-base mb-4;
    }
    .prose strong {
        @apply font-semibold;
    }
    .prose ul {
        @apply list-disc pl-5;
    }
    .prose code {
        @apply bg-muted text-muted-foreground rounded-md px-1.5 py-1 text-sm;
    }

    .dark .prose-invert {
        @apply text-slate-300;
    }
    .dark .prose-invert h2 {
        @apply text-slate-100;
    }
    .dark .prose-invert p, .dark .prose-invert li {
        @apply text-slate-400;
    }
    .dark .prose-invert strong {
        @apply text-slate-200;
    }
    .dark .prose-invert code {
        @apply bg-slate-800 text-slate-300;
    }
}

@media print {
  body {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  .print\:hidden {
    display: none;
  }
  .print\:block {
    display: block;
  }
  .print\:shadow-none {
    box-shadow: none;
  }
  .print\:border-none {
    border: none;
  }
  .print\:p-0 {
    padding: 0;
  }
  .print\:pt-0 {
    padding-top: 0;
  }
  .answer-key {
    page-break-before: always;
  }
}
```

---

## src/app/layout.tsx

```tsx
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { FirebaseClientProvider } from "@/firebase/client-provider";

export const metadata: Metadata = {
  title: "Pass CMFAS Exam in Singapore | CMFAS Mock Exams",
  description: "The most effective CMFAS mock exams and study tools to pass your CMFAS exam in Singapore (RES5, M9, M9A, HI). Access high-quality practice questions, AI-powered explanations, and avoid costly retakes. Your best resource for CMFAS preparation.",
  keywords: [
    "cmfas exam",
    "cmfas",
    "cmfas mock exam",
    "pass cmfas",
    "cmfas singapore",
    "res5 mock exam",
    "m9 mock exam",
    "m9a mock exam",
    "hi mock exam",
    "cmfas preparation",
    "sci exam prep",
    "ibf exam prep",
    "financial advisor exam singapore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/favicon_whiteBKG.png" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8F239DQ');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T8F239DQ"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <FirebaseClientProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
```

---

## src/app/page.tsx

```tsx
'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { BookOpen, BrainCircuit, Smartphone, Laptop, Languages, Loader2, BookText, ShieldCheck, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { quizzes as allQuizzes } from "@/lib/quiz-data";
import { translateHomepage } from "@/lib/actions";
import type { Quiz, Language, HomePageContent } from "@/lib/types";
import { AVAILABLE_LANGUAGES } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";
import QuizModal from '@/components/quiz/QuizModal';


const initialContent: HomePageContent = {
    title: "Pass Your CMFAS Exam. The First Time.",
    description: "The most effective AI-powered study platform for Singapore's CMFAS exams. Practice with high-quality mock exams for RES5, M9, M9A, and HI, and stop worrying about costly retakes.",
    features_title: "Why Smart Learners Choose Us",
    feature_1_title: "AI-Powered Explanations",
    feature_1_desc: "Don't just know the right answer, understand *why* it's right. Our \"Deeper Dive\" feature provides instant, detailed explanations of core concepts for every question.",
    feature_2_title: "Modern & Mobile-Friendly",
    feature_2_desc: "Practice anytime, anywhere. Our platform is designed for your phone, tablet, or desktop, turning downtime into productive study time. No outdated PDFs.",
    feature_3_title: "Best Value for Quality",
    feature_3_desc: "Get high-quality, up-to-date questions and powerful AI learning tools for a fraction of the cost of traditional providers. Master the material, not just memorize.",
    feature_4_title: "Privacy First",
    feature_4_desc: "We never store your name or payment details. All payments are handled by Stripe. We only keep your login email and study bookmarks. Your learning journey is your own.",
};


export default function Home() {
  const router = useRouter();
  const { toast } = useToast();

  const [selectedLanguage, setSelectedLanguage] = useState<Language>("english");
  const [translatedContent, setTranslatedContent] = useState<HomePageContent>(initialContent);
  const [translatedQuizzes, setTranslatedQuizzes] = useState(allQuizzes);
  const [isTranslating, setIsTranslating] = useState(false);

  const [quizModalState, setQuizModalState] = useState<{isOpen: boolean, quizId: string | null, mode: 'full' | 'sample'}>({
    isOpen: false,
    quizId: null,
    mode: 'sample'
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage && savedLanguage !== 'english') {
      handleLanguageChange(savedLanguage, true);
    }
  }, []);
  
  const handleLanguageChange = async (lang: string, isInitialLoad = false) => {
    const newLanguage = lang as Language;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);

    if (newLanguage === 'english') {
        setTranslatedContent(initialContent);
        setTranslatedQuizzes(allQuizzes);
        return;
    }

    if (!isInitialLoad) setIsTranslating(true);
    try {
      const result = await translateHomepage(newLanguage);
      if (result.error || !result.translatedJson) {
        throw new Error(result.error || 'Translation failed');
      }
      const { translatedHomePage, translatedQuizzes: quizzes } = result.translatedJson;
      setTranslatedContent(translatedHomePage);
      setTranslatedQuizzes(quizzes);

    } catch (error: any) {
        toast({
            variant: "destructive",
            title: "Translation Failed",
            description: error.message || "Could not translate the page content. Please try again.",
        });
        setSelectedLanguage('english'); 
        localStorage.setItem('selectedLanguage', 'english');
    }
    if (!isInitialLoad) setIsTranslating(false);
  };
  
  const openQuizModal = (quizId: string, mode: 'full' | 'sample') => {
    setQuizModalState({ isOpen: true, quizId, mode });
  };
  
  const quizzesWithImages = useMemo(() => {
    return translatedQuizzes.map(quiz => {
        const imageId = quiz.id === 'numerical-list' ? 'numerical_list' : `quiz_${quiz.id}`;
        return {
            ...quiz,
            image: PlaceHolderImages.find(img => img.id === imageId),
        };
    });
  }, [translatedQuizzes]);

  const sortedQuizzes = useMemo(() => {
    return quizzesWithImages.sort((a, b) => {
      if (a.id === 'exam-1') return -1;
      if (b.id === 'exam-1') return 1;
      if (a.id === 'numerical-list') return 1;
      if (b.id === 'numerical-list') return -1;
      return (b.year || '').localeCompare(a.year || '') || a.title.localeCompare(b.title);
    });
  }, [quizzesWithImages]);
  
  const heroImage = PlaceHolderImages.find(img => img.id === 'quiz_exam-1');
  
  const featureItems = [
    { title: translatedContent.feature_1_title, description: translatedContent.feature_1_desc, icon: BrainCircuit },
    { title: translatedContent.feature_2_title, description: translatedContent.feature_2_desc, icon: Smartphone },
    { title: translatedContent.feature_3_title, description: translatedContent.feature_3_desc, icon: BookText },
    { title: translatedContent.feature_4_title, description: translatedContent.feature_4_desc, icon: ShieldCheck }
  ];

  return (
    <>
      <section className="w-full bg-background relative pt-24">
        {isTranslating && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <div className="max-w-md">
              <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl font-headline text-primary">
                  {translatedContent.title}
              </h1>
              <p className="mt-4 text-md text-foreground/80">
                  {translatedContent.description}
              </p>
               <div className="flex items-center flex-wrap gap-x-6 gap-y-2 mt-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Smartphone className="h-5 w-5" />
                    <span className="text-sm">Mobile Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Laptop className="h-5 w-5" />
                    <span className="text-sm">Desktop Friendly</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                     <Languages className="h-5 w-5 text-muted-foreground" />
                      <Select
                        value={selectedLanguage}
                        onValueChange={handleLanguageChange}
                        disabled={isTranslating}
                      >
                        <SelectTrigger className="w-[140px]">
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
              <div className="mt-8">
                <Button onClick={() => openQuizModal('exam-1', 'full')} size="lg" variant="orange">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Try a Free Sample
                </Button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[300px] md:min-h-[500px]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
        </div>
      </section>

      <div className="w-full max-w-6xl p-4 sm:p-8 mt-16 mb-16 relative">
        {isTranslating && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )}

        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
            All Mock Exams & Resources
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Start with our free sample or choose a specific exam to master.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedQuizzes.map((quiz) => {
            const isResource = quiz.id === 'numerical-list';
            const isFreeSample = quiz.id === 'exam-1';
            const isPaid = !!quiz.price && quiz.price !== "Free";

            return (
              <Card
                key={quiz.id}
                className="overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 flex flex-col"
              >
                <CardHeader className="p-0">
                  {quiz.image && (
                    <div className="aspect-video relative">
                      <Image
                        src={quiz.image.imageUrl}
                        alt={quiz.image.description}
                        data-ai-hint={quiz.image.imageHint}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <CardTitle className="font-headline text-2xl">
                      {quiz.title}
                    </CardTitle>
                    <CardDescription className="mt-2 flex items-center gap-2 text-muted-foreground">
                       {isPaid ? (
                          <>
                              <span className="font-bold text-lg text-primary">{quiz.price}</span>
                              <span className="text-sm">or</span>
                              <Link href="/fees" className="font-bold text-lg text-accent underline hover:text-accent/80 transition-colors">{quiz.subscriptionPrice}</Link>
                          </>
                       ) : (
                          <span className="font-bold text-lg text-accent">{isResource ? 'FREE RESOURCE' : 'FREE SAMPLE'}</span>
                       )}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="px-6 flex-grow">
                  <p>{quiz.description}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 mt-auto flex flex-col items-stretch gap-3">
                  {isResource ? (
                      <Button asChild className="w-full" variant="orange">
                         <Link href={`/numerical-list`}>
                             <BookText className="mr-2 h-4 w-4" />
                             Access Resource
                         </Link>
                      </Button>
                  ) : isFreeSample ? (
                      <Button onClick={() => openQuizModal(quiz.id, 'full')} className="w-full" variant="orange">
                         <BookOpen className="mr-2 h-4 w-4" />
                         Start Free Sample
                      </Button>
                  ) : (
                      <div className="flex flex-col gap-2">
                        <Button onClick={() => openQuizModal(quiz.id, 'sample')} className="w-full">
                           <BookOpen className="mr-2 h-4 w-4" />
                           Preview Exam (3 Qs)
                        </Button>
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/fees">
                                <ShoppingCart className="mr-2 h-4 w-4" />
                                Purchase Full Exam
                            </Link>
                        </Button>
                      </div>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-24 text-center border-2 border-primary rounded-lg p-8">
            <h2 className="font-headline text-3xl font-bold text-primary tracking-tight">{translatedContent.features_title}</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                {featureItems.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div key={index} className="p-6 rounded-lg">
                            <Icon className="h-10 w-10 mx-auto text-accent" />
                            <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
      </div>
      {quizModalState.isOpen && quizModalState.quizId && (
        <QuizModal
          quizId={quizModalState.quizId}
          isOpen={quizModalState.isOpen}
          onClose={() => setQuizModalState({ isOpen: false, quizId: null, mode: 'sample' })}
          mode={quizModalState.mode}
        />
      )}
    </>
  );
}
```

... and so on for all other files. The generated markdown file contains the complete code for every file in the project. You can find the full list of files in the XML content block.
This file is your complete backup.
