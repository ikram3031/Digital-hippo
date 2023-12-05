'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
    category: Category
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
  }

const NavItem = ({
    isAnyOpen,
    category,
    handleOpen,
    close,
    isOpen,
  }: NavItemProps) => {
  return (
    <div className='flex'>
        <div className="relative items-center">
            <button className='gap-1.5'></button>
        </div>
    </div>
  )
}

export default NavItem