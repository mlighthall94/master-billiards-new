"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How much does it cost to recover a pool table?",
    answer: "Pricing depends on table size and felt quality. Standard recovery for a 7-8 foot table typically ranges from $300-$500. We provide free quotes for all jobs.",
  },
  {
    question: "How long does a pool table move take?",
    answer: "Most local moves are completed in 2-4 hours. We disassemble, transport, and reassemble your table with precision leveling included.",
  },
  {
    question: "What brands of felt do you use?",
    answer: "We use premium Simonis and Championship brand cloth. We stock multiple colors and can special order to match your room.",
  },
  {
    question: "Do you service all pool table brands?",
    answer: "Yes. We work on Brunswick, Olhausen, Diamond, Valley, and all other major brands. Antique and custom tables welcome.",
  },
  {
    question: "How often should felt be replaced?",
    answer: "With regular use, felt typically lasts 3-5 years. Signs it&apos;s time: visible wear paths, pilling, tears, or inconsistent ball roll.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section className="w-full py-10 bg-secondary">
      <div className="px-3">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="text-sm font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-40 pb-4" : "max-h-0"
                )}
              >
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
