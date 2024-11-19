import { Inter } from 'next/font/google'

import 'prismjs/themes/prism-okaidia.css'
import '@style/site.css'


import Footer from '@component/Footer'
import Header from '@component/Header'
import HeaderBanner from '@component/HeaderBanner'
import BackToTop from '@component/BackToTop'

export const metadata = {
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`),
  title: `${process.env.NAME_PROJECT} | Build a fast UI`,
  description: 'Build a fast and clean UI using Tailwindcss.',
  openGraph: {
    title: `${process.env.NAME_PROJECT} | Build a fast UI`,
    description: 'Build a fast and clean UI using Tailwindcss.',
    url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`,
    siteName: 'HyperUI',
    type: 'website',
    images: ['/favicon.ico'],
  },

}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})


export default async function RootLayout({ children }) {

  return (
    <html className="h-full scroll-pt-20 scroll-smooth" lang="en" dir="ltr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <HeaderBanner />
        <Header />
        <main className="bg-white dark:bg-black">{children}</main>
        <Footer />
        {/* <BackToTop /> */}
      </body>
    </html>
  )
}
