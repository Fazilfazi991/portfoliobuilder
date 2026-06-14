"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/faqs";
import { SectionTitle } from "./SectionTitle";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <SectionTitle title="Frequently Asked Questions" />
      <div className="grid gap-3 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question} className="rounded-lg border border-slate-200 bg-white shadow-sm">
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-extrabold text-ink"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
              >
                {faq.question}
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-slate-500 transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen ? (
                <p className="border-t border-slate-100 px-4 py-4 text-sm font-medium leading-6 text-slate-600">
                  {faq.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
