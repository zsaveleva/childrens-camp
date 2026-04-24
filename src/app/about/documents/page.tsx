import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Download } from 'lucide-react'
import { DOCUMENTS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Документы — Лицензии, заключения, программы',
}

export default function DocumentsPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Об организации</Link>
            <span>/</span>
            <span className="text-white/80">Документы</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Документы</h1>
          <p className="text-white/75 text-lg max-w-xl">
            Лицензии, заключения, программы — всё в открытом доступе. Никаких скрытых условий.
          </p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-3xl">
          <div className="space-y-3">
            {DOCUMENTS.map((doc) => (
              <a
                key={doc.title}
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-200 hover:border-forest/20 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-12 h-12 bg-leaf-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-leaf transition-colors">
                  <FileText className="w-6 h-6 text-leaf group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-ink group-hover:text-forest transition-colors truncate">{doc.title}</div>
                  <div className="text-gray-500 text-sm mt-0.5">PDF · {doc.year} год</div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 group-hover:text-leaf transition-colors flex-shrink-0">
                  <Download className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 p-6 bg-cream rounded-2xl border border-gray-200 text-base text-gray-600">
            <p className="mb-2">
              <strong className="text-ink">Не нашли нужный документ?</strong> Напишите нам — вышлем по запросу.
            </p>
            <div className="flex gap-4">
              <a href="mailto:raketa-lenobl@mail.ru" className="text-leaf hover:text-forest font-medium transition-colors">
                raketa-lenobl@mail.ru
              </a>
              <span className="text-gray-200">|</span>
              <a href="tel:+78123345566" className="text-leaf hover:text-forest font-medium transition-colors">
                +7 (812) 334-55-66
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
