import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MoveInOutBenefits,
  PostConstructionBenefits,
} from "@/components/service-benefits";
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

export const metadata: Metadata = {
  title: "Post-Construction Cleaning Services | Marx's Cleaning",
  description:
    "Thorough post-construction cleaning services to remove dust and debris, leaving your space spotless. Book with Marx's Cleaning today!",
  openGraph: {
    title: "Post-Construction Cleaning Services | Marx's Cleaning",
    description:
      "Thorough post-construction cleaning services to remove dust and debris, leaving your space spotless. Book with Marx's Cleaning today!",
    images: [
      {
        url: "/POST-CONSTRUCTION.jpg",
        width: 1200,
        height: 630,
        alt: "Post-Construction Cleaning Services",
      },
    ],
  },
};

export default function PostConstructionPage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Post Construction Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/POST-CONSTRUCTION.jpg"
              alt="Post Construction Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              The best solution to get rid of all debris created by a
              construction project. Our team is ready to eliminate all dirt and
              debris in your property quickly.
            </p>
            <p className="text-lg mb-4">
              We ensure your newly constructed or renovated space is clean,
              safe, and ready for use.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              What's Included:
            </h2>
            <div className="max-w-3xl mx-auto p-1">
              <Accordion type="single" collapsible className="w-full mb-10">
                <AccordionItem value="housekeeping">
                  <AccordionTrigger className="text-[#004a82]">
                    Bedroom
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>All surfaces dusted</li>
                      <li>Carpet and area rugs vacuumed</li>
                      <li>Hard surface floors vacuumed and damp-mopped</li>
                      <li>Closet fronts and insides cleaned</li>
                      <li>Marks on walls and baseboards cleaned</li>
                      <li>Mirrors cleaned</li>
                      <li>Windowsills and window tracks cleaned</li>
                      <li>Baseboards dusted and/or wiped</li>
                      <li>Doorknobs, doorframes and doors wiped</li>
                      <li>Light switches wiped</li>
                      <li>Garbage and recycling bins emptied</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="kitchen">
                  <AccordionTrigger className="text-[#004a82]">
                    Kitchen
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Cabinet fronts and inside cleaned</li>
                      <li>Countertops and shelves dusted and/or wiped</li>
                      <li>Sinks and backsplash washed</li>
                      <li>Windows inside cleaned</li>
                      <li>
                        Appliance exteriors cleaned (stovetop, oven, range hood,
                        fridge, microwave, dishwasher)
                      </li>
                      <li>
                        Small appliances wiped (microwave, toaster, coffee
                        maker)
                      </li>
                      <li>All surfaces dusted</li>
                      <li>Windowsills and window tracks cleaned</li>
                      <li>Baseboards dusted and/or wiped</li>
                      <li>Doorknobs, doorframes and doors wiped</li>
                      <li>Light switches wiped</li>
                      <li>Marks on walls and baseboards cleaned</li>
                      <li>Garbage and recycling bins emptied</li>
                      <li>Floor vacuumed and washed</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="bathroom">
                  <AccordionTrigger className="text-[#004a82]">
                    Bathroom
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6">
                      <li>Sink cleaned and sanitized</li>
                      <li>
                        Bathtub, shower walls and glass doors cleaned and
                        sanitized
                      </li>
                      <li>Toilet cleaned and sanitized inside and out</li>
                      <li>Mirrors cleaned</li>
                      <li>Cabinet fronts and inside cleaned</li>
                      <li>Countertops and shelves dusted and/or wiped</li>
                      <li>All surfaces dusted</li>
                      <li>Windows inside cleaned</li>
                      <li>Windowsills and window tracks cleaned</li>
                      <li>Baseboards dusted and/or wiped</li>
                      <li>Doorknobs, doorframes and doors wiped</li>
                      <li>Light switches wiped</li>
                      <li>Garbage and recycling bins emptied</li>
                      <li>Floor vacuumed and washed</li>
                      <li>Marks on walls and baseboards cleaned</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <a href="/#contact">
              <Button size="lg" className="bg-[#004a82]">
                Book Post Construction Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg mb-10 ">
          <PostConstructionBenefits />
        </div>
        <Footer />
      </div>
    </div>
  );
}
