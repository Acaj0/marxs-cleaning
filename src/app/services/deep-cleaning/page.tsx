import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import { DeepCleaningBenefits } from "@/components/service-benefits";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <div className="max-w-3xl mx-auto p-1">
              <Accordion type="single" collapsible className="w-full mb-10">
                <AccordionItem value="housekeeping">
                  <AccordionTrigger className="text-[#004a82]">
                    Housekeeping Department
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Detailed clean all rooms</li>
                      <li>Dusting</li>
                      <li>Bed made</li>
                      <li>Mirrors cleaning</li>
                      <li>Move all furniture</li>
                      <li>Clean blinds</li>
                      <li>Clean air conditioning vents</li>
                      <li>Clean baseboards</li>
                      <li>Clean ceiling fans</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Upholstery">
                  <AccordionTrigger className="text-[#004a82]">
                    Upholstery and Glass
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Vacuuming upholstery.</li>
                      <li>Wash glass doors.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="kitchen">
                  <AccordionTrigger className="text-[#004a82]">
                    Kitchen
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Clean inside refrigerator</li>
                      <li>Clean microwave</li>
                      <li>Clean stove</li>
                      <li>Clean inside oven</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bathroom">
                  <AccordionTrigger className="text-[#004a82]">
                    Bathroom
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Bathtub.</li>
                      <li>Shower scrubbed.</li>
                      <li>Washed Bathroom Glass.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="outdoor">
                  <AccordionTrigger className="text-[#004a82]">
                    Outdoor
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Lanai cleaning.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Furniture Care">
                  <AccordionTrigger className="text-[#004a82]">
                    Furniture Care
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Condition stainless steel/wood furniture.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="floor-care">
                  <AccordionTrigger className="text-[#004a82]">
                    Floor Care
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Vacuum all carpets and rugs</li>
                      <li>Mop hard surface floors</li>
                      <li>Waste Management.</li>
                      <li>Remove Trash.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="Waste">
                  <AccordionTrigger className="text-[#004a82]">
                    Waste Management
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Remove Trash.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
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
