import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import { DeepCleaningBenefits } from "@/components/service-benefits";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";

export const metadata: Metadata = {
  title: "Deep Cleaning Services | Marx's Cleaning",
  description:
    "Professional deep cleaning services to keep your home consistently clean and tidy. Book your deep cleaning with Marx's Cleaning today!",
  openGraph: {
    title: "Deep Cleaning Services | Marx's Cleaning",
    description:
      "Professional deep cleaning services to keep your home consistently clean and tidy. Book your deep cleaning with Marx's Cleaning today!",
    images: [
      {
        url: "/happyfam.jpg",
        width: 1200,
        height: 630,
        alt: "deep Cleaning Services",
      },
    ],
  },
};

export default function DeepCleaningPage() {
  return (
    <div>
      {" "}
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82] ">
          Deep Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/deep-cleaning.jpg"
              alt="Deep Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              This type of service is done by capable professionals who know the
              steps needed to get rid of all the germs, fungi and bacteria
              around your house. It is the best solution for your environment.
            </p>
            <p className="text-lg mb-4">
              Our deep cleaning service goes beyond the surface to ensure a
              thorough and comprehensive clean for your entire home.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              What's Included:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>All regular cleaning tasks</li>
              <li>Detailed cleaning of kitchen appliances</li>
              <li>Scrubbing of bathroom tiles and grout</li>
              <li>Cleaning inside cabinets and drawers</li>
              <li>Washing of windows and sills</li>
              <li>Dusting of ceiling fans and light fixtures</li>
            </ul>
            <a href="/#contact">
              <Button size="lg" className=" bg-[#004a82]">
                Book Deep Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg ">
          <DeepCleaningBenefits />
        </div>
      </div>
      <Footer />
    </div>
  );
}
