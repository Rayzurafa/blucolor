"use client"

import { ArrowRight, Phone, Menu, Briefcase, Award, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const navLinks = [
    { label: "Chi Siamo", href: "#about", icon: Users },
    { label: "Servizi", href: "#services", icon: Briefcase },
    { label: "Certificazioni", href: "#why-us", icon: Award },
    { label: "Recensioni", href: "#recensioni", icon: MessageSquare },
    { label: "Contatti", href: "#contact", icon: Phone },
  ]

  return (
    <section className="relative min-h-screen w-full">
      {/* Sfondo: overflow-hidden solo sul contenitore media */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Video hero — nessuna immagine fallback, il video parte subito */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-top"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradiente — mobile più scuro per leggibilità */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "relative z-20 flex items-center justify-between px-6 py-6 md:px-12 lg:px-16 transition-all duration-700 delay-300",
        isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:-translate-y-4"
      )}>
        <Link href="/" className="group">
          <img
            src="/images/LogoVitter (7).png"
            alt="Blu Color"
            className="h-12 w-auto object-contain transition-opacity duration-300 group-hover:opacity-80"
          />
        </Link>

        {/* Link desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "text-sm font-medium text-white/90 transition-all duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all hover:after:w-full",
                isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-2"
              )}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu — native <details> so it works without JS */}
        <details className="md:hidden relative group/menu">
          <summary className="list-none flex items-center justify-center w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white cursor-pointer">
            <Menu className="w-5 h-5" />
          </summary>
          <div className="absolute right-0 top-full mt-3 w-64 rounded-2xl bg-[#1d2456]/95 backdrop-blur-xl border border-white/10 overflow-hidden z-30 shadow-2xl shadow-black/40">
            <div className="px-5 pt-4 pb-2">
              <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">Navigazione</span>
            </div>
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-5 py-3.5 text-white/80 active:text-white active:bg-white/10 transition-colors duration-200 text-sm font-medium"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10">
                  <item.icon className="w-4 h-4 text-[#3c76ad]" />
                </span>
                {item.label}
              </a>
            ))}
            <div className="px-5 py-3 mt-1 border-t border-white/10">
              <a
                href="tel:+393497531904"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-[#3c76ad] text-white text-sm font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                Chiamaci ora
              </a>
            </div>
          </div>
        </details>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] flex-col justify-end pb-14 px-6 md:justify-center md:pb-20 md:px-12 lg:px-16">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Pill badge */}
          <div className={cn(
            "mb-5 md:mb-8 transition-all duration-700 delay-500",
            isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-4"
          )}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-widest text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3c76ad]" />
              Imbianchini professionisti · VERONA
            </span>
          </div>

          {/* Headline */}
          <h1 className={cn(
            "mb-5 text-[2.6rem] leading-[1.08] font-bold tracking-tight text-white md:text-5xl lg:text-6xl md:mb-6 md:leading-[1.1] transition-all duration-700 delay-700 font-[family-name:var(--font-hero)]",
            isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
          )}>
            Diamo colore<br />agli spazi che ami.
          </h1>

          {/* Description */}
          <p className={cn(
            "mb-8 md:mb-10 text-[0.95rem] leading-relaxed text-white/80 max-w-xs md:max-w-xl md:text-lg transition-all duration-700 delay-[900ms]",
            isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
          )}>
            Tinteggiature interne ed esterne, finiture decorative e verniciature industriali per privati e aziende. Lavoriamo con cura, rispettiamo i tempi e lasciamo ogni cantiere perfettamente in ordine. Preventivo gratuito, senza impegno.
          </p>

          {/* CTA Buttons */}
          <div className={cn(
            "flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 transition-all duration-700",
            isLoaded ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
          )}
            style={{ transitionDelay: isLoaded ? "1100ms" : "0ms" }}
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#3c76ad] px-6 py-3.5 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#3c76ad]/90 hover:scale-105 active:scale-95"
            >
              Sopralluogo gratuito
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5 group-hover:scale-110">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
            <a
              href="tel:+393497531904"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3.5 md:py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              +39 349 753 1904
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
