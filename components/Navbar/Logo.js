import Link from 'next/link'

export default function Logo() {
  return (
    <div>
      <Link href="/about">
        <span className="text-xl tracking-widest font-serif font-light text-gray-700"> ERAGON </span>
      </Link>
    </div>
  );
}
