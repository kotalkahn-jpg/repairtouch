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
    question: "How much can my business save by switching to VoIP?",
    answer:
      "Most of our clients see a 30% to 60% reduction in telephony costs by switching to VoIP systems using SIP trunking and modern PBX solutions.",
  },
  {
    question: "Can I keep my existing business phone numbers?",
    answer:
      "Yes. We handle full number porting so your existing business numbers remain active during and after migration to our VoIP systems.",
  },
  {
    question: "Is formatting a hard drive enough to protect my data?",
    answer:
      "No. Formatting only hides data. We use certified tools like Active@ KillDisk to permanently erase data using international standards, making recovery impossible.",
  },
  {
    question: "Why do I need a Data Sanitization Certificate?",
    answer:
      "Businesses and law firms are legally required to protect client data. Our certificate provides proof that sensitive data was securely destroyed before disposal or resale.",
  },
  
 
  
  
  {
    question: "Can SCADA systems integrate with existing infrastructure?",
    answer:
      "Yes. We integrate SCADA systems with your current network while ensuring secure data flow and real-time monitoring for industrial environments.",
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