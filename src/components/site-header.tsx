import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full px-2 md:px-20 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/100">
      <div className=" flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 ">
          <Image
            src="/logo.png"
            alt="Marx's Cleaning Logo"
            width={50}
            height={50}
            className="h-16 w-auto"
            priority
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#services"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        
      </div>
    </header>
  )
}

