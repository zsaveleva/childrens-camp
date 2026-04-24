import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Материально-техническая база',
  description: 'Территория, корпуса, спортивные площадки и питание в СОК «Ракета»: 8 га хвойного леса в заказнике «Гладышевский», Ленинградская область.',
}

const facilities = [
  {
    category: 'Жилые корпуса',
    items: [
      '4 жилых корпуса, 2018–2020 годов постройки',
      '60 комнат на 4–6 человек каждая',
      'Горячая вода, индивидуальные душевые',
      'Системы отопления и кондиционирования',
      'Wi-Fi на всей территории корпусов',
      'Стеллажи и шкафы для личных вещей',
    ],
  },
  {
    category: 'Спортивная инфраструктура',
    items: [
      'Открытый плавательный бассейн (25 м)',
      'Футбольное поле с искусственным покрытием',
      '2 волейбольных и 2 баскетбольных площадки',
      'Теннисный корт',
      'Скалодром и верёвочный курс',
      'Спортивный зал (700 м²)',
    ],
  },
  {
    category: 'Творческие пространства',
    items: [
      'Арт-студия с профессиональным освещением',
      'Музыкальная студия со звукоизоляцией',
      'Театральная сцена на 300 мест',
      'Студия фото и видео',
      'Библиотека (1 200 книг)',
      'IT-класс (24 компьютера, 3D-принтер)',
    ],
  },
  {
    category: 'Питание и столовая',
    items: [
      'Столовая на 240 посадочных мест',
      'Современное технологическое оборудование 2021 г.',
      'Собственная заготовочная кухня',
      'Система ХАССП (безопасность питания)',
      'Отдельная линия для аллергиков',
      'Обеденный зал с зонированием по возрасту',
    ],
  },
  {
    category: 'Медицинский пункт',
    items: [
      'Лицензированный медицинский пункт',
      'Диагностическое оборудование',
      'Изолятор на 6 мест',
      'Запас медикаментов и перевязочных материалов',
      'Договор с районной больницей (12 км)',
      'Автомобиль скорой помощи на территории (в период смен)',
    ],
  },
  {
    category: 'Территория',
    items: [
      '15 га огороженной территории',
      'Собственный лес — сосновый бор',
      'Озеро с оборудованным пляжем',
      'Костровая площадка',
      'Экологическая тропа (2 км)',
      'Видеонаблюдение: 24 камеры',
    ],
  },
]

export default function FacilitiesPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Материально-техническое обеспечение</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            Материально-техническая база
          </h1>
          <p className="text-white/75 text-lg max-w-xl">
            Условия проживания, спортивная инфраструктура и творческие пространства
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f) => (
              <div key={f.category} className="bg-white rounded-3xl border border-gray-200 p-7">
                <h3 className="font-heading font-bold text-lg text-ink mb-5 pb-4 border-b border-gray-100">
                  {f.category}
                </h3>
                <ul className="space-y-2.5">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-base text-gray-600">
                      <Check className="w-4 h-4 text-leaf flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div id="safety" className="mt-10 bg-forest rounded-3xl p-8 md:p-10">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">Безопасность объекта</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { label: 'Охрана', value: 'Круглосуточно', icon: '🛡️' },
                { label: 'Камер наблюдения', value: '24', icon: '📷' },
                { label: 'До больницы', value: '12 км', icon: '🏥' },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-2xl p-5 text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="font-heading font-black text-2xl text-white mb-1">{item.value}</div>
                  <div className="text-white/60 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
