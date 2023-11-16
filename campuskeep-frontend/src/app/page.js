import react from "react"
import HeroSection from '../../components/HeroSection.js'
import Navbar from '../../components/Navbar.js'
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  )
}
