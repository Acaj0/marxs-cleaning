import Image from "next/image";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/site-header";
import { FloatingContact } from "@/components/floating-contact";
import Footer from "@/components/Footer";
import {
  MoveInOutBenefits,
  VacationHomeBenefits,
} from "@/components/service-benefits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacation Home Cleaning Services | Marx's Cleaning",
  description:
    "Reliable vacation home cleaning services to keep your getaway spot fresh and ready. Schedule your cleaning with Marx's Cleaning today!",
  openGraph: {
    title: "Vacation Home Cleaning Services | Marx's Cleaning",
    description:
      "Reliable vacation home cleaning services to keep your getaway spot fresh and ready. Schedule your cleaning with Marx's Cleaning today!",
    images: [
      {
        url: "/vacation.jpg",
        width: 1200,
        height: 630,
        alt: "Vacation Home Cleaning Services",
      },
    ],
  },
};

export default function VacationHomePage() {
  return (
    <div>
      {" "}
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Vacation Home Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/vacation.jpg"
              alt="Vacation Home Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Preparing for new guests? From meticulous cleaning to refreshing
              linens, we transform your space into a welcoming haven, setting
              the stage for a memorable stay.
            </p>
            <p className="text-lg mb-4">
              Trust Marx's Cleaning to elevate the guest experience in your
              vacation home.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              What's Included:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Thorough cleaning of all living areas</li>
              <li>Sanitizing of bathrooms and kitchen</li>
              <li>Changing and laundering of all linens</li>
              <li>Restocking of toiletries and essentials</li>
              <li>Outdoor area tidying (patios, decks)</li>
              <li>Inspection for maintenance issues</li>
            </ul>
            <a href="/#contact">
              <Button size="lg" className="bg-[#004a82]">
                Book Vacation Home Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg mb-10">
          <VacationHomeBenefits />
        </div>
        <Footer />
      </div>
    </div>
  );
}
