import Link from "next/link";
import { Phone } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:bottom-8 md:right-8 ">
      <div className="flex flex-col items-center space-y-2 rounded-lg border-2  border-white  bg-[#004B87] p-4 text-white shadow-lg md:flex-row md:space-x-4 md:space-y-0">
        <Link href="tel:+1239271-9367" className="flex items-center space-x-2 hover:text-gray-300">
          <Phone className="h-4 w-4" />
          <span className="text-sm font-medium">Call Us</span>
        </Link>
        <Button asChild className="rounded-full p-3 md:p-4 hover:bg-gray-300 bg-white">
          <Link href="sms:+1239271-9367">
            <MessageSquare className="h-6 w-6 md:h-8 md:w-8 text-[#004B87]" />
            <span className="text-[#004B87] font-semibold">Send SMS</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
