import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Доступная среда',
}

const physical = [
  'Пандусы у входов во все корпуса',
  'Санитарные комнаты, оборудованные для МГН',
  'Широкие проходы (не менее 1,2 м)',
  'Тактильные элементы навигации на территории',
  'Адаптированные спальные места',
  'Поручни в душевых и туалетных комнатах',
]

const organizational = [
  'Индивидуальное сопровождение ребёнка с ОВЗ',
  'Адаптация программы по запросу',
  'Специальное диетическое меню',
  'Коммуникация с сурдопереводчиком (по предварительному запросу)',
  'Сотрудники, прошедшие обучение по работе с детьми с ОВЗ',
]

const digital = [
  'Контраст текста соответствует WCAG 2.1 AA',
  'Все интерактивные элементы доступны с клавиатуры',
  'Все изображения имеют alt-описания',
  'Семантическая разметка HTML',
  'Шрифт не менее 16px в основном тексте',
]

export default function AccessibilityPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-white/80">Доступная среда</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Доступная среда</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Условия для детей с ограниченными возможностями здоровья и маломобильных групп населения
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-4xl">
          <div className="space-y-8">
            <div className="bg-white rounded-3xl border border-gray-200 p-8">
              <h2 className="font-heading font-bold text-2xl text-ink mb-6">Физическая доступность</h2>
              <ul className="space-y-3">
                {physical.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-gray-600">
                    <Check className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream rounded-3xl border border-gray-200 p-8">
              <h2 className="font-heading font-bold text-2xl text-ink mb-6">Организационные меры</h2>
              <ul className="space-y-3">
                {organizational.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-gray-600">
                    <Check className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                Для приёма ребёнка с ОВЗ просим предварительно связаться с нами не менее чем за 30 дней до начала смены для организации необходимых условий.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-gray-200 p-8">
              <h2 className="font-heading font-bold text-2xl text-ink mb-2">Цифровая доступность сайта</h2>
              <p className="text-gray-500 text-sm mb-6">Сайт разработан с учётом требований WCAG 2.1, уровень AA</p>
              <ul className="space-y-3">
                {digital.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-gray-600">
                    <Check className="w-5 h-5 text-sky-camp flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-forest rounded-3xl p-8 text-white">
              <h3 className="font-heading font-bold text-xl mb-3">Обратная связь по доступности</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Если вы столкнулись с барьером — физическим или цифровым — пожалуйста, сообщите нам. Мы рассматриваем все обращения и стремимся устранить проблемы.
              </p>
              <div className="flex gap-4">
                <a href="tel:+78123345566" className="text-green-300 font-semibold text-sm hover:text-white transition-colors">
                  +7 (812) 334-55-66
                </a>
                <span className="text-white/20">|</span>
                <a href="mailto:info@sozvezdie-camp.ru" className="text-green-300 font-semibold text-sm hover:text-white transition-colors">
                  info@sozvezdie-camp.ru
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
