import BannerCarousel from '@/components/BannerCarousel'
import Navbar from '@/components/Navbar'
import SlideshowImg from '@/components/SlideshowImg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col  justify-between ">
      <Navbar />
      <BannerCarousel />
      <SlideshowImg />
    </div>
  )
}
