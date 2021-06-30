import Head from 'next/head'
import Image from 'next/image'
import headShot from '../public/headshot.png'
import Navbar from '../components/Navbar/Navbar.js'
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
      <div className="flex justify-center">
        <img className="w-36 h-36 rounded-full mx-auto" src={headShot} alt="Coach Eragon" />
      </div>
      <div className="flex justify-center">
        <div className="text-center w-2/5">
          <h1 className="font-light mb-4 text-3xl">Coach
            <span className="font-light text-yellow-500"> Eragon</span>
          </h1>
          <p className="text-black font-normal">
            Hi! My name is Eragon. I am a Grandmaster professional player in European Regional Leagues (ERLs) as well as a top lane positional coach. I have individually coached players, ranging from unranked to challenger, for thousands of hours.  I also have a Youtube channel where I upload various guides an examples of my coaching.
          </p>
          <div className="flex justify-around">
            <button className="mt-4 w-36 shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
              <a className="font-bold" target="_blank" rel="noopener noreferrer" href="https://euw.op.gg/summoner/userName=EragonUK"> OP.GG </a>
            </button>
            <button className="mt-4 w-36 shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
              <a className="font-bold" target="_blank" rel="noopener noreferrer" href="https://lol.fandom.com/wiki/UK_League_Championship/2021_Season/Spring_Season"> LoL Fandom </a>
            </button>
            <button className="mt-4 w-36 shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
              <a className="font-bold" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/Gravified"> Youtube </a>
            </button>
          </div>
        </div>
      </div>
      <div className="flex mt-10 mb-12">
        <div className="text-center rounded-tl-lg w-full p-6">
          <h1 className="text-xl text-gray-800"> Have a question for Eragon? </h1>
          <p className="text-sm text-gray-800 opacity-80 "> Join the discord server and ask Eragon directly! </p>
          <button className="mt-4 w-36 shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
            <a className="font-semibold" href="https://discord.gg/hawSdgzwPD"> Join the Server </a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
