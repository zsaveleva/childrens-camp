interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col ${alignClass} mb-10 md:mb-14`}>
      {label && (
        <span className={`text-sm font-semibold uppercase tracking-wider mb-3 ${light ? 'text-blue-300' : 'text-leaf'}`}>
          {label}
        </span>
      )}
      <h2 className={light ? 'section-title-white' : 'section-title'}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 ${light ? 'section-desc-white' : 'section-desc'} ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
