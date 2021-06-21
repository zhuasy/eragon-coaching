import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar.js'
import Link from 'next/link'
import Footer from '../components/Footer/Footer.js'
import PriceCard from '../components/Pricing/PriceCard.js'

export default function About() {
  return (
      <div className="container mx-auto">
        <Head>
          <title>Eragon Coaching</title>
          <meta name="description" content="" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div className="my-14 text-center">
          <h1 className="font-normal mb-4 text-3xl">
            <span className="font-semibold"> Professional </span> coaching for <span className="font-semibold"> any </span> skill level.
          </h1>
          <p className="text-gray-500">
            Choose from three levels of commitment to League of Legends coaching.
          </p>
        </div>

        <div className="flex justify-between space-x-5 my-5">
          <div className="w-1/3"> <PriceCard title="Scuttle" sessions="1" color="text-green-400" price="35" description="The perfect gateway into a world of improvement." text1="In-depth review of two VOD recordings prior to session." text2="Review of strengths and weaknesses." text3="Well-defined, tailored plan for improvement."/> </div>
          <div className="w-1/3"> <PriceCard title="Dragon" sessions="3" color="text-red-400" price="30" description="Crush your goals and climb up the ladder." text1="In-depth review of two VOD recordings prior to session." text2="Review of strengths and weaknesses." text3="Well-defined, tailored plan for improvement."/> </div>
          <div className="w-1/3"> <PriceCard title="Baron" sessions="5" color="text-purple-400" price="25" description="Long term coaching for the truly dedicated." text1="In-depth review of two VOD recordings prior to session." text2="Review of strengths and weaknesses." text3="Well-defined, tailored plan for improvement."/> </div>
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
