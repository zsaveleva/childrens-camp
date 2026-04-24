import SectionHeader from '@/components/ui/SectionHeader'
import { ADVANTAGES } from '@/lib/data'
import { Shield, UtensilsCrossed, Home, Star, Trees, Users } from 'lucide-react'

const icons = {
  shield: Shield,
  utensils: UtensilsCrossed,
  home: Home,
  star: Star,
  tree: Trees,
  users: Users,
}

const cardColors = [
  { bg: 'bg-forest', icon: 'bg-white/15 text-white', text: 'text-white/70', title: 'text-white' },
  { bg: 'bg-white', icon: 'bg-leaf-light text-leaf', text: 'text-gray-500', title: 'text-ink' },
  { bg: 'bg-white', icon: 'bg-leaf-light text-leaf', text: 'text-gray-500', title: 'text-ink' },
  { bg: 'bg-white', icon: 'bg-gold-light text-gold-dark', text: 'text-gray-500', title: 'text-ink' },
  { bg: 'bg-white', icon: 'bg-leaf-light text-leaf', text: 'text-gray-500', title: 'text-ink' },
  { bg: 'bg-forest', icon: 'bg-white/15 text-white', text: 'text-white/70', title: 'text-white' },
]

export default function Advantages() {
  return (
    <section id="advantages" className="section-py bg-cream">
      <div className="container-camp">
        <SectionHeader
          label="Почему нас выбирают"
          title="6 причин, которые важны родителям"
          description="Прозрачность — наш главный принцип. Ничего не скрываем: все документы открыты, все условия известны заранее."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADVANTAGES.map((adv, i) => {
            const color = cardColors[i]
            const Icon = icons[adv.icon as keyof typeof icons]
            return (
              <div
                key={adv.title}
                className={`${color.bg} rounded-3xl p-7 border border-gray-200`}
              >
                <div className={`inline-flex p-3 rounded-xl mb-4 ${color.icon}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`font-heading font-bold text-lg mb-2 ${color.title}`}>
                  {adv.title}
                </h3>
                <p className={`text-base leading-relaxed ${color.text}`}>
                  {adv.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
