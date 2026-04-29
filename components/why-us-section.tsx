"use client"

import { Users, Shield, Leaf, Clock, Heart, Award, ArrowRight } from "lucide-react"

import { AnimatedSection } from "./animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const features = [
  {
    icon: Users,
    title: "Azienda Familiare",
    description: "Passione trasmessa di generazione in generazione. Un team affiatato che cura ogni progetto come fosse il proprio.",
  },
  {
    icon: Clock,
    title: "Tempi Rispettati",
    description: "Lavori consegnati puntualmente, senza sorprese o ritardi. Squadre esperte che lavorano con precisione svizzera.",
  },
  {
    icon: Shield,
    title: "Materiali Certificati",
    description: "Solo prodotti con schede tecniche dettagliate: Akzo Nobel, Sikkens, San Marco, Oikos e altri leader di settore.",
  },
  {
    icon: Heart,
    title: "Pulizia e Rispetto",
    description: "Proteggiamo meticolosamente arredi e pavimenti. Al termine lasciamo l'ambiente pronto per l'uso immediato.",
  },
  {
    icon: Award,
    title: "Certificazioni CONFSAL",
    description: "Attestati per antincendio, ponteggi in sicurezza, primo soccorso. Tecnico applicatore Oikos e mastro decoratore.",
  },
  {
    icon: Leaf,
    title: "Soluzioni Eco-friendly",
    description: "Materiali bioedili, atossici e sostenibili. Tinteggiature bio-compatibili per ambienti sani e rispettosi dell'ambiente.",
  },
]

const certifications = [
  { label: "Montaggio e trasformazione ponteggi Fesica Confsal", href: "#" },
  { label: "Addetto antincendio per attività a basso rischio", href: "#" },
  { label: "Corso tecnico prodotti vernicianti", href: "#" },
  { label: "Tecnico applicatore specializzato Oikos", href: "#" },
  { label: "Corso sistema a cappotto", href: "#" },
  { label: "Mastro decoratore Oikos", href: "#" },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-2xl p-6 border border-white/20 hover:-translate-y-1 transition-all duration-300 group",
        isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: "rgba(255, 255, 255, 0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {/* Icona */}
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-white/20 border border-white/30 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
        <feature.icon className="w-5 h-5 text-white" strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-semibold text-white mb-2">
        {feature.title}
      </h3>
      <p className="text-white/70 text-sm leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-16 md:py-24 overflow-hidden">

      {/* Sfondo foto */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/bg1.jpg')" }}
      />
      {/* Overlay scuro per leggibilità */}
      <div className="absolute inset-0 bg-[#1d2456]/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <AnimatedSection className="mb-12">
          <span className="text-white/50 text-sm mb-4 block">(perché sceglierci)</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Alta professionalità,<br />garanzie scritte
            </h2>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white hover:bg-white/90 text-[#1d2456] font-medium pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 self-start md:self-auto flex-shrink-0"
            >
              <span>Lavora con noi</span>
              <span className="w-8 h-8 bg-[#3c76ad] rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>


      </div>
    </section>
  )
}
