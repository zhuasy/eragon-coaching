import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar.js'
import Footer from '../components/Footer/Footer.js'


export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Eragon Coaching</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <div className="my-14 text-center">
        <h1 className="font-semibold mb-4 text-4xl">
          Hi, I'm <span className="font-bold text-yellow-500"> Eragon.</span>
        </h1>
        <p className="text-black font-normal">
          Grandmaster tiered top lane player and positional coach.
        </p>
      </div>

      <Footer />

    </div>
  );
}
