
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lightbulb, Smartphone, Languages, HeartHandshake, Mail, BookCheck, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-24">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Our Story
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Built from a passion for learning, for your success.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl font-bold text-primary tracking-tighter">
                A Learning Tool for the Curious Mind
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl mx-auto pt-2">
                Pass-Exams was born from a lifelong passion for self-directed learning and a deep frustration with traditional, one-size-fits-all methods.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <p>
                        Our founder was never a great student in the traditional sense, often bored by rigid curriculums. The real learning happened outside the classroom, driven by a passion for understanding how things worked, from financial markets to coding. This led to a simple, slightly rebellious philosophy that became the core of our platform:
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                        "I realized that if I got straight A's on my exams, my teachers couldn't punish me for not doing my homework. Passing wasn't just about getting a grade; it was about earning the freedom to learn what I was truly passionate about."
                    </blockquote>
                    <p>
                        This platform is the embodiment of that idea. It's a tool designed to help you master the material efficiently and effectively, so you can pass your exams with confidence and get back to what truly drives you. It’s built on a foundation of empathy for the self-taught journey and a deep respect for your time and ambition.
                    </p>
                    
                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                        <div className="p-6 rounded-lg">
                            <Smartphone className="h-12 w-12 mx-auto text-primary" />
                            <h3 className="mt-4 text-xl font-bold">Study On The Go</h3>
                            <p className="mt-2 text-muted-foreground text-base">We realized that turning commute time into productive study time with a mobile-first platform was a game-changer.</p>
                        </div>
                        <div className="p-6 rounded-lg">
                            <Languages className="h-12 w-12 mx-auto text-primary" />
                            <h3 className="mt-4 text-xl font-bold">Translations for All</h3>
                            <p className="mt-2 text-muted-foreground text-base">We understood that for a huge community of aspiring professionals from ESL backgrounds, providing instant translations could be the key to unlocking true understanding.</p>
                        </div>
                        <div className="p-6 rounded-lg">
                            <Lightbulb className="h-12 w-12 mx-auto text-primary" />
                            <h3 className="mt-4 text-xl font-bold">Understand, Don't Memorize</h3>
                            <p className="mt-2 text-muted-foreground text-base">We built AI tools to explain *why* an answer is right or wrong, embedding true understanding.</p>
                        </div>
                        <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                            <ShieldCheck className="h-12 w-12 mx-auto text-primary" />
                            <h3 className="mt-4 text-xl font-bold text-primary">Your Privacy is Our Policy</h3>
                            <p className="mt-2 text-muted-foreground text-base">
                                <strong>We do not store your name or payment details.</strong> All payments are handled by Stripe. We only keep the data essential for you to sign in and save your study bookmarks. Your learning journey is your own.
                            </p>
                        </div>
                    </div>

                    <p>
                        This platform is the tool our founder wishes she had in school. It's built on a foundation of empathy for the self-taught journey and a deep respect for the power of effective, modern learning tools.
                    </p>
                </div>
                
                <div className="mt-16 border-t pt-12">
                  <div className="text-center">
                    <HeartHandshake className="h-12 w-12 mx-auto text-primary" />
                    <h2 className="mt-4 font-headline text-3xl font-bold text-primary tracking-tighter">Join Our Journey</h2>
                    <p className="mt-4 text-lg max-w-3xl mx-auto text-foreground/80">
                        We're a tiny startup with big ambitions. This platform is a passion project born from a deep-rooted belief in education and technology. If you have a knack for business development, marketing, or simply believe in our mission, we'd love to hear from you.
                    </p>
                    <Button asChild className="mt-6">
                      <a href="mailto:gwen@evecount.com?subject=Collaboration%20Inquiry%20from%20Pass-Exams.com&body=Hello!%20I%20saw%20your%20work%20on%20Pass-Exams.com%20and%20I'm%20interested%20in%20discussing%20a%20potential%20partnership.">
                        <Mail className="mr-2 h-4 w-4" />
                        Get in Touch
                      </a>
                    </Button>
                  </div>
                </div>

                 <div className="text-center mt-16 border-t pt-12 flex justify-center gap-4">
                     <Button asChild>
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/auditing">
                            <BookCheck className="mr-2 h-4 w-4" />
                            View Auditing Guide
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
