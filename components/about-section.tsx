"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const carouselImages = [
  { src: "/images/c1.jpg", alt: "Lavoro Blu Color 1" },
  { src: "/images/c2.jpg", alt: "Lavoro Blu Color 2" },
  { src: "/images/c3.jpg", alt: "Lavoro Blu Color 3" },
  { src: "/images/c4.jpg", alt: "Lavoro Blu Color 4" },
  { src: "/images/c5.jpg", alt: "Lavoro Blu Color 5" },
  { src: "/images/c6.jpg", alt: "Lavoro Blu Color 6" },
  { src: "/images/c7.jpg", alt: "Lavoro Blu Color 7" },
  { src: "/images/c8.jpg", alt: "Lavoro Blu Color 8" },
]

// Duplichiamo per il loop seamless
const allImages = [...carouselImages, ...carouselImages]

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-24 overflow-hidden">

      {/* Testo in due colonne */}
      <AnimatedSection className="px-6 md:px-12 lg:px-20 mb-14 md:mb-18">
        <span className="text-neutral-500 text-sm mb-6 block">(chi siamo)</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">

          {/* Colonna sinistra */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-4">
              Esperienza e passione<br />in ogni pennellata
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed">
              Siamo imbianchini professionisti con anni di esperienza nel settore. Lavoriamo su abitazioni private, condomini, uffici e capannoni industriali, portando la stessa cura e attenzione al dettaglio in ogni cantiere, grande o piccolo che sia.
            </p>
          </div>

          {/* Colonna destra */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 leading-snug mb-4">
              Dalla camera da letto<br />al capannone industriale
            </h2>
            <p className="text-neutral-600 text-base leading-relaxed mb-6">
              Realizziamo tinteggiature civili e industriali, finiture decorative, trattamenti anti-muffa e molto altro. Utilizziamo materiali certificati, rispettiamo i tempi concordati e lasciamo ogni ambiente in ordine al termine dei lavori. Un preventivo chiaro, senza sorprese.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center bg-[#3c76ad] text-white rounded-full pl-6 pr-2 py-2 text-sm font-medium hover:bg-[#3c76ad]/90 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span>Contattaci ora</span>
              <span className="ml-3 bg-white rounded-full p-2 group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="w-4 h-4 text-[#3c76ad]" />
              </span>
            </a>
          </div>

        </div>
      </AnimatedSection>

      {/* Carosello automatico */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
      <div className="relative w-full overflow-hidden">
        <div
          className="flex w-max"
          style={{ animation: "marquee 35s linear infinite" }}
        >
          {allImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-80 lg:w-96 aspect-[4/3] relative mx-3 rounded-2xl overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
