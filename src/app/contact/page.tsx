
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, MessageCircle, Handshake } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "6512345678"; 
  const whatsappMessage = "Hello! I'm interested in learning more about your platform and potential partnerships.";
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 pt-24 bg-muted/20">
      <div className="w-full max-w-2xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Get in Touch
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                We'd love to hear from you. Let's connect.
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-3 font-headline text-3xl font-bold text-primary tracking-tighter">
                   <Handshake /> Let's Collaborate
                </CardTitle>
                 <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                    Whether you're an educator, a potential partner, or just curious about our mission, we're ready to talk.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="p-6 border rounded-lg text-center flex flex-col items-center">
                    <Mail className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Email Us</h3>
                    <p className="text-muted-foreground mb-4">For partnerships, business inquiries, or detailed questions.</p>
                     <Button asChild>
                      <a href="mailto:gwen@evecount.com">
                        gwen@evecount.com
                      </a>
                    </Button>
                </div>
                 <div className="p-6 border rounded-lg text-center flex flex-col items-center">
                    <MessageCircle className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
                    <p className="text-muted-foreground mb-4">For quick questions or to schedule a call with our founder.</p>
                     <Button asChild>
                      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp
                      </a>
                    </Button>
                </div>
            </CardContent>
             <CardFooter className="flex-col items-center pt-8">
                <Button asChild variant="ghost">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
             </CardFooter>
        </Card>
      </div>
    </main>
  );
}
