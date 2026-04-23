'use client'

import { useState } from 'react'
import { ChevronDown, Phone } from 'lucide-react'
import { FAQ as faqData, CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl overflow-hidden transition-all duration-200 ${open ? 'border-forest/30 shadow-sm' : 'border-gray-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-gray-50/50 transition-colors"
      >
        <span className={`font-heading font-semibold text-base leading-snug ${open ? 'text-forest' : 'text-ink'}`}>
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-forest' : 'text-gray-400'}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-6 pb-5">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-gray-600 text-base leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section id="faq" className="section-py bg-white">
      <div className="container-camp">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20">
          {/* Left */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-sm font-semibold uppercase tracking-wider text-leaf">FAQ</span>
            <h2 className="section-title mb-5 mt-3">Ответы на главные вопросы</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Не нашли ответа? Позвоните или напишите нам — ответим быстро и без скриптов.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={CAMP.maxLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-max"
              >
                <MAXIcon className="w-4 h-4" />
                Написать в MAX
              </a>
              <a href={`tel:${CAMP.phoneRaw}`} className="btn-outline-forest">
                <Phone className="w-4 h-4" />
                {CAMP.phone}
              </a>
            </div>

            {/* Working hours */}
            <div className="mt-6 p-4 bg-cream rounded-2xl border border-gray-200">
              <div className="text-sm font-medium text-gray-500 mb-1">Время работы</div>
              <div className="text-base text-gray-700">{CAMP.workingHours}</div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="space-y-3">
            {faqData.map((item, i) => (
              <FAQItem
                key={i}
                q={item.q}
                a={item.a}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
