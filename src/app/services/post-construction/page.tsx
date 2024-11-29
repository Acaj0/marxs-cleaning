import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MoveInOutBenefits, PostConstructionBenefits } from "@/components/service-benefits";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import SiteHeader from "@/components/site-header";
import { Metadata } from "next";

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
            <ul className="list-disc list-inside mb-6">
              <li>Removal of construction dust and debris</li>
              <li>Cleaning of all surfaces, including walls and ceilings</li>
              <li>Detailed cleaning of fixtures and fittings</li>
              <li>Window and glass cleaning</li>
              <li>Floor cleaning and polishing</li>
              <li>Sanitizing of all areas</li>
            </ul>
            <Button size="lg" className="bg-[#004a82]">
              Book Post Construction Cleaning
            </Button>
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
