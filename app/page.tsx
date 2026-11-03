import AboutUs from "@/components/home/about";
import BlogSection from "@/components/home/blog";
import TrendingCategoriesSlider from "@/components/home/client";
import MbbsCountrySlider from "@/components/home/countryslider";
import AdmissionsIndiaSection from "@/components/home/engadmission";
import WorkProcess from "@/components/home/process";
import OurServices from "@/components/home/services";
import HomeBanner from "@/components/home/homebanner";
import Testimonials from "@/components/home/testimonial";

export default function Home() {
  return (
    <div className="">
      <HomeBanner />
      <AboutUs />
      <OurServices />
      <MbbsCountrySlider /><AdmissionsIndiaSection /><Testimonials/><TrendingCategoriesSlider /><WorkProcess /><BlogSection />
    </div>
  );
}
