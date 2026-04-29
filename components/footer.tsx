"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}
import { AnimatedSection } from "./animated-section"

const footerLinks = {
  services: [
    { label: "Tinteggiature interne/esterne", href: "#services" },
    { label: "Finiture decorative", href: "#services" },
    { label: "Cartongesso e isolamenti", href: "#services" },
    { label: "Verniciature industriali", href: "#services" },
    { label: "Trattamenti anti-muffa", href: "#services" },
  ],
  company: [
    { label: "Chi siamo", href: "#about" },
    { label: "Certificazioni", href: "#why-us" },
    { label: "Testimonianze", href: "#recensioni" },
    { label: "FAQ", href: "#faq" },
    { label: "Contatti", href: "#contact" },
  ],
  marchi: [
    { label: "Akzo Nobel", href: "#" },
    { label: "Oikos", href: "#" },
    { label: "San Marco", href: "#" },
    { label: "Sikkens", href: "#" },
    { label: "Geopietra", href: "#" },
  ],
}

const socialLinks = [
  { icon: IconInstagram, href: "https://www.instagram.com/blucolorsas/", label: "Instagram" },
  { icon: IconFacebook, href: "https://www.facebook.com/blucolorsas", label: "Facebook" },
]

export function Footer() {
  return (
    <footer className="bg-[#1d2456] text-white">
      {/* CTA Banner */}
      <AnimatedSection animation="fade-up">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="bg-[#3c76ad] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Sopralluogo gratuito, senza impegno
              </h3>
              <p className="text-white/80">
                Chiamaci o scrivici per fissare un appuntamento. Ti risponderemo entro 24 ore.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <a
                href="tel:+393497531904"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1d2456] text-white font-medium hover:bg-[#1d2456]/80 transition-all duration-300"
              >
                +39 349 753 1904
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#3c76ad] font-medium hover:bg-white/90 transition-all duration-300"
              >
                Scrivici
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Footer */}
      <div className="border-t border-white/10 bg-[#1d2456]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex mb-6 group">
                <Image
                  src="/images/LogoVitter (7).png"
                  alt="Blu Color"
                  width={220}
                  height={66}
                  className="h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <p className="text-neutral-400 mb-2 max-w-sm">
                Blu Color S.a.s.
              </p>
              <p className="text-neutral-400 mb-6 max-w-sm">
                Via Giovanni Falcone, 4/A<br />
                37066 Caselle di Sommacampagna (VR)<br />
                Professionisti nelle tinteggiature civili e industriali nel Veronese.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Servizi</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Azienda</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Marchi Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Marchi</h4>
              <ul className="space-y-3">
                {footerLinks.marchi.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-200 hover:translate-x-1 inline-block text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Blu Color S.a.s. Tutti i diritti riservati.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-primary transition-colors duration-200">
                Privacy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors duration-200">
                Cookie
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
