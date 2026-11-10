
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 pt-16">
      <div className="w-full max-w-4xl pt-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-headline text-primary">
                Terms of Use & Privacy Policy
            </h1>
            <p className="mt-4 text-lg text-foreground/80">
                Last updated: July 30, 2024
            </p>
        </div>

        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="font-headline text-3xl font-bold text-primary tracking-tighter">
                Welcome to our Platform
                </CardTitle>
                <CardDescription className="text-foreground/80 max-w-3xl pt-2">
                Please read these terms and conditions carefully before using Our Service.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="prose prose-lg max-w-none mx-auto text-foreground">
                    <h2>1. Interpretation and Definitions</h2>
                    <p>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                    
                    <h2>2. Acknowledgment</h2>
                    <p>
                        These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions.
                    </p>

                    <h2>3. Subscriptions and Payments</h2>
                    <p>
                        <strong>Billing:</strong> You will be billed in advance on a recurring and periodic basis (such as monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.
                    </p>
                    <p>
                        <strong>Subscription cancellations:</strong> You may cancel Your Subscription renewal either through Your Account settings page or by contacting the Company. You will not receive a refund for the fees you already paid for Your current Subscription period and you will be able to access the Service until the end of Your current Subscription period.
                    </p>

                    <h2>4. Refund Policy</h2>
                    <p>
                        Except when required by law, paid Subscription fees are non-refundable. Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.
                    </p>
                    <p>
                        <strong>Due to the nature of our digital content, we do not offer refunds on any of our monthly or one-time purchase plans.</strong> Upon payment, you receive immediate and full access to our proprietary database of questions, answers, and AI-powered explanations. This constitutes the complete delivery of the service. We encourage you to try our free CMFAS Master Challenge to evaluate the quality of our content before making a purchase.
                    </p>

                    <h2>5. Intellectual Property</h2>
                    <p>
                        The Service and its original content (excluding Content provided by you or other users), features and functionality are and will remain the exclusive property of the Company (Eve Count Pte. Ltd.) and its licensors. The Service is protected by copyright, trademark, and other laws of both the Singapore and foreign countries.
                    </p>
                    <p>
                        You are granted a limited license only for purposes of viewing the material contained on this Website. You are specifically restricted from all of the following: publishing any Website material in any other media; selling, sublicensing and/or otherwise commercializing any Website material; publicly performing and/or showing any Website material; using this Website in any way that is or may be damaging to this Website; using this Website in any way that impacts user access to this Website.
                    </p>
                    <p>
                        <strong>User-Generated Content:</strong> For features that allow You to provide or upload content ("User Content"), such as source text for our machine learning models, you affirm that you have all necessary rights to the User Content and that its use by the Service will not infringe on any third-party rights, including copyright. By providing User Content, you grant the Company a worldwide, non-exclusive, royalty-free license to use, reproduce, and process such content solely for the purpose of providing the Service to you. You are solely responsible for your User Content and the consequences of providing it.
                    </p>

                    <h2>6. Privacy Policy (PDPA)</h2>
                    <p>
                        This section outlines our commitment to protecting your personal data in compliance with Singapore's Personal Data Protection Act (PDPA).
                    </p>
                    <p>
                        <strong>Data Collection:</strong> We collect personal data such as your name and email address during registration and payment processing via our secure third-party payment provider, Stripe. We do not store your credit card details on our servers. We may also collect non-identifiable data related to your use of the service, such as quiz performance, for service improvement purposes.
                    </p>
                    <p>
                        <strong>Purpose of Use:</strong> Your personal data is used for the following purposes: to create and manage your user account, to process payments, to provide you with access to our services, to communicate with you about your account or our services, and to improve the user experience.
                    </p>
                    <p>
                        <strong>Data Protection:</strong> We implement reasonable security measures to protect your personal data from unauthorized access, use, or disclosure. Access to personal data is restricted to authorized personnel only.
                    </p>
                     <p>
                        <strong>Data Retention:</strong> We will retain your personal data only for as long as it is necessary for the purposes it was collected for, or as required by law.
                    </p>
                     <p>
                        <strong>Your Rights:</strong> You have the right to access and correct your personal data held by us. If you wish to do so, please contact us. Please note that a reasonable fee may be charged for an access request.
                    </p>
                    <p>
                        <strong>Data Protection Officer:</strong> If you have any questions or concerns about our personal data protection policies and practices, you may contact our Data Protection Officer at <a href="mailto:gwen@evecount.com" className="text-primary">gwen@evecount.com</a>.
                    </p>

                    <h2>7. Limitation of Liability</h2>
                    <p>
                        Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                    </p>

                     <h2>8. "AS IS" and "AS AVAILABLE" Disclaimer</h2>
                    <p>
                       The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.
                    </p>

                    <h2>9. Governing Law</h2>
                    <p>
                        The laws of Singapore, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                    </p>

                    <h2>10. Changes to These Terms and Conditions</h2>
                    <p>
                        We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                    </p>

                    <h2>11. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms and Conditions, you can contact us by visiting this page on our website: <Link href="/about" className="text-primary underline">About Us</Link>.
                    </p>
                </div>

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
