import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar.js'
import Link from 'next/link'
import Footer from '../components/Footer/Footer.js'

export default function About() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Eragon Coaching</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
