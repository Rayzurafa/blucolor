"use client"

import Image from "next/image"
import { Plus, Minus, ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatedSection } from "./animated-section"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Offrite il sopralluogo gratuito?",
    answer:
      "Sì, assolutamente. Ogni collaborazione inizia con un sopralluogo gratuito e senza impegno. Durante la visita valutiamo lo stato delle superfici, identifichiamo criticità come umidità, crepe o distacchi, e raccogliamo le vostre esigenze. Al termine forniamo consulenza e preventivo dettagliato, senza costi nascosti.",
  },
  {
    question: "Quanto tempo richiedono solitamente i lavori?",
    answer:
      "I tempi dipendono dall'entità dell'intervento. Una tinteggiatura interna richiede generalmente 2–5 giorni, il rifacimento di una facciata 1–3 settimane, interventi industriali anche più a lungo. Forniamo sempre un calendario dettagliato prima di iniziare.",
  },
  {
    question: "Che marchi di prodotto utilizzate?",
    answer:
      "Utilizziamo esclusivamente prodotti certificati: Akzo Nobel e Sikkens per vernici premium, San Marco per finiture bio-compatibili, Oikos per effetti artistici, Knauf e Rigips per il cartongesso, Geopietra per la pietra ricostruita, Saint Gobain per isolanti e sistemi a cappotto.",
  },
  {
    question: "Come proteggete mobili e pavimenti?",
    answer:
      "Prima di ogni intervento copriamo meticolosamente pavimenti, arredi e infissi con teli professionali, nastri di mascheratura e barriere antipolvere. Al termine dedichiamo tempo alla pulizia finale, lasciando l'ambiente pronto per l'uso immediato.",
  },
  {
    question: "Eseguite anche lavori industriali?",
    answer:
      "Sì, è una delle nostre specializzazioni. Trattamenti anticorrosione su ringhiere, gru, vasche di contenimento e macchine utensili. Usiamo sistemi di spruzzatura ad alta pressione per capannoni e impianti produttivi. Abbiamo operato in stazioni ferroviarie, aeroporti e stabilimenti industriali.",
  },
  {
    question: "Avete le certificazioni di sicurezza necessarie?",
    answer:
      "Sì. Abbiamo attestati CONFSAL per anti-incendio, montaggio ponteggi in sicurezza e primo soccorso. Siamo inoltre tecnico applicatore specializzato Oikos, mastro decoratore Oikos, e abbiamo completato corsi su prodotti San Marco e sistema a cappotto.",
  },
  {
    question: "Utilizzate materiali eco-sostenibili?",
    answer:
      "Su richiesta utilizziamo prodotti bioedili, atossici e a basse emissioni di VOC, adatti anche ad ambienti con bambini o persone sensibili. Le pitture bio-compatibili San Marco garantiscono superfici sane e traspiranti senza rinunciare alla qualità estetica.",
  },
  {
    question: "Operate solo nel Veronese?",
    answer:
      "Il nostro bacino principale è il Veronese e le province limitrofe, dove operiamo con passione e professionalità. Per commesse industriali o lavori di grandi dimensioni siamo disponibili a valutare interventi su tutto il territorio nazionale.",
  },
]

/* Desktop: Radix accordion with scroll animation */
function FaqItemDesktop({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500",
        isVisible ? "md:opacity-100 md:translate-y-0" : "md:opacity-0 md:translate-y-4"
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <AccordionItem
        value={`item-${index}`}
        className="border-0 border-b border-white/10 last:border-b-0 group"
      >
        <AccordionTrigger className="py-5 hover:no-underline gap-4 text-left">
          <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
            <span className="text-sm font-black text-white/25 w-7 flex-shrink-0 group-hover:text-white/50 transition-colors duration-300 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base font-semibold text-white/85 group-hover:text-white transition-colors duration-300 min-w-0">
              {faq.question}
            </span>
            {/* Linea riempitiva — solo desktop */}
            <span className="hidden md:block flex-1 border-t border-dashed border-white/15 group-hover:border-white/30 transition-colors duration-300 mx-2" />
          </div>
          <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-full border border-white/20 group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
            <Plus className="w-3.5 h-3.5 text-white/50 group-hover:text-white group-data-[state=open]:hidden" />
            <Minus className="w-3.5 h-3.5 text-white hidden group-data-[state=open]:block" />
          </div>
        </AccordionTrigger>
        <AccordionContent className="pb-5 pl-10 text-white/60 text-sm leading-relaxed">
          {faq.answer}
        </AccordionContent>
      </AccordionItem>
    </div>
  )
}

/* Mobile: native <details> that works without JS */
function FaqItemMobile({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  return (
    <details className="border-b border-white/10 last:border-b-0 group">
      <summary className="flex items-center justify-between gap-2 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <span className="text-sm font-black text-white/25 w-7 flex-shrink-0 tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-sm font-semibold text-white/85 min-w-0">
            {faq.question}
          </span>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-7 h-7 rounded-full border border-white/20">
          <Plus className="w-3.5 h-3.5 text-white/50 group-open:hidden" />
          <Minus className="w-3.5 h-3.5 text-white hidden group-open:block" />
        </div>
      </summary>
      <div className="pb-5 pl-9 text-white/60 text-sm leading-relaxed">
        {faq.answer}
      </div>
    </details>
  )
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16 items-start">

          {/* Testo — su mobile appare per primo (order-1), su desktop resta a destra */}
          <div className="order-1 lg:order-none lg:hidden">
            <span className="text-neutral-400 text-sm mb-4 block">(domande frequenti)</span>
            <h2 className="text-3xl font-bold text-neutral-900 leading-tight mb-5">
              Hai domande?<br />Abbiamo le risposte
            </h2>
            <p className="text-neutral-500 text-base leading-relaxed mb-7">
              Raccogliamo qui le domande più frequenti. Se non trovi quello che cerchi, contattaci: risponderemo entro 24 ore.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#3c76ad] hover:bg-[#3c76ad]/90 text-white text-sm font-medium pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Fai una domanda</span>
              <span className="w-8 h-8 bg-[#1d2456] rounded-full flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Accordion — su mobile order-2, su desktop resta a sinistra */}
          <div className="order-2 lg:order-none bg-[#1d2456] rounded-2xl px-4 md:px-6">
            {/* Desktop: Radix accordion */}
            <div className="hidden md:block">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <FaqItemDesktop key={index} faq={faq} index={index} />
                ))}
              </Accordion>
            </div>
            {/* Mobile: native <details> elements */}
            <div className="md:hidden">
              {faqs.map((faq, index) => (
                <FaqItemMobile key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>

          {/* Destra — sticky: testo + immagine (desktop only per il testo, immagine sempre visibile) */}
          <AnimatedSection className="order-3 lg:order-none lg:sticky lg:top-24 lg:self-start flex flex-col gap-7">

            {/* Testo — solo desktop */}
            <div className="hidden lg:block">
              <span className="text-neutral-400 text-sm mb-4 block">(domande frequenti)</span>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-5">
                Hai domande?<br />Abbiamo le risposte
              </h2>
              <p className="text-neutral-500 text-base leading-relaxed mb-7">
                Raccogliamo qui le domande più frequenti. Se non trovi quello che cerchi, contattaci: risponderemo entro 24 ore.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-[#3c76ad] hover:bg-[#3c76ad]/90 text-white text-sm font-medium pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Fai una domanda</span>
                <span className="w-8 h-8 bg-[#1d2456] rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>

            {/* Immagine */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/f2.jpg"
                alt="Lavori Blu Color"
                fill
                className="object-cover"
              />
            </div>

          </AnimatedSection>

        </div>
      </div>
    </section>
  )
}
