"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { AnimatedSection } from "./animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const reviews = [
  {
    id: 1,
    name: "Erika",
    rating: 5,
    text: "Assolutamente bravissimo! Meriterebbe anche più di 5 stelle. Puntuale e professionale, ha saputo trasformare, valorizzandole, le stanze che ha dipinto. Sicuramente da consigliare!",
  },
  {
    id: 2,
    name: "Samuel",
    rating: 5,
    text: "Lavoro impeccabile, puntuale e professionale. Pareti perfettamente lisce, colori vivaci e uniformi. Prezzo onesto e personale gentile. Lo consiglio a tutti senza esitazione!",
  },
]

const MAPS_URL = "https://www.google.it/maps/place/Eurocolor/@45.5238574,11.4807437,612m/data=!3m2!1e3!4b1!4m6!3m5!1s0x477f36d7c8864ab5:0x63940edcd3913537!8m2!3d45.5238574!4d11.4833186!16s%2Fg%2F11c7vzfh_q?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white border border-neutral-100 rounded-2xl p-6 flex flex-col gap-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-500",
        isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-8"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Stelle */}
      <div className="flex gap-1">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testo */}
      <p className="text-neutral-600 text-sm leading-relaxed flex-1">
        "{review.text}"
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#3c76ad]/10 flex items-center justify-center">
            <span className="text-[#3c76ad] font-bold text-xs">{review.name[0]}</span>
          </div>
          <span className="text-neutral-800 font-medium text-sm">{review.name}</span>
        </div>
        <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
          <GoogleIcon />
          <span>Google</span>
        </div>
      </div>
    </div>
  )
}

export function ReviewsSection() {
  return (
    <section id="recensioni" className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <AnimatedSection className="mb-12">
          <span className="text-neutral-400 text-sm mb-3 block">(recensioni)</span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Cosa dicono i nostri clienti
            </h2>
          </div>
        </AnimatedSection>

        {/* Layout: immagine sinistra + contenuto destra */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Immagine */}
          <AnimatedSection animation="fade-right" className="relative rounded-2xl overflow-hidden min-h-[400px] lg:min-h-0">
            <Image
              src="/images/i1.jpg"
              alt="Lavori Blu Color"
              fill
              className="object-cover"
            />
          </AnimatedSection>

          {/* Destra: recensioni + stats */}
          <div className="flex flex-col gap-5 justify-between">
            {/* Recensioni */}
            <div className="flex flex-col gap-4">
              {reviews.map((review, index) => (
                <ReviewCard key={review.id} review={review} index={index} />
              ))}
            </div>

            {/* Stats */}
            <AnimatedSection animation="fade-up" delay={300}>
              <div className="grid grid-cols-3 divide-x divide-neutral-100 bg-neutral-50 rounded-2xl border border-neutral-100 overflow-hidden">
                {[
                  { value: "25+", label: "Anni di esperienza" },
                  { value: "500+", label: "Progetti completati" },
                  { value: "100%", label: "Soddisfazione" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center justify-center py-6 px-3 group cursor-default">
                    <span className="text-3xl font-bold text-[#3c76ad] group-hover:scale-110 transition-transform duration-300 inline-block">
                      {stat.value}
                    </span>
                    <span className="text-neutral-500 text-xs mt-1 text-center leading-snug">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  )
}
