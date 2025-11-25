import Image from "next/image";
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import ClientsLogos from '@/components/Clients'
import LatestJobsSlider from '@/components/LatestJobs'
import Footer from '@/components/Footer'
import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ClientsLogos />
      <LatestJobsSlider />
      <Footer />
    </>

  );
}
