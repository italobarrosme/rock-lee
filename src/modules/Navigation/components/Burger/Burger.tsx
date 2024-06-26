'use client'

import { cn } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, forwardRef } from 'react'

type Menu = {
  name: string
  icon?: string
  href?: string
  active: boolean
  onClick?: () => void
}

type BurguerProps = {
  logo: string
  menus: Menu[]
  isMenuOpen: boolean
  children?: ReactNode
}

export const Burger = forwardRef<HTMLUListElement, BurguerProps>(
  ({ logo, menus, isMenuOpen, children, ...props }: BurguerProps, ref) => {
    return (
      <nav
        {...props}
        className="top-0 flex h-20 w-full items-center justify-between gap-2 bg-brand-light px-4 shadow-sm"
      >
        <Link href="/" className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={42} height={42} />
          <h1 className="text-xs font-semibold text-brand-dark">
            Academia de Krav maga - Unidade Tamarineira
          </h1>
        </Link>
        {children}
        {!!isMenuOpen && (
          <ul
            ref={ref}
            className="absolute right-4  top-14 z-40 rounded-sm border bg-brand-light px-2 shadow-xl"
          >
            {menus.map((menu, index) => (
              <li
                key={index}
                className={cn(
                  'relative my-4 cursor-pointer flex-row items-center justify-between p-0 px-2 text-xs font-semibold text-brand-secondary hover:bg-brand-primary hover:text-white sm:flex',
                  menu.active ? 'text-brand-accent' : 'text-brand-secondary'
                )}
                onClick={menu.onClick}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
    )
  }
)

Burger.displayName = 'Burger'
