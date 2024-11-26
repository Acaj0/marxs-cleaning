import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AspectRatio } from "./ui/aspect-ratio"
import Image from "next/image"

const faqs = [
  {
    question: "Do you provide cleaning equipment and products for the cleaning service?",
    answer: "Yes, we provide all the necessary equipment and products for cleaning. We also offer flexibility in providing cleaning products, allowing the client to choose between using our supplied supplies or their own. We recommend discussing your preferences regarding cleaning products in advance to ensure that we will meet your needs effectively."
  },
  {
    question: "How long does it typically take to clean a space?",
    answer: "The duration of a cleaning session can fluctuate based on several factors, including the size of the area, the complexity of the cleaning tasks, and any specific requirements. Due to these variables, it's difficult to give an exact timeframe upfront. Once we assess your space, we'll provide an estimated duration for the cleaning process tailored to your needs."
  },
  {
    question: "How many cleaning team members come to clean my space? Do the team members vary for each cleaning?",
    answer: "We usually send a team of 2 to 3 cleaning professionals to attend to your cleaning needs. Although we aim for consistency and try to send the same crew whenever possible, variations might occur due to factors like availability and unforeseen circumstances. It's important to note that, even if there are changes in the team, all members are trained, experienced, and adhere to our high-quality standards to ensure exceptional cleaning services."
  },
  {
    question: "Do you offer a satisfaction guarantee for cleaning services?",
    answer: "If our cleaning services don't meet your standards, please contact our office within 24 hours. We maintain a 100% satisfaction policy and are dedicated to promptly addressing any concerns. We will happily return to clean your space again at no extra cost, ensuring your satisfaction with the results."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept payments in cash, check, or through the Zelle service upon completion of the job. We provide flexibility for clients to choose the most convenient payment method for them. Payment can be made as soon as the work is finished, ensuring a smooth and hassle-free transaction."
  },
  {
    question: "What is Marx's Cleaning cancellation policy?",
    answer: "Our cancellation policy is designed to keep our cleaning teams busy, ensuring consistent and high-quality service. We understand that unforeseen circumstances can arise, such as sudden illnesses or family emergencies. However, we kindly request that you inform us with at least 24 hours' notice if you need to cancel. If the cancellation occurs without a 24-hour notice, we reserve the right to apply a $50 cancellation fee. This fee may also be applied in cases of cancellation due to reasons such as difficulty accessing the property, payment failure, lack of water, lack of electricity, or air conditioning failure – especially during the summer months. We are always committed to finding creative solutions to overcome challenges, but if we encounter difficulties or cannot reach the homeowner for assistance, the cancellation fee may be applied. We appreciate your understanding and cooperation with our late cancellation policy."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 px-4 flex flex-col md:flex-row  items-center md:mx-44">
      <div className="md:w-[700px] w-screen mb-10 md:mb-0 md:mt-20 ">
      <AspectRatio ratio={5 / 4}>
                <Image
                  src={"/area.png"}
                  fill
                  alt="areas of service"
                  className=" object-cover"
                />
              </AspectRatio>
      </div>
      <div className=" max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#004B87] mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
    </section>
  )
}

