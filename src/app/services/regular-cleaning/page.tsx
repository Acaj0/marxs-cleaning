import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import Footer from "@/components/Footer";
import { RegularCleaningBenefits } from "@/components/service-benefits";
import { FloatingContact } from "@/components/floating-contact";

export const metadata: Metadata = {
  title: "Regular Cleaning Services | Marx's Cleaning",
  description:
    "Professional regular cleaning services to keep your home consistently clean and tidy. Book your regular cleaning with Marx's Cleaning today!",
  openGraph: {
    title: "Regular Cleaning Services | Marx's Cleaning",
    description:
      "Professional regular cleaning services to keep your home consistently clean and tidy. Book your regular cleaning with Marx's Cleaning today!",
    images: [
      {
        url: "/regular.jpg",
        width: 1200,
        height: 630,
        alt: "Regular Cleaning Services",
      },
    ],
  },
};

export default function RegularCleaningPage() {
  return (
    <div>
      <SiteHeader /> <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Regular Cleaning
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/regular.jpg"
              alt="Regular Cleaning"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              The rush of everyday life can get in the way of your plans and you
              end up not having enough time to clean your house. Don't worry, we
              have the perfect solution for you!
            </p>
            <p className="text-lg mb-4">
              Our regular cleaning service ensures your home stays consistently
              clean and tidy, giving you more time to focus on what matters most
              to you.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              What's Included:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>Clean all rooms.</li>
              <li>Dusting.</li>
              <li>Bed Made.</li>
              <li>Remove Trash.</li>
              <li>Clean windowsills.</li>
              <li>Mirrors cleaning.</li>
              <li>Clean microwave.</li>
              <li>Clean stove.</li>
              <li>Bathtub.</li>
              <li>Shower scrubbed.</li>
              <li>Washed bathroom glass.</li>
              <li>Floor and Carpet Care - Vacuum carpets, rugs and floor.</li>
              <li>Floor and Carpet Care - Mop all floor types.</li>
              <li>Stainless Steel Maintenance - Condition stainless steel.</li>
            </ul>
            <a href="/#contact">
              <Button size="lg" className="bg-[#004a82]">
                Book Regular Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg ">
          <RegularCleaningBenefits />
        </div>
      </div>
      <Footer />
    </div>
  );
}
