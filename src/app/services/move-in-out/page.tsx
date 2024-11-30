import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import SiteHeader from "@/components/site-header";
import { FloatingContact } from "@/components/floating-contact";
import { MoveInOutBenefits } from "@/components/service-benefits";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Move-In/Out Cleaning Services | Marx's Cleaning",
  description:
    "Expert move-in and move-out cleaning services to ensure a spotless home for your next chapter. Book your cleaning with Marx's Cleaning today!",
  openGraph: {
    title: "Move-In/Out Cleaning Services | Marx's Cleaning",
    description:
      "Expert move-in and move-out cleaning services to ensure a spotless home for your next chapter. Book your cleaning with Marx's Cleaning today!",
    images: [
      {
        url: "/Move-In-Move-Out-Cleaning.jpg",
        width: 1200,
        height: 630,
        alt: "Move-In/Out Cleaning Services",
      },
    ],
  },
};
export default function MoveInOutPage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Move In/Out Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/Move-In-Move-Out-Cleaning.jpg"
              alt="Move In/Out Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Don't worry about cleaning when moving anymore, Marx's Cleaning
              puts its professionals at your disposal to rid you of this
              headache.
            </p>
            <p className="text-lg mb-4">
              Whether you're moving in or out, our specialized cleaning service
              ensures your space is spotless for the next chapter.
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
              <Button size="lg" className="bg-[#004a82]">
                Book Move In/Out Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg mb-10">
          <MoveInOutBenefits />
        </div>
        <Footer />
      </div>
    </div>
  );
}
