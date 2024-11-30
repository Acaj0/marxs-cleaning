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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <div className="max-w-3xl mx-auto p-1">
              <Accordion type="single" collapsible className="w-full mb-10">
                <AccordionItem value="housekeeping">
                  <AccordionTrigger className="text-[#004a82]">
                    General
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Floors - Swiffer/Vacuum/Mop</li>
                      <li>All Ceiling Fans Dusted</li>
                      <li>All Window Sills Dusted</li>
                      <li>All Blinds Dusted</li>
                      <li>Sliders Cleaned</li>
                      <li>Dryer Vent Cleaned</li>
                      <li>
                        Inspection of Home for Damage and Reported to Homeowner
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kitchen">
                  <AccordionTrigger className="text-[#004a82]">
                    Kitchen
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Refrigerator (Inside/Outside/Top)</li>
                      <li>All food items removed and disposed of</li>
                      <li>Stove Top</li>
                      <li>Oven</li>
                      <li>Microwave (Inside/Outside)</li>
                      <li>Dishwasher (Empty and wiped down)</li>
                      <li>Countertop Appliances</li>
                      <li>Countertop</li>
                      <li>Cabinet Doors & Handles</li>
                      <li>Drawers & Handles</li>
                      <li>Cabinet Contents Organized</li>
                      <li>Drawer Contents Organized</li>
                      <li>Single-portfolio</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bathroom">
                  <AccordionTrigger className="text-[#004a82]">
                    Bathroom
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Shower/Tub</li>
                      <li>Mirror</li>
                      <li>Vanity</li>
                      <li>Sinks</li>
                      <li>Toilets</li>
                      <li>Linen Closets Organized</li>
                      <li>Towel Rack Display</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="outdoor">
                  <AccordionTrigger className="text-[#004a82]">
                    Outdoor
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Patio Furniture Arranged Neatly</li>
                      <li>Tabletop Cleaned</li>
                      <li>Chair Cushions Checked for Stains</li>
                      <li>Grill Cleaned</li>
                      <li>Pool Toys Organized</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="floor-care">
                  <AccordionTrigger className="text-[#004a82]">
                    Bedrooms
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Bed Linens Washed/Dried</li>
                      <li>Fresh Linens on Bed</li>
                      <li>
                        All Drawers Checked for Left Behind Items from Guests
                      </li>
                      <li>Blinds Dusted</li>
                      <li>Window Sills</li>
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
