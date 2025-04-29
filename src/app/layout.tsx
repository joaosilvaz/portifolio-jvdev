import './globals.css'
import { Poppins } from 'next/font/google'
import { AOSInitializer } from '@/components/AOSInitializer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
  variable: '--font-poppins',
})

export const metadata = {
  title: 'João Vitor da Silva',
  description: 'Portfólio desenvolvido com Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.variable}>
      <body className="font-poppins">
        <AOSInitializer />
        {children}
      </body>
    </html>
  )
}
