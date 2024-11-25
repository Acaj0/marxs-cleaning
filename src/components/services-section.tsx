import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  BrushIcon as Broom,
  Home,
  Palmtree,
  HardHat,
  Building2,
} from "lucide-react";

const services = [
  {
    title: "Regular Cleaning",
    description:
      "The rush of everyday life can get in the way of your plans and you end up not having enough time to clean your house. Don't worry, we have the perfect solution for you!",
    icon: Sparkles,
  },
  {
    title: "Deep Cleaning",
    description:
      "This type of service is done by capable professionals who know the steps needed to get rid of all the germs, fungi and bacteria around your house. It is the best solution for your environment.",
    icon: Broom,
  },
  {
    title: "Move In/Out",
    description:
      "Don't worry about cleaning when moving anymore, Marx's Cleaning puts its professionals at your disposal to rid you of this headache.",
    icon: Home,
  },
  {
    title: "Vacation Home",
    description:
      "Preparing for new guests? From meticulous cleaning to refreshing linens, we transform your space into a welcoming haven, setting the stage for a memorable stay. Trust Marx's Cleaning to elevate the guest experience in your vacation home.",
    icon: Palmtree,
  },
  {
    title: "Post Construction",
    description:
      "The best solution to get rid of all debris created by a construction project. Our team is ready to eliminate all dirt and debris in your property quickly.",
    icon: HardHat,
  },
  {
    title: "Commercial",
    description:
      "Keeping your commercial space clean is one way to raise productivity! Not to mention that it keeps your space free of germs and bacteria.",
    icon: Building2,
  },
];

export function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="">
        <h2 className="text-3xl font-bold text-center text-[#004B87] mb-12">
          Our Cleaning Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <service.icon className="h-10 w-10 text-[#004B87] mb-4" />
                <CardTitle className="text-[#004B87]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
