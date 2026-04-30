import SectionHeader from '@/components/ui/SectionHeader'
import VKIcon from '@/components/ui/VKIcon'
import { CAMP } from '@/lib/data'

const photos = [
  { label: 'Открытие смены', sub: 'Торжественная линейка', color: 'from-forest to-forest-light', size: 'large' },
  { label: 'Спортивные игры', sub: 'Волейбол на пляже', color: 'from-blue-700 to-blue-500', size: 'small' },
  { label: 'Творческая мастерская', sub: 'Арт-студия', color: 'from-gold to-yellow-600', size: 'small' },
  { label: 'Вечерний костёр', sub: 'Традиция лагеря', color: 'from-orange-600 to-red-700', size: 'medium' },
  { label: 'Робототехника', sub: 'Наука и IT', color: 'from-violet-600 to-purple-800', size: 'medium' },
  { label: 'Поход в лес', sub: 'Приключения', color: 'from-leaf to-green-700', size: 'small' },
  { label: 'День самоуправления', sub: 'Отряды против директора', color: 'from-rose-500 to-pink-700', size: 'small' },
  { label: 'Бассейн', sub: 'Плавание каждый день', color: 'from-cyan-500 to-sky-700', size: 'large' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section-py bg-white overflow-hidden">
      <div className="container-camp">
        <SectionHeader
          label="Фотогалерея"
          title="Жизнь в лагере"
          description="Каждый день — новые события, новые фото. Следите за сменой в группе ВКонтакте в реальном времени."
        />

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {/* Row 1: large + 2 small */}
          <div className={`col-span-2 row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br ${photos[0].color} min-h-[200px] md:min-h-[280px] group `}>
            <div className="absolute inset-0 flex items-end p-6">
              <div>
                <div className="font-heading font-bold text-white text-xl mb-1">{photos[0].label}</div>
                <div className="text-white/60 text-sm">{photos[0].sub}</div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-4 right-4 text-white/40 text-4xl">📸</div>
          </div>

          {[1, 2].map((i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${photos[i].color} min-h-[130px] group `}
            >
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-semibold text-white text-sm">{photos[i].label}</div>
              </div>
            </div>
          ))}

          {/* Row 2: 2 medium */}
          {[3, 4].map((i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${photos[i].color} min-h-[130px] group `}
            >
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="font-heading font-semibold text-white text-sm">{photos[i].label}</div>
                <div className="text-white/60 text-xs">{photos[i].sub}</div>
              </div>
            </div>
          ))}

          {/* Row 3: 2 small + large */}
          {[5, 6].map((i) => (
            <div
              key={i}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${photos[i].color} min-h-[130px] group `}
            >
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-3 left-3">
                <div className="font-heading font-semibold text-white text-sm">{photos[i].label}</div>
              </div>
            </div>
          ))}

          <div className={`col-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br ${photos[7].color} min-h-[140px] group `}>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-4 left-6">
              <div className="font-heading font-bold text-white text-xl mb-1">{photos[7].label}</div>
              <div className="text-white/60 text-sm">{photos[7].sub}</div>
            </div>
            <div className="absolute top-4 right-4 text-white/40 text-4xl">🏊</div>
          </div>
        </div>

        {/* VK link */}
        <div className="text-center">
          <a
            href={CAMP.vkGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-forest"
          >
            <VKIcon className="w-5 h-5" />
            Все фото в группе ВКонтакте
          </a>
          <p className="text-gray-400 text-sm mt-3">Публикуем фото каждый день во время смены</p>
        </div>
      </div>
    </section>
  )
}
