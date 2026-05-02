import SectionHeader from '@/components/ui/SectionHeader'
import { Check, Home, UtensilsCrossed } from 'lucide-react'

const housing = [
  'Капитальный ремонт 2018 г.',
  '3–8 человек в комнате, раздельные мальчики/девочки',
  'Горячая вода и индивидуальные душевые кабины',
  'Ежедневная двухразовая уборка и смена белья раз в неделю',
  'Просторные холлы для отдыха',
  'Отдельные секции для разных возрастных групп',
]

const food = [
  '5-разовое питание: завтрак, обед, полдник, ужин, 2-й ужин',
  'Меню разработано детским диетологом',
  'Соответствие нормам СанПиН 2.3/2.4.3590-20',
  'Индивидуальное меню при аллергиях и ограничениях',
  'Свежие овощи и фрукты ежедневно',
  'Собственная столовая с современным оборудованием',
]

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-leaf-light flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-leaf" />
          </div>
          <span className="text-gray-700 text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Accommodation() {
  return (
    <section id="accommodation" className="section-py bg-white">
      <div className="container-camp">
        <SectionHeader
          label="Проживание и питание"
          title="Комфорт, который заслужен"
          description="Детям должно быть не только весело, но и удобно. Современные корпуса и качественное питание — основа здорового отдыха."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-forest/10 rounded-xl flex items-center justify-center">
                <Home className="w-5 h-5 text-forest" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-ink">Проживание</h3>
                <p className="text-gray-400 text-sm">7 корпусов</p>
              </div>
            </div>
            <CheckList items={housing} />
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-leaf-light rounded-xl flex items-center justify-center">
                <UtensilsCrossed className="w-5 h-5 text-leaf" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-ink">Питание</h3>
                <p className="text-gray-400 text-sm">5 раз в день · По СанПиН</p>
              </div>
            </div>
            <CheckList items={food} />
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl border border-leaf/20 p-5 flex items-start gap-4">
          <div className="w-8 h-8 bg-leaf-light rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-4 h-4 text-leaf" />
          </div>
          <p className="text-gray-700 text-base leading-relaxed">
            <strong className="text-ink font-semibold">Аллергии и диеты:</strong> обязательно сообщите о медицинских ограничениях при оформлении путёвки. Меню для ребёнка будет скорректировано — бесплатно и без лишних вопросов.
          </p>
        </div>
      </div>
    </section>
  )
}
