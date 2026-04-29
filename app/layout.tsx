import type { Metadata } from 'next'
import { Geist, Geist_Mono, Nunito_Sans, Raleway } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-hero",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: 'Blu Color | Tinteggiature Professionali - Veronese',
  description: 'Blu Color S.a.s.: professionisti nel settore delle tinteggiature civili e industriali nel Veronese. Sede a Caselle di Sommacampagna (VR).',
  generator: 'v0.app',
  icons: {
    apple: '/images/RayOutreach.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`font-sans antialiased ${nunitoSans.variable} ${raleway.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
