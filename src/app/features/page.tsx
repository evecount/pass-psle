
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Smartphone, CheckCircle, BrainCircuit, Layers, Cpu } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const features = [
    {
    title: "Adaptive Learning Paths",
    description: "Our platform adapts to you. Based on your performance, the AI generates one of three dynamic quiz types to ensure you're always learning effectively, whether you need a confidence boost or a mastery challenge.",
    benefits: [
      "Model B (Confidence-Builder): Get an easier quiz to solidify fundamentals.",
      "Model A (Standard Practice): Reinforce learning with similar-difficulty questions.",
      "Model C (Mastery Challenge): Push your limits with a harder quiz after passing."
    ],
    icon: Layers,
    image: PlaceHolderImages.find(p => p.id === 'feature_dynamic_quizzes')
  },
  {
    title: "Built with the Latest Technology",
    description: "Our platform is engineered with a modern, high-performance tech stack, including Next.js, Firebase, and Google's Gemini models. This ensures a fast, reliable, and intelligent learning experience.",
    benefits: [
      "Leveraging cutting-edge AI for smarter content generation.",
      "A scalable and secure backend powered by Firebase.",
      "A responsive and snappy user interface built on Next.js."
    ],
    icon: Cpu,
    image: PlaceHolderImages.find(p => p.id === 'power_bundle')
  },
  {
    title: "Mobile-First: Application Learning on the Go",
    description: "Our platform is optimized for your phone, turning your daily commute or any spare moment into a productive study session. True application learning happens when you can practice consistently, wherever you are.",
    benefits: [
      "Maximize unproductive travel time.",
      "Study in short bursts without needing a computer.",
      "Access our entire question bank from any device."
    ],
    icon: Smartphone,
    image: PlaceHolderImages.find(p => p.id === 'quiz_res_5')
  },
  {
    title: "AI Feedback: The Core of Application Learning",
    description: "Our AI-powered feedback system ensures you never reinforce incorrect answers. Get immediate, targeted explanations that break down complex topics, address your knowledge gaps on the spot, and build the deep conceptual understanding needed to pass.",
    benefits: [
        "Prevents memorizing the wrong information.",
        "Get instant, easy-to-understand explanations.",
        "Focus on the 'why' behind answers, not just the 'what'.",
        "Adaptive learning tools focus on your weak spots."
    ],
    icon: BrainCircuit,
    image: PlaceHolderImages.find(p => p.id === 'quiz_m9_exam')
  }
];


export default function FeaturesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-5xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Application Learning in Action
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Our features are designed to turn abstract concepts into tangible skills.
            </p>
        </div>

        <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-0">
                <div className="space-y-0">
                  {features.map((feature, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-2">
                        <div className={`relative min-h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                           {feature.image && (
                            <Image
                                src={feature.image.imageUrl}
                                alt={feature.image.description}
                                data-ai-hint={feature.image.imageHint}
                                fill
                                className="object-cover object-center"
                            />
                           )}
                        </div>
                        <div className={`flex flex-col justify-center py-8 px-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                            <h3 className="flex items-center gap-3 font-headline text-2xl font-bold text-primary tracking-tight">
                                <feature.icon className="h-8 w-8 text-accent"/>
                                {feature.title}
                            </h3>
                            <p className="mt-4 text-foreground/80">
                                {feature.description}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {feature.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  ))}
                </div>

                 <div className="text-center mt-16 p-6">
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
