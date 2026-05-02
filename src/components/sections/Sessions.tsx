import { Calendar, Clock, Users, Phone } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'
import { SESSIONS, CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'

function SpotsBar({ total, left, light }: { total: number; left: number; light?: boolean }) {
  const pct = Math.round((left / total) * 100)
  const color = left < 20 ? 'bg-red-400' : left < 40 ? 'bg-gold' : 'bg-leaf'
  return (
    <div className="mb-5">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className={light ? 'text-white/60' : 'text-gray-500'}>Свободных мест</span>
        <span className={`font-bold ${left < 20 ? 'text-red-400' : left < 40 ? 'text-gold' : light ? 'text-white' : 'text-leaf'}`}>
          {left} из {total}
        </span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${light ? 'bg-white/20' : 'bg-gray-100'}`}>
        <div className={`h-full rounded-full transition-all ${light ? 'bg-white' : color}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export default function Sessions() {
  return (
    <section id="sessions" className="section-py bg-white">
      <div className="container-camp">
        <SectionHeader
          label="Смены 2025"
          title="4 смены на выбор"
          description="Весенние, летние, осенние и долгосрочная программа — одна цена для каждой."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {SESSIONS.map((s) => {
            const highlighted = s.id === 2
            return (
              <div
                key={s.id}
                className={`relative rounded-3xl border-2 p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  highlighted
                    ? 'border-forest bg-forest text-white shadow-lg'
                    : 'border-gray-200 bg-white shadow-md hover:border-forest/30'
                }`}
              >
                <div className={`text-xs font-bold uppercase tracking-widest mb-3 ${highlighted ? 'text-blue-300' : 'text-leaf'}`}>
                  {s.title}
                </div>

                {s.badge && (
                  <div className="absolute top-7 right-7">
                    <Badge variant={s.badgeColor as 'red' | 'green' | 'gold' | 'sky' | 'gray'} size="sm">
                      {s.badge}
                    </Badge>
                  </div>
                )}

                <h3 className={`font-heading font-black text-2xl mb-1 ${highlighted ? 'text-white' : 'text-ink'}`}>
                  {s.theme}
                </h3>
                <p className={`text-sm mb-6 ${highlighted ? 'text-white/75' : 'text-gray-500'}`}>
                  {s.themeDesc}
                </p>

                <div className="space-y-3 mb-6">
                  <div className={`flex items-center gap-3 text-base ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {s.datesFull}
                  </div>
                  <div className={`flex items-center gap-3 text-base ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    {s.duration} день
                  </div>
                  <div className={`flex items-center gap-3 text-base ${highlighted ? 'text-white/80' : 'text-gray-600'}`}>
                    <Users className="w-4 h-4 flex-shrink-0" />
                    {s.ageFrom}–{s.ageTo} лет
                  </div>
                </div>

                <div className={highlighted ? '[&_.text-gray-500]:text-white/70 [&_.text-leaf]:text-blue-300 [&_.bg-gray-100]:bg-white/20' : ''}>
                  <SpotsBar total={s.spotsTotal} left={s.spotsLeft} light={highlighted} />
                </div>

                <div className={`mt-auto pt-5 border-t ${highlighted ? 'border-white/20' : 'border-gray-100'}`}>
                  <div className={`text-xs mb-1 ${highlighted ? 'text-white/65' : 'text-gray-500'}`}>
                    Стоимость путёвки
                  </div>
                  <div className={`font-heading font-black text-3xl mb-5 ${highlighted ? 'text-gold' : 'text-forest'}`}>
                    {s.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <a
                    href={`tel:${CAMP.phoneRaw}`}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                      highlighted
                        ? 'bg-gold hover:bg-gold-dark text-ink'
                        : 'bg-forest hover:bg-forest-light text-white'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="bg-cream rounded-3xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="font-heading font-bold text-lg text-ink mb-1">Есть вопросы по сменам?</h4>
            <p className="text-gray-500 text-base">Позвоните или напишите — ответим на все вопросы и поможем с выбором</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href={`tel:${CAMP.phoneRaw}`} className="btn-outline-forest">
              <Phone className="w-4 h-4" />
              Позвонить
            </a>
            <a href={CAMP.maxLink} target="_blank" rel="noopener noreferrer" className="btn-max">
              <MAXIcon className="w-4 h-4" />
              Написать в MAX
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
