import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/Navbar.js'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container mx-auto">
      <Link href="/">
        Back to home
      </Link>
    </div>
  );
}
