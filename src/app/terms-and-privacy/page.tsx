import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import SiteHeader from "@/components/site-header";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Terms of Service & Privacy Policy | Marx's Cleaning",
  description:
    "Read Marx's Cleaning's Terms of Service and Privacy Policy to understand our commitment to your rights and data protection.",
  openGraph: {
    title: "Terms of Service & Privacy Policy | Marx's Cleaning",
    description:
      "Read Marx's Cleaning's Terms of Service and Privacy Policy to understand our commitment to your rights and data protection.",
    images: [
      {
        url: "/terms-privacy.jpg",
        width: 1200,
        height: 630,
        alt: "Marx's Cleaning Terms and Privacy",
      },
    ],
  },
};

export default function TermsAndPrivacyPage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h2 className="text-5xl font-bold text-center mb-2 text-[#004a82]">Terms of Service & Privacy Policy</h2>
        <p className=" text-gray-700 text-center mb-5">
          Please read these terms carefully before using our services. By using
          Marx's Cleaning services, you agree to these terms and our privacy
          policy.
        </p>
        <Tabs defaultValue="terms" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="terms" id="terms">Terms of Service</TabsTrigger>
              <TabsTrigger value="privacy" id="privacy">Privacy Policy</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="terms">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="acceptance">
                <AccordionTrigger>1. Acceptance of Terms</AccordionTrigger>
                <AccordionContent>
                  By accessing and using Marx's Cleaning services, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms of Service. These terms constitute a
                  legally binding agreement between you and Marx's Cleaning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="description">
                <AccordionTrigger>2. Description of Service</AccordionTrigger>
                <AccordionContent>
                  Marx's Cleaning provides professional cleaning services for
                  residential and commercial properties. Our services include,
                  but are not limited to, regular cleaning, deep cleaning,
                  move-in/move-out cleaning, post-construction cleaning, and
                  vacation rental cleaning. The specific scope of work will be
                  agreed upon prior to service commencement.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="responsibilities">
                <AccordionTrigger>3. User Responsibilities</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Provide accurate and complete information when booking
                      services
                    </li>
                    <li>Ensure safe and reasonable access to the property</li>
                    <li>Secure or remove valuable items</li>
                    <li>Inform us of any special conditions or requirements</li>
                    <li>Maintain appropriate insurance for your property</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger>4. Payment and Pricing</AccordionTrigger>
                <AccordionContent>
                  Payment is due upon completion of services unless otherwise
                  agreed upon. We accept various payment methods including cash,
                  check, and electronic payments. Pricing is based on the scope
                  of work and will be provided before service commencement.
                  Additional charges may apply for extra services requested
                  during the cleaning.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cancellation">
                <AccordionTrigger>
                  5. Cancellation and Rescheduling
                </AccordionTrigger>
                <AccordionContent>
                  We require 24 hours' notice for cancellations or rescheduling.
                  Late cancellations (less than 24 hours) may incur a $50 fee.
                  This policy helps us maintain efficient scheduling and ensures
                  our cleaning teams remain fully employed.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="liability">
                <AccordionTrigger>6. Liability</AccordionTrigger>
                <AccordionContent>
                  While we take utmost care with your property, Marx's
                  Cleaning's liability is limited to the cost of the cleaning
                  service provided. We maintain appropriate insurance coverage
                  for our operations. Any claims must be reported within 24
                  hours of service completion.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="modifications">
                <AccordionTrigger>7. Modifications to Terms</AccordionTrigger>
                <AccordionContent>
                  Marx's Cleaning reserves the right to modify these terms at
                  any time. Changes will be effective immediately upon posting
                  to our website. Continued use of our services constitutes
                  acceptance of any modifications to these terms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="privacy">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="collection">
                <AccordionTrigger>1. Information Collection</AccordionTrigger>
                <AccordionContent>
                  We collect information necessary to provide our services,
                  including contact details, property information, and service
                  preferences. This information is collected when you book our
                  services, communicate with us, or use our website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="use">
                <AccordionTrigger>2. Use of Information</AccordionTrigger>
                <AccordionContent>
                  Your information is used to:
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Provide and improve our cleaning services</li>
                    <li>Communicate about appointments and services</li>
                    <li>Process payments</li>
                    <li>Send service-related notifications</li>
                    <li>Maintain and improve our operations</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sharing">
                <AccordionTrigger>3. Information Sharing</AccordionTrigger>
                <AccordionContent>
                  We do not sell or rent your personal information to third
                  parties. Information may be shared with service providers who
                  assist in our operations, always under strict confidentiality
                  agreements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger>4. Data Security</AccordionTrigger>
                <AccordionContent>
                  We implement appropriate security measures to protect your
                  information from unauthorized access, alteration, or
                  disclosure. However, no internet transmission is completely
                  secure, and we cannot guarantee absolute security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rights">
                <AccordionTrigger>5. Your Rights</AccordionTrigger>
                <AccordionContent>
                  You have the right to:
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Access your personal information</li>
                    <li>Request corrections to your data</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Request information about our data practices</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <p className="text-sm text-gray-500 mt-8 text-center mb-10">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        
      </div>
    <Footer/>
    </div>

  );
}
