"use client"

import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQSection() {

  const faqs = [
    {
      question: "How long does a repair usually take?",
      answer:
        "Most repairs are completed within 24–48 hours depending on the complexity of the issue and availability of parts.",
    },
    {
      question: "Do you provide warranty on repairs?",
      answer:
        "Yes. We provide warranty on most repairs to ensure the quality and reliability of our service.",
    },
    {
      question: "Do you repair all laptop and phone brands?",
      answer:
        "We repair most major brands including Apple, Dell, HP, Lenovo, Asus, Samsung and many others.",
    },
    {
      question: "Can businesses request on-site IT support?",
      answer:
        "Yes. We provide on-site IT support and infrastructure solutions for businesses and organizations.",
    },
    {
      question: "Do I need to book before bringing my device?",
      answer:
        "Walk-ins are welcome, but booking in advance helps us diagnose and repair your device faster.",
    },
  ]

  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        {/* FLOATING FAQ CARD */}
        <div className="relative bg-gray-100 rounded-2xl shadow-xl border border-gray-200 p-10 md:p-14">

          {/* HEADER */}
          <div className="text-center mb-16 max-w-3xl mx-auto">

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              F.A.Q
            </p>

            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-gray-600">
              Find answers to common questions about our repair and IT services.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* LEFT SIDE */}
            <div>

              <p className="text-sm text-gray-500 mb-2">
                Need Help?
              </p>

              <h3 className="text-2xl font-bold mb-4">
                Have Any Questions?
              </h3>

              <p className="text-gray-600 mb-6">
                If you can't find the answer you're looking for, feel free
                to contact our support team. We're always ready to help.
              </p>

              <Button className="bg-blue-700 hover:bg-blue-800">
                Contact Us
              </Button>

            </div>


            {/* ACCORDION */}
            <Accordion type="single" collapsible className="w-full space-y-4">

              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-lg px-5 transition hover:border-blue-500 hover:shadow-sm"
                >

                  <AccordionTrigger className="flex items-center gap-3 py-4 text-left">

                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />

                    <span className="font-medium text-gray-900">
                      {faq.question}
                    </span>

                  </AccordionTrigger>

                  <AccordionContent className="text-gray-600 text-sm leading-relaxed pb-5 transition-all duration-300">
                    {faq.answer}
                  </AccordionContent>

                </AccordionItem>
              ))}

            </Accordion>

          </div>

        </div>

      </div>

    </section>
  )
}