import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "pass-psle.sg | Free Singapore PSLE Practice & Exam Survival Kit",
  description: "Free Singapore PSLE practice questions with instant solutions, why-wrong breakdowns, heuristic triage, and emotional decompression for students.",
  keywords: [
    "psle",
    "pass psle",
    "singapore primary school leaving examination",
    "psle math heuristics",
    "psle science keywords",
    "free psle test papers",
    "singapore tutor",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
