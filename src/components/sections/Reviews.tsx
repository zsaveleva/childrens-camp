import SectionHeader from '@/components/ui/SectionHeader'
import { REVIEWS, CAMP } from '@/lib/data'
import VKIcon from '@/components/ui/VKIcon'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section-py bg-cream">
      <div className="container-camp">
        <SectionHeader
          label="Отзывы родителей"
          title="Они уже отправляли к нам детей"
          description="Настоящие отзывы от родителей — без модерации и приукрашивания. Больше отзывов — в группе ВКонтакте."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {REVIEWS.map((r) => (
            <div key={r.name} className="card-hover flex flex-col">
              {/* Rating */}
              <StarRating rating={r.rating} />

              {/* Quote */}
              <div className="flex-1 mt-4 mb-5">
                <p className="text-gray-600 text-base leading-relaxed">
                  «{r.text}»
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                <div className="w-9 h-9 bg-forest rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-gray-400 text-xs">{r.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-3xl border border-gray-200 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-heading font-black text-5xl text-forest">4.9</span>
              <div>
                <StarRating rating={5} />
                <div className="text-gray-400 text-sm mt-1">из 5 на основе 340+ отзывов</div>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              97% родителей готовы рекомендовать лагерь друзьям
            </p>
          </div>
          <a
            href={CAMP.vkGroup}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-forest flex-shrink-0"
          >
            <VKIcon className="w-4 h-4" />
            Все отзывы в ВКонтакте
          </a>
        </div>
      </div>
    </section>
  )
}
