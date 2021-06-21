import Link from 'next/link'
export default function Menu() {
  return (
      <nav className="flex-col flex-grow pb-4 pb-0 flex justify-end md:flex-row">
        <Link href="/"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Home </a></Link>
        <Link href="/about"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> About </a></Link>
        <Link href="/pricing"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Pricing </a></Link>
        <Link href="/calendar"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Calendar </a></Link>
      </nav>
  );
}
