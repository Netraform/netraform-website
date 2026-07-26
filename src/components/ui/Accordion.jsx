import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-navy/10 border-t border-b border-navy/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-navy text-base">{item.q}</span>
              <FiPlus className={`shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`} style={{ display: 'grid' }}>
              <div className="overflow-hidden">
                <p className="text-sm text-muted leading-relaxed pr-8">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
