import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function PostConstructionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Post Construction Cleaning</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg"
            alt="Post Construction Cleaning"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            The best solution to get rid of all debris created by a construction project. Our team is ready to eliminate all dirt and debris in your property quickly.
          </p>
          <p className="text-lg mb-4">
            We ensure your newly constructed or renovated space is clean, safe, and ready for use.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What's Included:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Removal of construction dust and debris</li>
            <li>Cleaning of all surfaces, including walls and ceilings</li>
            <li>Detailed cleaning of fixtures and fittings</li>
            <li>Window and glass cleaning</li>
            <li>Floor cleaning and polishing</li>
            <li>Sanitizing of all areas</li>
          </ul>
          <Button size="lg">Book Post Construction Cleaning</Button>
        </div>
      </div>
    </div>
  )
}

