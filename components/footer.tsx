'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FiMapPin,
  FiPhoneCall,
  FiMail,
  FiArrowUpRight,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
  FiYoutube
} from 'react-icons/fi'
import { logo } from '@/assets'

type FooterLink = {
  name: string
  href: string
}

const quickLinks: FooterLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Services', href: '/services' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Contact Us', href: '/contact' },
]

const servicesLinks: FooterLink[] = [
   { name: 'MBBS In India', href: '/services/mbbs-in-india' },
      { name: 'Btech Admission', href: '/services/b-tech-admission' },
        { name: 'MBBS In Abroad', href: '/services/mbbs-abroad' },
         { name: 'BBA', href: '/services/bba' },
          { name: 'Bcom', href: '/services/b-com' },
          { name: 'Online MBA in Business Analytics', href: '/services/online-mba-in-business-analytics' },
]

const socialLinks = [
  { icon: FiFacebook, href: '#', label: 'Facebook' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiYoutube, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="border-t  bg-linear-to-br from-violet-700 via-blue-700 to-blue-700 pt-16  text-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand Info (2 Columns on Large Screens) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="">
              <Image src={logo} alt="Logo" className="max-w-46 w-[70vw] mb-4 object-contain brightness-0 invert" />           </Link>

            <p className="max-w-sm text-sm text-gray-50 leading-relaxed">
              Providing expert educational counseling and admission guidance for medical, engineering, and management courses in India and abroad.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-50 transition-colors hover:bg-white hover:text-blue-600"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-zinc-100">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-bold text-zinc-100">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 font-medium text-gray-300 transition-colors hover:text-white"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-bold text-zinc-100">Get In Touch</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-gray-50">
                <FiMapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" />
                <span>Vasant Kunj, New Delhi - 110070, <br />  Dehradun
Uttarakhand, India.</span>
              </li>

              <li>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-50 transition-colors hover:text-white"
                >
                  <FiPhoneCall className="h-5 w-5 shrink-0 text-white" />
                  <span className="font-medium">+91-8510930478</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:info@careercoachpradeep.com"
                  className="flex items-center gap-3 text-gray-50 transition-colors hover:text-white"
                >
                  <FiMail className="h-5 w-5 shrink-0 text-white" />
                  <span className="font-medium">info@careercoachpradeep.com</span>
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-blue-600 hover:text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-zinc-700"
              >
                <span>Apply For Admission</span>
                <FiArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 py-6 sm:flex-row text-xs text-gray-50 font-medium">
          <p>© {new Date().getFullYear()} Pradeep Consultancy. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}