import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Phone, Calendar, Clock, Users } from 'lucide-react'
import { SESSIONS, CAMP } from '@/lib/data'
import Badge from '@/components/ui/Badge'
import MAXIcon from '@/components/ui/MAXIcon'

export const metadata: Metadata = {
  title: 'Смены и стоимость',
  description: 'Путёвки в СОК «Ракета» 2025: весенние, летние и осенние смены для детей 6–17 лет. Стоимость от 28 000 ₽. Что включено, как оформить.',
}

const included = [
  'Трансфер',
  'Проживание в корпусе (3–8 чел. в комнате)',
  '5-разовое питание по нормам СанПиН',
  'Полная программа мероприятий',
  'Занятия в кружках и секциях',
  'Медицинское обслуживание (педиатр 24/7)',
  'Спортивное оборудование и инвентарь',
  'Расходные материалы для кружков',
]

const notIncluded = [
  'Личные расходы ребёнка',
  'Дополнительные экскурсии (по желанию)',
]

const discounts = [
  { label: 'Ранняя запись (до 1 марта)', value: '−5%' },
  { label: 'Два и более детей из семьи', value: '−7%' },
  { label: 'Партнёрские организации', value: '−10%' },
]


export default function ServicesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Услуги и стоимость</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Услуги и стоимость</h1>
          <p className="text-white/75 text-lg max-w-xl">Путёвки 2025. Цены прозрачные, без скрытых платежей.</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          {/* Sessions */}
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {SESSIONS.map((s) => (
              <div key={s.id} className="bg-white rounded-3xl border-2 border-gray-100 hover:border-forest/20 p-7 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-leaf">{s.title}</div>
                  {s.badge && (
                    <Badge variant={s.badgeColor as 'red' | 'green'} size="sm">{s.badge}</Badge>
                  )}
                </div>
                <h3 className="font-heading font-black text-2xl text-ink mb-1">{s.theme}</h3>
                <p className="text-gray-400 text-sm mb-6">{s.themeDesc}</p>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.datesFull}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.duration} дней
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-forest flex-shrink-0" />
                    {s.ageFrom}–{s.ageTo} лет · {s.spotsLeft} мест
                  </div>
                </div>
                <div className="pt-5 border-t border-gray-100">
                  <div className="text-gray-400 text-xs mb-1">Полная стоимость</div>
                  <div className="font-heading font-black text-3xl text-forest mb-4">
                    {s.price.toLocaleString('ru-RU')} ₽
                  </div>
                  <a
                    href={CAMP.maxLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-forest hover:bg-forest-light text-white font-semibold text-sm transition-colors"
                  >
                    <MAXIcon className="w-4 h-4" />
                    Уточнить наличие мест
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* What's included */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-leaf-light rounded-3xl p-8">
              <h3 className="font-heading font-bold text-xl text-ink mb-5 flex items-center gap-2">
                <span className="w-6 h-6 bg-leaf rounded-lg flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </span>
                Включено в стоимость
              </h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 mb-5">
                <h3 className="font-heading font-bold text-xl text-ink mb-5">Оплачивается отдельно</h3>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                      {/* <span className="w-4 h-4 border-2 border-orange-300 rounded flex-shrink-0 mt-0.5" /> */}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Discounts */}
              <div className="bg-gold-light border border-yellow-100 rounded-3xl p-8">
                <h3 className="font-heading font-bold text-xl text-ink mb-5">Скидки</h3>
                <ul className="space-y-3">
                  {discounts.map((d) => (
                    <li key={d.label} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-gray-600">{d.label}</span>
                      <span className="font-bold text-gold-dark text-sm flex-shrink-0">{d.value}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-400 text-xs mt-4">Скидки не суммируются. Уточняйте при бронировании.</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-forest rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Готовы записаться?</h3>
              <p className="text-white/60">Позвоните или напишите в MAX — ответим и поможем с оформлением</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a href={`tel:${CAMP.phoneRaw}`} className="btn-outline-white">
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
      </div>
    </main>
  )
}
