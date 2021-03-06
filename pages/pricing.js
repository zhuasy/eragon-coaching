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

        <div className="flex justify-around space-x-5 my-5">
          <div className="w-1/2"> <PriceCard title="Scuttle" link="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GLGNMYC2GX76Y" sessions="1" sessionName="One-time Coaching - 1 Session" color="text-green-400" price="30" description="The perfect gateway into a world of improvement." text1="In-depth one hour review of two VOD recordings." text2="Analysis of your strengths and weaknesses prepared beforehand." text3="Well-defined, tailored plan for improvement prepared prior to session."/> </div>
          <div className="w-1/2"> <PriceCard title="Baron" link="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FQ2MZT5AMRAHG" sessions="5" sessionName="Long-term Coaching - 5 Sessions" color="text-purple-400" price="24" description="Long term coaching for the truly dedicated." text1="Long-term, goal-oriented coaching at a discounted rate." text2="Lifetime access to Eragon's direct messages for additional questions." text3="All benefits of a one-time coaching session."/> </div>
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
