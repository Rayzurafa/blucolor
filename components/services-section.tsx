"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Tinteggiature interne",
    description: "Pittura di camere, soggiorni, corridoi e ambienti commerciali. Finiture lisce o strutturate, con colori scelti insieme a te per un risultato su misura.",
    image: "/images/interni2.jpg",
    category: "Civile",
  },
  {
    title: "Tinteggiature esterne",
    description: "Facciate, ville e condomini: utilizziamo pitture resistenti agli agenti atmosferici per una protezione duratura e un colore che non sbiadisce.",
    image: "/images/esterni2.jpg",
    category: "Civile",
  },
  {
    title: "Finiture decorative",
    description: "Spatolato liscio, Marmorino, Grassello di calce, velature sfumate e spugnature testurizzate. Effetti unici per interni di carattere.",
    image: "/images/decorazione1.jpg",
    category: "Civile",
  },
  {
    title: "Cartongesso e isolamenti",
    description: "Pareti divisorie, contropareti, controsoffitti moderni. Isolamenti acustici e a cappotto per il risparmio energetico.",
    image: "/images/cartongesso2.jpg",
    category: "Civile",
  },
  {
    title: "Trattamenti anti-muffa e anti-umidità",
    description: "Ripristino di muri danneggiati da infiltrazioni, umidità o usura con tecniche avanzate e materiali traspiranti.",
    image: "/images/Trattamenti anti-muffa e anti-umidità.png",
    category: "Civile",
  },
  {
    title: "Pietra naturale e ricostruita",
    description: "Applicazioni esperte di Geopietra e pietra naturale per facciate e interni di design moderno o classico.",
    image: "/images/Pietra naturale e ricostruita.png",
    category: "Civile",
  },
  {
    title: "Soluzioni eco-friendly",
    description: "Tinteggiature con materiali bioedili, atossici e sostenibili. Prodotti bio-compatibili e a basse emissioni di VOC.",
    image: "/images/esterni1.jpg",
    category: "Misto",
  },
  {
    title: "Verniciature industriali",
    description: "Trattamenti anticorrosione per ringhiere metalliche, gru di grandi dimensioni, vasche di contenimento e macchine utensili.",
    image: "/images/industriale3.jpg",
    category: "Industriale",
  },
  {
    title: "Spruzzatura ad alta pressione",
    description: "Applicazioni a spruzzo professionale per capannoni vasti, strutture complesse e interventi heavy-duty.",
    image: "/images/Spruzzatura ad alta pressione.png",
    category: "Industriale",
  },
]

function CategoryBadge({ category }: { category: string }) {
  if (category === "Misto") {
    return (
      <div className="absolute top-3 right-3 flex overflow-hidden rounded-full text-xs font-semibold shadow">
        <span className="bg-white/90 text-[#3c76ad] px-2.5 py-1">Civile</span>
        <span className="bg-[#ff3046] text-white px-2.5 py-1">Industriale</span>
      </div>
    )
  }
  return (
    <span className={cn(
      "absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-full",
      category === "Industriale"
        ? "bg-[#ff3046] text-white"
        : "bg-white/90 text-[#3c76ad]"
    )}>
      {category}
    </span>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 group cursor-pointer",
        isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Immagine */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <CategoryBadge category={service.category} />
      </div>

      {/* Testo */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-neutral-900 mb-2 group-hover:text-[#3c76ad] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-neutral-500 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function ServicesSection() {
  return (
    <section id="services" className="bg-neutral-100 py-16 md:py-24 px-6 md:px-12 lg:px-20">
      {/* Header */}
      <AnimatedSection className="max-w-xl mb-12">
        <span className="text-neutral-500 text-sm mb-4 block">(i nostri servizi)</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight text-balance">
          Soluzioni complete per ogni esigenza
        </h2>
        <p className="text-neutral-600 mt-4 text-base">
          Ogni collaborazione inizia con un sopralluogo gratuito e una consulenza specializzata inclusa nel prezzo.
        </p>
      </AnimatedSection>

      {/* Griglia servizi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* CTA */}
      <AnimatedSection animation="scale" className="flex justify-center">
        <a
          href="#contact"
          className="group flex items-center gap-2 bg-[#3c76ad] hover:bg-[#3c76ad]/90 text-white font-medium pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span>Richiedi un preventivo</span>
          <span className="flex items-center justify-center w-8 h-8 bg-[#1d2456] rounded-full">
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </AnimatedSection>
    </section>
  )
}
