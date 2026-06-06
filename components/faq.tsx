"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "It depends on the services required. We always do our best to be flexible with scheduling and pricing, and we're happy to provide a free quote.",
  },
  {
    question: "How long does it take?",
    answer: "Most jobs are completed same-day. Moves typically take 2-4 hours including setup and leveling.",
  },
  {
    question: "What areas do you serve?",
    answer: "We service all of Southern New Hampshire including Manchester, Nashua, Concord, and surrounding towns.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <section className="w-full py-8 lg:py-20">
      <div className="px-3 lg:max-w-3xl lg:mx-auto lg:px-8">
        <h2 className="text-xl font-bold text-foreground mb-4 lg:text-3xl lg:text-center lg:mb-10">
          Common Questions
        </h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-3 flex items-center justify-between text-left rounded-md px-1 transition-colors touch-manipulation active:bg-secondary/50 lg:py-5"
              >
                <span className="text-base font-semibold text-foreground pr-4 lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform",
                    openIndex === index && "rotate-180"
                  )}
                />
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-200",
                  openIndex === index ? "max-h-40 pb-3 lg:max-h-52 lg:pb-5" : "max-h-0"
                )}
              >
                <p className="text-base text-muted-foreground leading-relaxed">
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
