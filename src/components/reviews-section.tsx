import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Dave W.",
    avatar: "/davew.webp",
    date: "May 17, 2024",
    rating: 5,
    review:
      "My wife and I are very pleased with Marx's services. I asked them for a quote over Thumbtack and they came out the same day! We agreed on a price and they came out two days later and performed a very extensive cleaning in our home. They were there for well over three hours if not longer and deep, cleaned everything! We have a 4/2/2 home plus lanai and they cleaned it all. They even pulled the refrigerator and stove out and cleaned behind both appliances. What a wonderful job! Thank you and we couldn't have been happier.",
    details:
      "4 bedrooms • 2 bathrooms • Standard cleaning • Window cleaning (interior) • No pets in home • Once a month",
    service: "House Cleaning",
  },
  {
    name: "Tiana R.",
    avatar: "/tianar.webp",
    date: "Apr 10, 2024",
    rating: 5,
    review:
      "Marx Cleaning Services was excellent! They responded to my request rapidly, camt to my home same day to provide a estimate, showed up on the day of cleaning prepared. After the job was completed, the staff added little touches throughout the house that made me smile. 110% recommend to anyone needing their house to look spectacular!!",
    details:
      "2 bedrooms • 2 bathrooms • Standard cleaning • Fridge cleaning • Oven cleaning • Window cleaning (interior) • Pets in home • Just once",
    service: "House Cleaning",
  },
  {
    name: "Randy M.",
    avatar: "/randym.webp",
    date: "Jan 12, 2024",
    rating: 5,
    review:
      'Jany and her crew did an outstanding job cleaning our home. When my wife walks in and says "Wowsers! This house has NEVER been this clean!", that speaks volumes. Thanks Jany!!!',
    details:
      "3 bedrooms • 2 bathrooms • Standard cleaning • Pets in home • Every 2 weeks",
    service: "House Cleaning",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-5 px-4 bg-white" id="services">
      <div className="items-center flex flex-col">
        <h2 className="text-3xl font-bold text-center text-[#004B87] mb-2">
          Thumbtack Reviews
        </h2>
        <a
          href="https://www.thumbtack.com/fl/cape-coral/house-cleaning/marxs-cleaning-services/service/401937146737778692" target="_blank"
          className=" text-xl font-bold text-center text-gray-500 mb-8 hover:underline"
        >
          See More..
        </a>
      </div>
      <div className="">
        <Carousel className="w-full max-w-4xl mx-auto mb-5">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={`${review.avatar}`}
                        alt={`Avatar of ${review.name}`}
                        width={50}
                        height={50}
                        className="rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="ml-auto flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{review.review}</p>
                    <div className="text-sm text-gray-500">
                      <p>{review.details}</p>
                      <p className="font-semibold mt-2">{review.service}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
