'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown, FiChevronRight, FiMenu, FiX, FiPhoneCall } from 'react-icons/fi'

export type NavItem = {
  name: string
  href: string
  subnav?: NavItem[]
}

const navLinks: NavItem[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  {
    name: 'Services',
    href: '/services',
    subnav: [
      { name: 'MBBS In Abroad', href: '/services/mbbs-abroad' },
      { name: 'MBBS In India', href: '/services/mbbs-india' },
      { name: 'Btech Admission', href: '/services/btech-admission' },
      {
        name: 'Management Course Admissions',
        href: '/services/management-admissions',
        subnav: [
          { name: 'BBA', href: '/courses/bba' },
          { name: 'Bcom', href: '/courses/bcom' },
          { name: 'Online MBA in Business Analytics', href: '/courses/online-mba-analytics' },
          { name: 'Online MBA in Marketing', href: '/courses/online-mba-marketing' },
          { name: 'Online MBA in Finance', href: '/courses/online-mba-finance' },
        ],
      },
      { name: 'Career Counselling', href: '/services/career-counselling' },
    ],
  },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Contact Us', href: '/contact-us' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm shadow-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold text-white shadow-md shadow-blue-500/20">
                Pc
              </div>
              <span className="mt-1 text-2xl font-bold leading-[0.8] text-zinc-800">
                Pradeep <br />
                <span className="text-lg font-medium text-blue-600">Consultancy</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <DesktopNavItem key={link.name} item={link} />
            ))}
          </nav>

          {/* Right Side Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/contact-us"
              className="flex items-center gap-2 rounded-3xl border border-blue-600 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:text-blue-600"
            >
              <FiPhoneCall className="h-4 w-4 text-blue-600" />
              <span>Call Now</span>
            </Link>

            <Link
              href="/apply"
              className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-orange-600 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-xl p-2.5 text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-gray-100 bg-white lg:hidden"
          >
            <div className="max-h-[80vh] space-y-2 overflow-y-auto px-4 pb-6 pt-4">
              {navLinks.map((link) => (
                <MobileNavItem key={link.name} item={link} onClose={closeMobileMenu} />
              ))}

              <div className="mt-2 flex flex-col gap-3 border-t border-gray-100 pt-4">
                <Link
                  href="/apply"
                  onClick={closeMobileMenu}
                  className="w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* -------------------------------------------------------------------------- */
/*                            Desktop Components                              */
/* -------------------------------------------------------------------------- */

function DesktopNavItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubnav = item.subnav && item.subnav.length > 0

  if (!hasSubnav) {
    return (
      <Link
        href={item.href}
        className="py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center gap-1.5 py-2 font-medium text-gray-700 transition-colors hover:text-blue-600"
      >
        <span>{item.name}</span>
        <FiChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-blue-600' : ''
          }`}
        />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute -left-2 top-full z-50 w-64 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl"
          >
            {item.subnav?.map((subItem) => (
              <DesktopSubMenuItem key={subItem.name} item={subItem} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function DesktopSubMenuItem({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubnav = item.subnav && item.subnav.length > 0

  if (!hasSubnav) {
    return (
      <Link
        href={item.href}
        className="block px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50/50 hover:text-blue-600"
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50/50 hover:text-blue-600"
      >
        <span>{item.name}</span>
        <FiChevronRight className="h-4 w-4 text-gray-400" />
      </Link>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full top-0 z-50 ml-0 w-64 rounded-2xl border border-gray-100 bg-white py-2 shadow-xl"
          >
            {item.subnav?.map((nestedItem) => (
              <Link
                key={nestedItem.name}
                href={nestedItem.href}
                className="block px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-blue-50/50 hover:text-blue-600"
              >
                {nestedItem.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


/* -------------------------------------------------------------------------- */
/*                            Mobile Components                               */
/* -------------------------------------------------------------------------- */

function MobileNavItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const hasSubnav = item.subnav && item.subnav.length > 0

  if (!hasSubnav) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="block rounded-xl px-3 py-2.5 text-base font-medium text-gray-800 transition-colors hover:bg-gray-50"
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div className="py-1">
      <div className="flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors hover:bg-gray-50">
        <Link
          href={item.href}
          onClick={onClose}
          className="text-base font-medium text-gray-800"
        >
          {item.name}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-1 text-gray-500 transition-colors hover:text-blue-600"
          aria-expanded={isOpen}
        >
          <FiChevronDown
            className={`h-5 w-5 transition-transform duration-200 ${
              isOpen ? 'rotate-180 text-blue-600' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-3 mt-1 space-y-1 overflow-hidden border-l-2 border-blue-100 pl-3"
          >
            {item.subnav?.map((subItem) => (
              <MobileNavItem key={subItem.name} item={subItem} onClose={onClose} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}