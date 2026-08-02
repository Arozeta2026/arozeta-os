import React from 'react'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: Props) {
  return (
    <div className={clsx('card-glass p-4 shadow-sm transition-shadow hover:shadow-md', className)}>
      {children}
    </div>
  )
}
