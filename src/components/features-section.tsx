import { Shield, Award, Users, BadgeIcon as IdCard } from "lucide-react";
import { FloatingContact } from "./floating-contact";

export function FeaturesSection() {
  return (
    <section className="py-16 px-4">
      <FloatingContact></FloatingContact>
      <div className="">
        <h2 className="text-3xl font-bold text-center text-primary mb-4 text-[#004B87]">
          Looking for the best cleaning service in the area?
        </h2>
        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Discover the Marx's Cleaning difference! We're not just about wiping
          surfaces; our goal is to elevate your cleaning experience. Elevate
          your cleaning experience with Marx's Cleaning!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="flex flex-col items-center text-center p-6 border-4 border-[#004B87] rounded-lg">
            <Users className="h-12 w-12 text-primary mb-4 text-[#004B87]" />
            <h3 className="text-xl font-semibold mb-2 text-[#004B87]">+2000 Customers</h3>
            <p className="text-sm text-muted-foreground ">
              Satisfied clients trust our service
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border-4 border-[#004B87] rounded-lg">
            <Award className="h-12 w-12 text-primary mb-4 text-[#004B87]" />
            <h3 className="text-xl font-semibold mb-2 text-[#004B87]">
              +4 Years Of Experience
            </h3>
            <p className="text-sm text-muted-foreground">
              Professional cleaning expertise
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6  border-4 border-[#004B87] rounded-lg">
            <Shield className="h-12 w-12 text-primary mb-4 text-[#004B87]" />
            <h3 className="text-xl font-semibold mb-2 text-[#004B87]">Insured</h3>
            <p className="text-sm text-muted-foreground">
              Your peace of mind guaranteed
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 border-4 border-[#004B87] rounded-lg">
            <IdCard className="h-12 w-12 text-primary mb-4 text-[#004B87]" />
            <h3 className="text-xl font-semibold mb-2 text-[#004B87]">Licensed</h3>
            <p className="text-sm text-muted-foreground">
              Fully certified professionals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
