import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import SiteHeader from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy | Marx's Cleaning",
  description:
    "Understand Marx's Cleaning's cancellation policy to ensure a smooth experience with our services.",
  openGraph: {
    title: "Cancellation Policy | Marx's Cleaning",
    description:
      "Understand Marx's Cleaning's cancellation policy to ensure a smooth experience with our services.",
    images: [
      {
        url: "/cancellation-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Marx's Cleaning Cancellation Policy",
      },
    ],
  },
};

export default function CancellationPolicyPage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Cancellation Policy
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/cancellation-policy.png"
              alt="Marx's Cleaning Cancellation Policy"
              fill
              className="object- rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              At Marx's Cleaning, we understand that plans can change. Our
              cancellation policy is designed to be fair to both our clients and
              our cleaning professionals.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              Key Points of Our Policy:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>24-hour notice required for cancellations</li>
              <li>$50 fee for late cancellations</li>
              <li>Rescheduling options available</li>
              <li>Exceptions for emergencies considered</li>
              <li>Clear communication encouraged</li>
            </ul>
            <p className="text-lg mb-4">
              We appreciate your understanding and cooperation with our
              cancellation policy. It helps us maintain a reliable service for
              all our clients.
            </p>
            <Button size="lg" className="bg-[#004a82]">
              Book a Cleaning
            </Button>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg mb-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Understanding Our Cancellation Policy
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white  rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">24-Hour Notice</h3>
              <p className="text-gray-800">
                We kindly request at least 24 hours' notice for any
                cancellations to allow us to reallocate our cleaning teams
                effectively.
              </p>
            </div>
            <div className="p-4 bg-white  rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">
                Late Cancellation Fee
              </h3>
              <p className="text-gray-800">
                A $50 fee may be applied for cancellations made with less than
                24 hours' notice to cover operational costs.
              </p>
            </div> 
            <div className="p-4 bg-white  rounded-lg text-[#004a82]">
              <h3 className="text-xl font-semibold mb-2">Rescheduling</h3>
              <p className="text-gray-800">
                We're happy to reschedule your cleaning at no additional cost if
                done within the 24-hour notice period.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg text-[#004a82]">
              <h3 className="text-xl font-semibold mb-2">
                Emergency Situations
              </h3>
              <p className="text-gray-800">
                We understand that emergencies happen. Please contact us as soon
                as possible in such cases, and we'll do our best to accommodate
                your situation.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
