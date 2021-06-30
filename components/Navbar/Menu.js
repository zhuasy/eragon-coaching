import Link from 'next/link'
export default function Menu() {
  return (
      <nav className="flex-col flex-grow pb-4 pb-0 flex justify-end md:flex-row">
        <Link href="/"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Home </a></Link>
        <Link href="/pricing"><a className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Pricing </a></Link>
        <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/u/0/embed?src=c1kac5ermuq8j2vb8fk1gndv18@group.calendar.google.com&ctz=Europe/Berlin" className="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"> Calendar </a>
      </nav>
  );
}
