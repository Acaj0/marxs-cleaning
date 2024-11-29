import Image from "next/image";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { FloatingContact } from "@/components/floating-contact";
import SiteHeader from "@/components/site-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Guarantee | Marx's Cleaning",
  description:
    "Learn about Marx's Cleaning's commitment to quality and customer satisfaction with our service guarantee.",
  openGraph: {
    title: "Our Guarantee | Marx's Cleaning",
    description:
      "Learn about Marx's Cleaning's commitment to quality and customer satisfaction with our service guarantee.",
    images: [
      {
        url: "/guarantee.jpg",
        width: 1200,
        height: 630,
        alt: "Marx's Cleaning Guarantee",
      },
    ],
  },
};

export default function GuaranteePage() {
  return (
    <div>
      <SiteHeader />
      <FloatingContact />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#004a82]">
          Our Guarantee
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative h-64 md:h-full">
            <Image
              src="/guarantee.jpg"
              alt="Marx's Cleaning Guarantee"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              At Marx's Cleaning, we stand behind the quality of our work. Our
              guarantee is a testament to our commitment to your satisfaction
              and the excellence of our cleaning services.
            </p>
            <h2 className="text-2xl font-semibold mb-4 text-[#004a82]">
              Our Promise to You:
            </h2>
            <ul className="list-disc list-inside mb-6">
              <li>100% Satisfaction Guarantee</li>
              <li>Timely and Professional Service</li>
              <li>Trained and Vetted Cleaning Professionals</li>
              <li>Eco-friendly Cleaning Products</li>
              <li>Responsive Customer Support</li>
            </ul>
            <p className="text-lg mb-4">
              If you're not completely satisfied with our service, contact us
              within 24 hours, and we'll re-clean the areas in question at no
              additional cost.
            </p>
            <a href="/#contact">
              <Button size="lg" className="bg-[#004a82]">
                Book a Cleaning
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-[#004a82] px-2 py-10 rounded-lg mb-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Choose Our Guarantee?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white  rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">
                Peace of Mind
              </h3>
              <p className="text-gray-800">
                Know that your cleaning needs are covered by our comprehensive
                guarantee.
              </p>
            </div>
            <div className="p-4 bg-white  rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">
                Quality Assurance
              </h3>
              <p className="text-gray-800">
                We're committed to delivering the highest standard of cleaning
                every time.
              </p>
            </div>
            <div className="p-4 bg-white  rounded-lg ">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">
                Customer-First Approach
              </h3>
              <p className="text-gray-800">
                Your satisfaction is our top priority, and we'll go the extra
                mile to ensure it.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-[#004a82]">
                Transparent Communication
              </h3>
              <p className="text-gray-800">
                We maintain open lines of communication to address any concerns
                promptly.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
