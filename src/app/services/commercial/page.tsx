import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  CommercialCleaningBenefits,
  MoveInOutBenefits,
} from "@/components/service-benefits";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import SiteHeader from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Cleaning Services | Marx's Cleaning",
  description:
    "Professional commercial cleaning services tailored to your business needs. Keep your workspace spotless with Marx's Cleaning. Schedule today!",
  openGraph: {
    title: "Commercial Cleaning Services | Marx's Cleaning",
    description:
      "Professional commercial cleaning services tailored to your business needs. Keep your workspace spotless with Marx's Cleaning. Schedule today!",
    images: [
      {
        url: "/commercial.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial Cleaning Services",
      },
    ],
  },
};

export default function CommercialPage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Commercial Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/commercial.jpg"
              alt="Commercial Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Keeping your commercial space clean is one way to raise
              productivity! Not to mention that it keeps your space free of
              germs and bacteria.
            </p>
            <p className="text-lg mb-4">
              Our commercial cleaning service is tailored to meet the unique
              needs of your business, ensuring a clean and professional
              environment.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              What's Included:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Regular cleaning of office spaces and common areas</li>
              <li>Sanitizing of high-touch surfaces</li>
              <li>Restroom cleaning and restocking</li>
              <li>Kitchen and break room cleaning</li>
              <li>Trash removal and recycling</li>
              <li>Floor care (vacuuming, mopping, buffing)</li>
            </ul>
            <a href="/#contact">
              <Button size="lg" className="bg-[#004a82]">
                Book Commercial Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg  mb-10">
          <CommercialCleaningBenefits />
        </div>
        <Footer />
      </div>
    </div>
  );
}
