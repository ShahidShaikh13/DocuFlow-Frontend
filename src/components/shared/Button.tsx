'use client'

import Link from 'next/link'
import { type ComponentPropsWithoutRef } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary'
  href?: string
}

export function Button({
  variant = 'primary',
  className = '',
  href,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-colors'
  const styles = {
    primary: `${baseStyles} bg-[#3B82F6] text-white hover:bg-[#3B82F6]/90`,
    secondary: `${baseStyles} bg-gray-100 text-gray-900 hover:bg-gray-200`,
  }

  const classes = `${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    )
  }

  return <button className={classes} {...props} />
} 