export default function Button({ children, variant = 'primary', as: Tag = 'a', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary'
  const variants = {
    primary: 'bg-primary text-white hover:bg-blue-700 shadow-soft hover:shadow-card-hover hover:-translate-y-0.5',
    secondary: 'bg-transparent text-navy border border-navy/15 hover:border-primary hover:text-primary',
    ghost: 'bg-white/10 text-white border border-white/25 hover:bg-white/20',
    'on-navy': 'bg-white text-navy hover:bg-surface',
  }
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
