interface BadgeProps {
  children: React.ReactNode
  variant?: 'red' | 'green' | 'gold' | 'sky' | 'gray'
  size?: 'sm' | 'md'
}

const variants = {
  red: 'bg-red-50 text-red-600 border-red-100',
  green: 'bg-leaf-light text-leaf border-green-100',
  gold: 'bg-gold-light text-gold-dark border-yellow-100',
  sky: 'bg-sky-50 text-sky-camp border-sky-100',
  gray: 'bg-gray-50 text-gray-500 border-gray-100',
}

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3.5 py-1 text-sm',
}

export default function Badge({ children, variant = 'gray', size = 'md' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center font-semibold rounded-full border ${variants[variant]} ${sizes[size]}`}>
      {children}
    </span>
  )
}
