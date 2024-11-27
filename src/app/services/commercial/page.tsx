import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function CommercialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Commercial Cleaning</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg"
            alt="Commercial Cleaning"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Keeping your commercial space clean is one way to raise productivity! Not to mention that it keeps your space free of germs and bacteria.
          </p>
          <p className="text-lg mb-4">
            Our commercial cleaning service is tailored to meet the unique needs of your business, ensuring a clean and professional environment.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What's Included:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Regular cleaning of office spaces and common areas</li>
            <li>Sanitizing of high-touch surfaces</li>
            <li>Restroom cleaning and restocking</li>
            <li>Kitchen and break room cleaning</li>
            <li>Trash removal and recycling</li>
            <li>Floor care (vacuuming, mopping, buffing)</li>
          </ul>
          <Button size="lg">Book Commercial Cleaning</Button>
        </div>
      </div>
    </div>
  )
}

