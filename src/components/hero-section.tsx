import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#004B87] px-2 md:px-20 text-white" >
      <div className="absolute right-0 top-0 h-16 w-16">
        <div className="absolute right-8 top-8 grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-white/20" />
          ))}
        </div>
      </div>
      <div className=" relative flex min-h-[600px] flex-col md:flex-row items-center justify-between py-12">
        <div className="w-full md:w-1/2 space-y-6  justify-center items-center flex flex-col">
          <h1 className="text-5xl md:text-7xl font-bold md:text-left text-center tracking-tighter">
            SAY
            <br />
            FAREWELL
            <br />
            <span className="text-4xl md:text-6xl">TO MESS!</span>
          </h1>
          <p className="max-w-[600px] font-semibold text-white/80">
            Top-notch cleaning services just a click away.
          </p>
          <Button size="lg" variant="secondary" className="font-bold text-[#004B87]">
            GET A FREE QUOTE
          </Button>
        </div>
        <div className="w-full md:w-1/2 mt-28 md:mt-0">
          <div className="relative h-[400px] w-full">
            <Image
              src="/happyfam.jpg"
              alt="Happy Family"
              fill
              className="object-cover rounded-full"
              priority
            />
            <div className="absolute -top-4 right-4 bg-white rounded-full px-6 py-3 text-primary font-semibold transform rotate-6">
              Schedule your cleaning today!
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  )
}

