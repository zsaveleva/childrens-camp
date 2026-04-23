import { Phone } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <div className="bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-2xl px-4 py-3" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
        <div className="flex gap-3">
          <a
            href={`tel:${CAMP.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-forest text-white font-semibold rounded-2xl hover:bg-forest-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            Позвонить
          </a>
          <a
            href={CAMP.maxLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-ink font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <MAXIcon className="w-5 h-5" />
            MAX
          </a>
        </div>
      </div>
    </div>
  )
}
