import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function VacationHomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Vacation Home Cleaning</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg"
            alt="Vacation Home Cleaning"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Preparing for new guests? From meticulous cleaning to refreshing linens, we transform your space into a welcoming haven, setting the stage for a memorable stay.
          </p>
          <p className="text-lg mb-4">
            Trust Marx's Cleaning to elevate the guest experience in your vacation home.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What's Included:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Thorough cleaning of all living areas</li>
            <li>Sanitizing of bathrooms and kitchen</li>
            <li>Changing and laundering of all linens</li>
            <li>Restocking of toiletries and essentials</li>
            <li>Outdoor area tidying (patios, decks)</li>
            <li>Inspection for maintenance issues</li>
          </ul>
          <Button size="lg">Book Vacation Home Cleaning</Button>
        </div>
      </div>
    </div>
  )
}

