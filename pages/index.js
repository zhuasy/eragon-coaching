import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar.js'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Eragon Coaching</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
      </main>

    </div>
  );
}
