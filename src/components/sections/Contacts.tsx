import SectionHeader from '@/components/ui/SectionHeader'
import { Phone, Mail, MapPin } from 'lucide-react'
import { CAMP } from '@/lib/data'
import MAXIcon from '@/components/ui/MAXIcon'


export default function Contacts() {
  return (
    <section id="contacts" className="section-py bg-cream">
      <div className="container-camp">
        <SectionHeader
          label="Контакты"
          title="Свяжитесь с нами"
          description="Не держите вопросы при себе — мы отвечаем в тот же день. Предпочитаем живое общение длинным анкетам."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          {/* Left: contact cards */}
          <div className="space-y-4">
            {/* MAX — primary */}
            <a
              href={CAMP.maxLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#0077FF] rounded-3xl p-7 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/25 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <MAXIcon className="w-12 h-12 flex-shrink-0 rounded-2xl" />
                <div className="flex-1">
                  <div className="text-white/60 text-sm font-medium mb-1">Основной канал</div>
                  <div className="font-heading font-bold text-xl text-white mb-1">Написать в MAX</div>
                  <div className="text-white/70 text-sm">Ответим быстрее всего — обычно в течение часа в рабочее время</div>
                </div>
                <div className="text-white/40">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${CAMP.phoneRaw}`}
              className="block bg-white rounded-3xl p-7 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-forest/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-forest/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-forest" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm font-medium mb-1">Телефон</div>
                  <div className="font-heading font-bold text-xl text-ink mb-1">{CAMP.phone}</div>
                  <div className="text-gray-500 text-sm">{CAMP.workingHours}</div>
                </div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${CAMP.email}`}
              className="block bg-white rounded-3xl p-7 border border-gray-200 hover:-translate-y-1 hover:shadow-lg hover:border-leaf/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-leaf-light rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-leaf" />
                </div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm font-medium mb-1">Email</div>
                  <div className="font-heading font-bold text-lg text-ink mb-1">{CAMP.email}</div>
                  <div className="text-gray-500 text-sm">Для официальных запросов и документов</div>
                </div>
              </div>
            </a>

            {/* Address */}
            <div className="bg-white rounded-3xl p-7 border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-light rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold-dark" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm font-medium mb-1">Адрес</div>
                  <div className="font-semibold text-ink mb-1">{CAMP.address}</div>
                  <div className="text-gray-500 text-sm">{CAMP.distanceFromSpb}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: map placeholder + how to get there */}
          <div className="flex flex-col gap-5">
            {/* Map placeholder */}
            <div className="flex-1 bg-forest rounded-3xl overflow-hidden relative min-h-[280px]">
              <div className="absolute inset-0 bg-grid" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-ink" />
                </div>
                <div className="font-heading font-bold text-xl text-white mb-2">
                  СОК «Ракета»
                </div>
                <div className="text-white/60 text-sm mb-6">{CAMP.addressShort}</div>
                <a
                  href="https://yandex.ru/maps/?text=Ленинградская+область+Выборгский+район+Горьковское"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  Открыть в Яндекс.Картах
                </a>
              </div>
            </div>

            {/* How to get */}
            <div className="bg-white rounded-3xl border border-gray-200 p-7">
              <h4 className="font-heading font-bold text-lg text-ink mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-forest" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                </svg>
                Как добраться
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-forest rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">А</div>
                  <div>
                    <div className="font-semibold text-base text-ink">Трансфер от лагеря</div>
                    <div className="text-gray-500 text-sm mt-0.5">Комфортабельный автобус в сопровождении персонала и медработника — уточняйте при записи</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-sky-camp rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">М</div>
                  <div>
                    <div className="font-semibold text-base text-ink">На автомобиле</div>
                    <div className="text-gray-500 text-sm mt-0.5">Средне-Выборгское шоссе, 12 км, по указателю на пос. Горьковское (2,4 км)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-leaf rounded-lg flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">А</div>
                  <div>
                    <div className="font-semibold text-base text-ink">На автобусе</div>
                    <div className="text-gray-500 text-sm mt-0.5">М «Гражданский пр.» → маршр. №827 или М «Парнас» → авт. №830 до 12 км Средне-Выборгского шоссе, далее 2,4 км</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
