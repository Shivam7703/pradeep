import WhyChooseUs from '@/components/about/choose'
import StatsCounter from '@/components/about/count'
import Mission from '@/components/about/mission'
import FeaturedIn from '@/components/about/news'
import Banner from '@/components/global/banner'
import AboutUs from '@/components/home/about'
import React from 'react'

function page() {
    return (
        <div>
            <Banner title="About Us" para="lorem ipsum dolor sit amet consectetur adipiscing elit id laborum et qui reprehenderit et vel." slug="about-us" />
            <AboutUs />
            <Mission/>
            <StatsCounter/>
            <WhyChooseUs/>
            <FeaturedIn/>
        </div>
    )
}

export default page
