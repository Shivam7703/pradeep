import Banner from '@/components/global/banner'
import WorkProcess from '@/components/home/process'
import OurServices from '@/components/home/services'
import React from 'react'

function page() {
  return (
    <div className='text-zinc-800'>
                  <Banner title="Our Services" para="Get expert guidance for course selection, university admissions, documentation, and career planning to build a successful future. 
" slug="our services" />
                        <OurServices />
                  <WorkProcess />
    </div>
  )
}

export default page
