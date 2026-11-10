
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle } from "lucide-react";

const faqItems = [
    {
        question: "Is this a legitimate, registered business?",
        answer: "Yes, absolutely. This platform is a property of <strong>Eve Count Pte. Ltd.</strong>, a company officially registered in Singapore with the Accounting and Corporate Regulatory Authority (ACRA). Our Unique Entity Number (UEN) is <strong>53438315K</strong>. We are a Stripe-verified partner and are fully compliant with local business regulations."
    },
    {
        question: "How do you handle personal data? Are you PDPA compliant?",
        answer: "We take data privacy very seriously. We are fully compliant with Singapore's Personal Data Protection Act (PDPA). We only collect essential data (like your email for login) and all payments are processed securely through Stripe—we never store your credit card information on our servers. For full details, please read our <a href='/terms' class='text-primary underline'>Terms of Use & Privacy Policy</a>."
    },
    {
        question: "What is 'Application Learning' and how is it different from traditional study methods?",
        answer: "Application Learning is a philosophy focused on building deep, flexible understanding rather than just memorizing facts. Traditional methods often rely on static materials (like PDFs) that encourage rote learning. Our platform uses AI-powered tools, dynamic questions, and a mobile-first design to force you to *apply* concepts in different ways, ensuring you master the material for the long term."
    },
    {
        question: "What makes your AI/ML platform safe and reliable for educational content?",
        answer: "Our engine is built on a critical constraint: <strong>it cannot 'think' without resources.</strong> Unlike generative AIs that can 'hallucinate' facts, our model can only process and transform the curated source material you provide. If we provide it a textbook chapter, it generates questions based *only* on that chapter. This makes it a predictable, safe, and powerful tool for education, as it cannot invent information outside the scope of the provided curriculum."
    },
    {
        question: "How are your mock exam questions created?",
        answer: "Our question bank is developed through independent and rigorous research of official CMFAS syllabus materials and key financial concepts. These mock exams are original works created for demonstration and are not affiliated with, nor endorsed by, any official examination body. They are designed to be a challenging and effective study aid that mirrors the format and difficulty of professional exams."
    },
    {
        question: "I'm a parent. Can I use this platform to help my own child study?",
        answer: "Absolutely. This platform was born from a desire to empower self-directed learners of all ages. While our current exams are demos, the underlying technology is designed to turn any text into a learning module. You can experience this firsthand on our <a href='/demo' class='text-primary underline'>AI Sandbox</a> page, where you can paste your child's study notes and instantly generate a practice worksheet. For a more permanent solution, our white-label partnerships allow you to create a private, dedicated learning app for your family or study group. Learn more on our <a href='/partnership' class='text-primary underline'>For Educators</a> page."
    },
    {
        question: "What is the business model for white-label partnerships?",
        answer: "Our white-label solution allows educators and institutions to deploy a private, custom-branded version of our platform using their own curriculum. We handle all the technology, from content ingestion to hosting. The business model is typically a B2B arrangement (e.g., an annual license fee) rather than per-user, in-app purchases. This provides a simple, scalable way for schools to offer their students a powerful, modern learning tool. You can learn more on our <a href='/partnership' class='text-primary underline'>For Educators</a> page."
    }
];


export default function FaqPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Have questions? We've got answers.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-3xl font-bold text-primary tracking-tighter">
                  <HelpCircle /> General Questions
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    Find answers to common questions about our platform, security, and features.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Accordion type="single" collapsible className="w-full">
                    {faqItems.sort((a, b) => a.question.localeCompare(b.question)).map((item, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                            <AccordionContent className="prose prose-lg max-w-none text-foreground/80 pt-2">
                               <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                 <div className="text-center mt-12">
                     <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
