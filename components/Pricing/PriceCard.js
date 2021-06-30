import Link from 'next/link'
export default function PriceCard({sessionName, link, title, color, sessions, price, description, text1, text2, text3, text4, text5}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-200 ease-in-out">
      <p className="font-semibold"> {sessionName} </p>
      <p className=""> <span className="font-bold text-black text-3xl">£{price}</span>/session </p>
      <h3 className="pt-4 text-xl font-bold"> <span className={color}> {title} </span> </h3>
      <p className="text-sm opacity-80"> {description} </p>
      <hr className="mt-6 mb-6" />
      <div className="space-y-4 font-normal">
        <div className="flex space-x-3">
          <svg className="h-5 w-5 fill-current text-green-400" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p> {text1} </p>
        </div>
        <div className="flex space-x-3">
          <svg className="h-5 w-5 fill-current text-green-400" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p> {text2} </p>
        </div>
        <div className="flex space-x-3">
          <svg className="h-5 w-5 fill-current text-green-400" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <p> {text3} </p>
        </div>
      </div>
      <div className="mt-12">
        <a href={link} target="_blank" rel="noopener noreferrer"> <button className="font-semibold w-full shadow text-indigo-700 border border-indigo-700 rounded hover:bg-indigo-700 hover:text-white hover:shadow-2xl transition duration-15 ease-in-out py-2">
           Book
        </button> </a>
      </div>
    </div>
  );
}
