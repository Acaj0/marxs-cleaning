import Link from "next/link"
import { Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8">
      <div className="flex flex-col items-center space-y-2 rounded-lg bg-[#004B87] p-4 text-white shadow-lg md:flex-row md:space-x-4 md:space-y-0">
        <Link href="tel:+1234567890" className="flex items-center space-x-2">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">Call Us</span>
        </Link>
        <Button variant="secondary" className="w-full whitespace-nowrap font-semibold md:w-auto">
          Get A Free Quote
        </Button>
      </div>
    </div>
  )
}

