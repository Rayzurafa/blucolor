"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, Clock, ArrowRight, Check, MapPin, ChevronDown } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { cn } from "@/lib/utils"

const contactInfo = [
  {
    icon: MapPin,
    label: "Indirizzo",
    value: "Via Giovanni Falcone, 4/A – 37066 Caselle (VR)",
    href: "https://maps.google.com/?q=Via+Giovanni+Falcone+4A+37066+Caselle+Sommacampagna+VR",
  },
  {
    icon: Phone,
    label: "Cellulare",
    value: "+39 349 753 1904",
    href: "tel:+393497531904",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@blucolorsas.com",
    href: "mailto:info@blucolorsas.com",
  },
]

const schedule = [
  { day: "Lun – Ven", hours: "07:00 – 19:00" },
  { day: "Sabato",    hours: "07:00 – 12:00" },
  { day: "Domenica",  hours: null },
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [fields, setFields] = useState({ firstName: "", lastName: "", email: "", service: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setFields({ firstName: "", lastName: "", email: "", service: "", message: "" })
    setFocusedField(null)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (field: string, value: string) => setFields(prev => ({ ...prev, [field]: value }))

  return (
    <section id="contact" className="relative py-16 md:py-24 overflow-hidden md:-scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/images/sc1.jpg" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-white/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <AnimatedSection className="mb-12 md:mb-16">
          <span className="text-neutral-400 text-sm mb-4 block">(contatti)</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Contattaci oggi stesso
            </h2>
            <p className="text-neutral-500 text-base max-w-sm">
              Sopralluogo gratuito e risposta entro 24 ore.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Form — sfondo blu navy */}
          <AnimatedSection animation="fade-right">
            <div className="bg-[#1d2456] rounded-2xl p-7 md:p-10">
              <h3 className="text-lg font-semibold text-white mb-7">Inviaci un messaggio</h3>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Nome */}
                  <div>
                    <label className="block md:hidden text-xs text-white/60 mb-1.5 ml-1">Nome</label>
                    <div className="relative">
                      <label className={cn(
                        "absolute left-4 transition-all duration-200 pointer-events-none text-sm hidden md:block",
                        focusedField === "firstName" || fields.firstName
                          ? "top-2 text-xs text-[#3c76ad]"
                          : "top-1/2 -translate-y-1/2 text-white/40"
                      )}>
                        Nome
                      </label>
                      <input
                        type="text"
                        value={fields.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className={cn(
                          "w-full px-4 py-3 md:pt-7 md:pb-2 rounded-xl border text-white bg-white/10 transition-all duration-200 outline-none placeholder-transparent",
                          focusedField === "firstName"
                            ? "border-[#3c76ad]"
                            : "border-white/15 hover:border-white/30"
                        )}
                        onFocus={() => setFocusedField("firstName")}
                        onBlur={() => !fields.firstName && setFocusedField(null)}
                      />
                    </div>
                  </div>
                  {/* Cognome */}
                  <div>
                    <label className="block md:hidden text-xs text-white/60 mb-1.5 ml-1">Cognome</label>
                    <div className="relative">
                      <label className={cn(
                        "absolute left-4 transition-all duration-200 pointer-events-none text-sm hidden md:block",
                        focusedField === "lastName" || fields.lastName
                          ? "top-2 text-xs text-[#3c76ad]"
                          : "top-1/2 -translate-y-1/2 text-white/40"
                      )}>
                        Cognome
                      </label>
                      <input
                        type="text"
                        className={cn(
                          "w-full px-4 py-3 md:pt-7 md:pb-2 rounded-xl border text-white bg-white/10 transition-all duration-200 outline-none",
                          focusedField === "lastName"
                            ? "border-[#3c76ad]"
                            : "border-white/15 hover:border-white/30"
                        )}
                        value={fields.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        onFocus={() => setFocusedField("lastName")}
                        onBlur={() => !fields.lastName && setFocusedField(null)}
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block md:hidden text-xs text-white/60 mb-1.5 ml-1">Indirizzo email</label>
                  <div className="relative">
                    <label className={cn(
                      "absolute left-4 transition-all duration-200 pointer-events-none text-sm hidden md:block",
                      focusedField === "email" || fields.email
                        ? "top-2 text-xs text-[#3c76ad]"
                        : "top-1/2 -translate-y-1/2 text-white/40"
                    )}>
                      Indirizzo email
                    </label>
                    <input
                      type="email"
                      value={fields.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={cn(
                        "w-full px-4 py-3 md:pt-7 md:pb-2 rounded-xl border text-white bg-white/10 transition-all duration-200 outline-none",
                        focusedField === "email"
                          ? "border-[#3c76ad]"
                          : "border-white/15 hover:border-white/30"
                      )}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => !fields.email && setFocusedField(null)}
                    />
                  </div>
                </div>

                {/* Servizio */}
                <div className="relative">
                  <div className="relative">
                    <select
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border text-white bg-white/10 transition-all duration-200 outline-none appearance-none cursor-pointer text-sm",
                        focusedField === "service"
                          ? "border-[#3c76ad]"
                          : "border-white/15 hover:border-white/30"
                      )}
                      value={fields.service}
                      onChange={(e) => handleChange("service", e.target.value)}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="" disabled className="bg-[#1d2456]">Seleziona un servizio…</option>
                      <option value="tinteggiatura-interna" className="bg-[#1d2456]">Tinteggiatura interna</option>
                      <option value="tinteggiatura-esterna" className="bg-[#1d2456]">Tinteggiatura esterna / facciata</option>
                      <option value="finiture-decorative" className="bg-[#1d2456]">Finiture decorative</option>
                      <option value="cartongesso" className="bg-[#1d2456]">Cartongesso e isolamenti</option>
                      <option value="antimuffa" className="bg-[#1d2456]">Trattamenti anti-muffa / umidità</option>
                      <option value="industriale" className="bg-[#1d2456]">Verniciatura industriale</option>
                      <option value="altro" className="bg-[#1d2456]">Altro</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                  </div>
                </div>

                {/* Messaggio */}
                <div>
                  <label className="block md:hidden text-xs text-white/60 mb-1.5 ml-1">Il tuo messaggio</label>
                  <div className="relative">
                    <label className={cn(
                      "absolute left-4 transition-all duration-200 pointer-events-none text-sm hidden md:block",
                      focusedField === "message" || fields.message
                        ? "top-3 text-xs text-[#3c76ad]"
                        : "top-4 text-white/40"
                    )}>
                      Il tuo messaggio
                    </label>
                    <textarea
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 md:pt-9 md:pb-2 rounded-xl border text-white bg-white/10 transition-all duration-200 outline-none resize-none",
                        focusedField === "message"
                          ? "border-[#3c76ad]"
                          : "border-white/15 hover:border-white/30"
                      )}
                      value={fields.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => !fields.message && setFocusedField(null)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={cn(
                    "w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold transition-all duration-300 text-sm",
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-[#3c76ad] hover:bg-[#3c76ad]/90 text-white hover:scale-[1.02] active:scale-[0.98]"
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      Messaggio inviato!
                    </>
                  ) : (
                    <>
                      Invia messaggio
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>

          {/* Info contatti — sfondo bianco */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="bg-white rounded-2xl p-7 md:p-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">Informazioni di contatto</h3>
                <p className="text-neutral-500 text-sm mb-8">
                  Hai domande o vuoi iniziare un progetto? Il sopralluogo è sempre gratuito.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[#3c76ad]/10 flex items-center justify-center group-hover:bg-[#3c76ad] transition-colors duration-300 flex-shrink-0">
                        <item.icon className="w-4 h-4 text-[#3c76ad] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400 mb-0.5">{item.label}</div>
                        <a href={item.href} className="text-sm font-medium text-neutral-800 hover:text-[#3c76ad] transition-colors duration-300">
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* Orari */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#3c76ad]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#3c76ad]" />
                    </div>
                    <div>
                      <div className="text-xs text-neutral-400 mb-1.5">Orari</div>
                      <div className="space-y-0.5">
                        {schedule.map((s) => (
                          <div key={s.day} className="grid grid-cols-[80px_1fr] text-sm gap-2">
                            <span className="font-medium text-neutral-800">{s.day}</span>
                            {s.hours
                              ? <span className="text-neutral-500">{s.hours}</span>
                              : <span className="text-red-400 font-medium">Chiuso</span>}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="mt-8 rounded-xl overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=Via+Giovanni+Falcone+4A+37066+Caselle+Sommacampagna+VR+Italy&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
