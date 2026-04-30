import SectionHeader from '@/components/ui/SectionHeader'
import { Shield, Eye, Heart, Siren, Users, Lock } from 'lucide-react'

const measures = [
  {
    icon: Shield,
    title: 'Охрана периметра',
    desc: 'Круглосуточная охрана, пропускной режим, заборы по всему периметру. Доступ посторонних исключён.',
  },
  {
    icon: Eye,
    title: 'Видеонаблюдение',
    desc: '24 камеры на территории, запись хранится 30 дней. Все общественные зоны под наблюдением.',
  },
  {
    icon: Heart,
    title: 'Медицинский пункт',
    desc: 'Лицензированный врач-педиатр и медсестра дежурят круглосуточно. Оборудованная медкомната.',
  },
  {
    icon: Siren,
    title: 'Пожарная безопасность',
    desc: 'Автоматическая сигнализация во всех корпусах, огнетушители, план эвакуации. Ежегодные учения.',
  },
  {
    icon: Users,
    title: 'Проверка персонала',
    desc: 'Каждый сотрудник проверен по реестру МВД. Педагогическое образование — обязательное требование.',
  },
  {
    icon: Lock,
    title: 'Ночной режим',
    desc: 'С 22:00 дети в корпусах. Дежурный вожатый в каждом отряде. Регулярный обход территории.',
  },
]

export default function Safety() {
  return (
    <section id="safety" className="section-py bg-cream">
      <div className="container-camp">
        <SectionHeader
          label="Безопасность"
          title="Спокойствие родителей — наш приоритет"
          description="Мы не просим вас верить на слово. Все меры безопасности задокументированы и проверяются надзорными органами ежегодно."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {measures.map((m) => (
            <div key={m.title} className="card">
              <div className="inline-flex p-3 bg-forest/10 rounded-xl mb-4">
                <m.icon className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-lg text-ink mb-2">{m.title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Certification strip */}
        <div className="bg-forest rounded-3xl p-8 md:p-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="font-heading font-bold text-2xl text-white mb-3">
                Официально и прозрачно
              </h3>
              <p className="text-white/75 text-sm leading-relaxed mb-4">
                Лагерь работает по лицензии, проходит ежегодные плановые проверки Роспотребнадзора, МЧС и органов образования. Результаты проверок — в открытом доступе в разделе «Документы».
              </p>
              <div className="flex flex-wrap gap-3">
                {['Роспотребнадзор', 'МЧС', 'Комитет по образованию', 'Минтруд'].map((org) => (
                  <span key={org} className="px-3 py-1.5 bg-white/10 text-white/80 text-xs font-medium rounded-lg">
                    ✓ {org}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <div className="font-heading font-black text-3xl text-gold mb-1">100%</div>
                <div className="text-white/75 text-sm">Выполнение предписаний</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 text-center">
                <div className="font-heading font-black text-3xl text-blue-300 mb-1">0</div>
                <div className="text-white/75 text-sm">Нарушений за 2025 год</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
