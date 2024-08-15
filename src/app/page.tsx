import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Infinite_Moving from "@/components/Infinite_Moving";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Wave from "@/components/Wave";
import WhyCooseUs from "@/components/WhyCooseUs";





export default function Home(){

    return(

         <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        {/* <h1 className="text-2xl text-center text-white">Divyasnhu Pal</h1> */}
        
          <HeroSection/>
          <FeaturedCourses/>
         <WhyCooseUs/>  
      <Infinite_Moving/>
      <UpcomingWebinar/>
          <Wave/>
          <Footer/>
         
         
        </main>
          );

}