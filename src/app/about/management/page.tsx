import type { Metadata } from 'next'
import Link from 'next/link'
import { CAMP } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Руководство организации',
}

const management = [
  {
    name: 'Белова Наталья Сергеевна',
    role: 'Директор',
    fullRole: 'Директор спортивно-оздоровительного комплекса «Ракета»',
    education: 'Высшее педагогическое образование. РГПУ им. А.И. Герцена, специальность «Педагогика и психология», 2007 г.',
    experience: '17 лет в сфере детского отдыха и оздоровления',
    phone: CAMP.phone,
    email: CAMP.email,
    hours: CAMP.workingHours,
    initials: 'НБ',
    color: 'bg-forest',
  },
  {
    name: 'Морозов Александр Петрович',
    role: 'Заместитель директора',
    fullRole: 'Заместитель директора по воспитательной и спортивной работе',
    education: 'Высшее образование. НГУ им. П.Ф. Лесгафта, специальность «Физическая культура и спорт», 2009 г.',
    experience: '12 лет, мастер спорта по лёгкой атлетике',
    phone: CAMP.phone,
    email: CAMP.email,
    hours: CAMP.workingHours,
    initials: 'АМ',
    color: 'bg-sky-camp',
  },
]

export default function ManagementPage() {
  return (
    <main>
      <div className="page-hero">
        <div className="container-camp">
          <nav className="flex items-center gap-2 text-white/65 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Главная</Link>
            <span>/</span>
            <Link href="/about" className="hover:text-white transition-colors">Об организации</Link>
            <span>/</span>
            <span className="text-white/80">Руководство</span>
          </nav>
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">Руководство</h1>
          <p className="text-white/75 text-lg">Административный состав СОК «Ракета»</p>
        </div>
      </div>

      <div className="section-py">
        <div className="container-camp max-w-4xl">
          <div className="space-y-6">
            {management.map((person) => (
              <div key={person.name} className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className={`${person.color} p-8 flex flex-col items-center justify-center min-w-[180px]`}>
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center font-heading font-black text-3xl text-white mb-3">
                      {person.initials}
                    </div>
                    <div className="text-white/80 text-sm text-center font-medium">
                      {person.role}
                    </div>
                  </div>
                  <div className="p-8 flex-1">
                    <h2 className="font-heading font-bold text-2xl text-ink mb-1">{person.name}</h2>
                    <div className="text-leaf font-semibold text-base mb-5">{person.fullRole}</div>
                    <dl className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Образование</dt>
                        <dd className="text-gray-700 text-base leading-relaxed">{person.education}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Опыт</dt>
                        <dd className="text-gray-700 text-base">{person.experience}</dd>
                      </div>
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Телефон (приёмная)</dt>
                        <dd><a href={`tel:${CAMP.phoneRaw}`} className="text-forest text-base font-medium hover:underline">{person.phone}</a></dd>
                      </div>
                      <div>
                        <dt className="text-gray-400 text-sm font-medium mb-1">Email</dt>
                        <dd><a href={`mailto:${person.email}`} className="text-forest text-base font-medium hover:underline">{person.email}</a></dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-gray-400 text-sm font-medium mb-1">Часы приёма</dt>
                        <dd className="text-gray-700 text-base">{person.hours}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
