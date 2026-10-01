import Banner from '@/components/global/banner'
import WorkProcess from '@/components/home/process'
import OurServices from '@/components/home/services'
import React from 'react'

function page() {
  return (
    <div className='text-zinc-800'>
                  <Banner title="Our Services" para="lorem ipsum dolor sit amet consectetur adipiscing elit id laborum et qui reprehenderit et vel." slug="our services" />
                        <OurServices />
                  <WorkProcess />
    </div>
  )
}

export default page
