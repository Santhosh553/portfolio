'use client'

import { About, Contact, Hero, Projects, Stack, Footer } from '@/components'
import { Navbar } from '@/components/navbar'

import { GoogleAnalytics } from 'nextjs-google-analytics'
import Head from 'next/head'

export default function Home () {
  return (
    <main className='h-full w-full flex flex-col px-5 py-5 font-poppins bg-snow dark:bg-main text-alternate dark:text-snow duration-500 ease-out'>
      <Head>
        <meta name="google-site-verification" content="3WO8rexS4qJlr75rtIHE96Z7pm6xokw7sCWMexITkK4" />
        <title>Home Page</title>
      </Head>
      <GoogleAnalytics gaMeasurementId="G-05R6J9WD95" />
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
