"use client"

import { Award } from "lucide-react"

const certifications = [
  "Montaggio e trasformazione ponteggi Fesica Confsal",
  "Addetto antincendio per attività a basso rischio",
  "Corso tecnico aggiornamento prodotti vernicianti",
  "Tecnico applicatore specializzato Oikos",
  "Corso sistema a cappotto",
  "Mastro decoratore Oikos",
  "Primo soccorso immediato",
]

const items = [...certifications, ...certifications, ...certifications]

export function CertificationsTicker() {
  return (
    <div className="bg-[#1d2456] flex items-stretch overflow-hidden">
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
      `}</style>

      {/* Etichetta fissa a sinistra */}
      <div className="flex-shrink-0 flex items-center gap-2 md:gap-2.5 bg-[#3c76ad] px-3 md:px-6 py-4 z-10">
        <Award className="w-4 h-4 text-white" />
        <span className="text-white text-xs font-bold tracking-widest uppercase whitespace-nowrap hidden md:inline">
          Certificazioni
        </span>
      </div>

      {/* Nastro scorrevole */}
      <div className="overflow-hidden flex-1 flex items-center">
        <div
          className="flex w-max items-center"
          style={{ animation: "ticker 35s linear infinite" }}
        >
          {items.map((cert, i) => (
            <div key={i} className="flex items-center">
              <span className="text-white/85 text-sm font-medium px-6 whitespace-nowrap">
                {cert}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#3c76ad] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
