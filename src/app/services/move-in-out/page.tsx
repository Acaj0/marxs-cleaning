import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function MoveInOutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Move In/Out Cleaning</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg"
            alt="Move In/Out Cleaning"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div>
          <p className="text-lg mb-4">
            Don't worry about cleaning when moving anymore, Marx's Cleaning puts its professionals at your disposal to rid you of this headache.
          </p>
          <p className="text-lg mb-4">
            Whether you're moving in or out, our specialized cleaning service ensures your space is spotless for the next chapter.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What's Included:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Deep cleaning of all rooms</li>
            <li>Cleaning inside and outside of all appliances</li>
            <li>Detailed cleaning of bathrooms and kitchens</li>
            <li>Wiping down of all surfaces, including baseboards</li>
            <li>Carpet cleaning (additional charge may apply)</li>
            <li>Window cleaning</li>
          </ul>
          <Button size="lg">Book Move In/Out Cleaning</Button>
        </div>
      </div>
    </div>
  )
}

