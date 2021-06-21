import Link from 'next/link'
export default function Logo() {
  return (
    <div className="flex flex-row items-center justify-between">
      <Link href="/"><a className="py-4 text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline"> Eragon Coaching </a></Link>
    </div>
  );
}
