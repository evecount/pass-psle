'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Mic, UserPlus, Mail, CircleDollarSign, HelpCircle, BookOpen, Send, Lightbulb, TrendingUp, User, Volume2 } from "lucide-react";
import { Input } from '@/components/ui/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { askOnboardingCaptain, generateAudioForText } from '@/lib/ai-actions';


type Message = {
    role: 'user' | 'assistant';
    content: string;
    suggestions?: string[];
};

type ChatFormData = {
    prompt: string;
};

export default function AffiliateProgramPage() {

    const [messages, setMessages] = React.useState<Message[]>([
        { role: 'assistant', content: "Welcome! I'm your AI Onboarding Captain. I can help you with our affiliate program. Ask me about commissions, our partner toolkit, or who this program is for.", suggestions: [ "How does the affiliate commission work?", "What's in the Partner Toolkit?", "Who is this program for?" ] }
    ]);

    const { register, handleSubmit, reset } = useForm<ChatFormData>();
    const { toast } = useToast();
    const mailtoHref = "mailto:gwen@evecount.com?subject=Affiliate%20Program%20Webinar%20Registration&body=Hello,%0D%0A%0D%0APlease%20register%20me%20for%20the%20next%20affiliate%20program%20information%20session.%0D%0A%0D%0AThank%20you,%0D%0A[Your%20Name]";
    const scrollAreaRef = React.useRef<HTMLDivElement>(null);
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const [playingAudioId, setPlayingAudioId] = React.useState<string | null>(null);
    const [isAudioLoading, setIsAudioLoading] = React.useState<string | null>(null);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    React.useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    const handleSendMessage = async (question: string) => {
        const userMessage: Message = { role: 'user', content: question };

        setMessages(prev => {
            const lastMessage = prev[prev.length - 1];
            if (lastMessage.role === 'assistant' && lastMessage.suggestions) {
                const newMessages = [...prev.slice(0, -1), { ...lastMessage, suggestions: undefined }];
                return [...newMessages, userMessage];
            }
            return [...prev, userMessage];
        });

        setIsSubmitting(true);

        try {
            const result = await askOnboardingCaptain({ question, persona: 'affiliate-program' });
            const assistantResponse: Message = {
                role: 'assistant',
                content: result.answer || "I'm not sure how to answer that yet, but our founder can help! Please join the webinar.",
                suggestions: result.suggestions,
            };
            setMessages(prev => [...prev, assistantResponse]);
        } catch (e) {
            const errorResponse: Message = {
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting right now. Please try again later."
            };
            setMessages(prev => [...prev, errorResponse]);
        } finally {
            setIsSubmitting(false);
        }
    };
    
    const handlePlayAudio = async (text: string, messageId: string) => {
        if (playingAudioId === messageId && audioRef.current && !audioRef.current.paused) {
            audioRef.current.pause();
            setPlayingAudioId(null);
            return;
        }
        setIsAudioLoading(messageId);
        try {
            const result = await generateAudioForText(text);
            if (result.audioDataUri && audioRef.current) {
                audioRef.current.src = result.audioDataUri;
                audioRef.current.play();
                setPlayingAudioId(messageId);
            } else {
                throw new Error(result.error || "No audio data returned.");
            }
        } catch (error: any) {
            toast({ variant: "destructive", title: "Audio Generation Failed", description: error.message });
        } finally {
            setIsAudioLoading(null);
        }
    };


    const onFormSubmit: SubmitHandler<ChatFormData> = async (data) => {
        if (!data.prompt.trim()) return;
        handleSendMessage(data.prompt);
        reset();
    };

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24 bg-muted/20">
      <audio ref={audioRef} onEnded={() => setPlayingAudioId(null)} />
      <div className="w-full max-w-4xl pt-16 space-y-12">
        <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Become a Pass-Exams Partner
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                A program for passionate educators who believe in better learning tools.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader className="bg-primary/5">
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <Bot /> AI Onboarding Captain
                </CardTitle>
                 <CardDescription className="text-foreground/80 max-w-3xl pt-2 text-base">
                    Welcome! Ask me anything about our affiliate program, our technology, or how we can work together.
                </CardDescription>
            </CardHeader>
            <CardContent className="pt-8">
                <div className="border rounded-lg bg-background shadow-inner flex flex-col h-[600px]">
                    <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
                        <div className="space-y-6">
                            {messages.map((message, index) => (
                                <div key={index}>
                                    <div className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : 'items-center'}`}>
                                        {message.role === 'assistant' && <Bot className="h-6 w-6 text-primary flex-shrink-0" />}
                                        <div className={`p-3 rounded-lg max-w-md ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                            <p className="text-sm">{message.content}</p>
                                        </div>
                                         {message.role === 'assistant' && (
                                            <Button variant="ghost" size="icon" onClick={() => handlePlayAudio(message.content, index.toString())} disabled={!!isAudioLoading}>
                                                {isAudioLoading === index.toString() ? <Loader2 className="h-5 w-5 animate-spin" /> : <Volume2 className="h-5 w-5" />}
                                            </Button>
                                        )}
                                        {message.role === 'user' && <User className="h-6 w-6 text-muted-foreground flex-shrink-0" />}
                                    </div>
                                    {message.role === 'assistant' && message.suggestions && (
                                        <div className="pl-10 mt-3 flex flex-wrap gap-2">
                                            {message.suggestions.map((q, i) => (
                                                <Button
                                                    key={i}
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleSendMessage(q)}
                                                    disabled={isSubmitting}
                                                    className="text-xs h-auto py-1.5 px-3"
                                                >
                                                    {q}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                             {isSubmitting && (
                                <div className="flex items-start gap-3">
                                    <Bot className="h-6 w-6 text-primary flex-shrink-0 animate-pulse" />
                                    <div className="p-3 rounded-lg max-w-sm bg-muted">
                                       <Loader2 className="h-4 w-4 animate-spin"/>
                                    </div>
                                </div>
                            )}
                        </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                        <form onSubmit={handleSubmit(onFormSubmit)} className="flex items-center gap-2">
                            <Input 
                                id="prompt"
                                placeholder="Or type your own question..."
                                {...register("prompt")}
                                disabled={isSubmitting}
                                autoComplete="off"
                            />
                            <Button type="submit" disabled={isSubmitting} size="icon">
                                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                                <span className="sr-only">Send</span>
                            </Button>
                        </form>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <Mic /> Step 2: Join the Info Session Webinar
                </CardTitle>
                 <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    Now that you've spoken with our AI Captain, join our live information session to learn everything you need to know to become a successful Pass-Exams affiliate.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p>
                        This webinar is your next step. We'll walk you through our mission, our unique technology, how our commission structure works, and provide you with marketing assets.
                    </p>
                </div>
                
                <div className="my-8">
                    <h3 className="text-2xl font-bold text-center mb-6">Webinar Agenda</h3>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger className="text-lg font-semibold">
                                <div className="flex items-center gap-3"><Lightbulb className="h-5 w-5 text-primary" /><span>Module 1: Our Pedagogical Approach & Market Disruption</span></div>
                            </AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert text-base text-muted-foreground pl-10 pt-2">
                                <p>Discover the core intellectual property that drives our platform. We'll introduce "Application Learning"—our proprietary pedagogical framework designed to build deep, resilient knowledge. We will discuss how this methodology addresses key inefficiencies in the corporate training and certification market, creating a significant competitive advantage for our partners.</p>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className="text-lg font-semibold">
                               <div className="flex items-center gap-3"><CircleDollarSign className="h-5 w-5 text-primary" /><span>Module 2: The Business Model & Scalable Revenue</span></div>
                            </AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert text-base text-muted-foreground pl-10 pt-2">
                               <p>This is a deep dive into the affiliate partnership as a scalable business venture. We will cover:</p>
                                <ul>
                                    <li><strong>The Commission Structure:</strong> A transparent overview of our generous, tiered commission model designed to reward high-volume partners and drive long-term, passive revenue.</li>
                                    <li><strong>Your Partner Toolkit:</strong> A walkthrough of your personalized dashboard, unique tracking links, and real-time analytics for performance monitoring.</li>
                                    <li><strong>Payout & Financials:</strong> A clear schedule for automated, on-time payments, ensuring financial predictability for your business.</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger className="text-lg font-semibold">
                               <div className="flex items-center gap-3"><UserPlus className="h-5 w-5 text-primary" /><span>Module 3: Partner Profiles & Go-to-Market Strategy</span></div>
                            </AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert text-base text-muted-foreground pl-10 pt-2">
                                <p>Learn how our most successful partners leverage their unique market positions. We will analyze key partner archetypes and provide tailored go-to-market playbooks for:</p>
                                <ul>
                                    <li>Professional Trainers & Tutors</li>
                                    <li>Managers at Financial Advisory Firms</li>
                                    <li>Financial Content Creators & Bloggers</li>
                                    <li>Industry Veterans & Retirees</li>
                                </ul>
                                <p>We'll equip you with a ready-to-use arsenal of marketing assets and strategic guidance to accelerate your launch.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-4">
                            <AccordionTrigger className="text-lg font-semibold">
                               <div className="flex items-center gap-3"><HelpCircle className="h-5 w-5 text-primary" /><span>Module 4: Live Q&A with the Founder</span></div>
                            </AccordionTrigger>
                            <AccordionContent className="prose dark:prose-invert text-base text-muted-foreground pl-10 pt-2">
                               <p>This is your opportunity for direct consultation. Get answers from our founder, Gwen, on our technology roadmap, business strategy, or how we can co-create bespoke solutions. This session is dedicated to fostering a transparent, high-level partnership and exploring opportunities for mutual growth and scale.</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </CardContent>
            <CardFooter className="flex-col items-center gap-4 pt-6">
                 <div className="p-6 border-2 border-dashed rounded-lg w-full max-w-md text-center">
                    <h3 className="font-bold text-lg mb-2">Ready to Join?</h3>
                    <p className="text-muted-foreground mb-4">
                       Register now to receive an invitation to our next live webinar.
                    </p>
                    <Button asChild size="lg">
                      <a href={mailtoHref}>
                        <UserPlus className="mr-2 h-4 w-4" />
                        Register for Webinar
                      </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
         <div className="text-center mt-8">
            <Button asChild variant="ghost">
                <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Home
                </Link>
            </Button>
        </div>
      </div>
    </main>
  );
}
