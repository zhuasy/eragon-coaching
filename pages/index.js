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
          Grandmaster tiered player and positional coach.
        </p>
      </div>

      <div className="flex mt-20 mb-12">
        <div className="text-center rounded-tl-lg w-full p-6">
          <h1 className="text-xl text-gray-800"> Not sure which plan will suit you best? </h1>
          <p className="text-sm text-gray-800 opacity-80 "> Join the discord server and ask Eragon directly! </p>
          <button className="mt-4 w-36 shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
            <a className="font-semibold" target="_blank" rel="noopener noreferrer" href="https://discord.gg/hawSdgzwPD"> Join the Server </a>
          </button>
        </div>
      </div>

      <Footer />

    </div>
  );
}
