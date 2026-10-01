import Banner from '@/components/global/banner'
import ContactSection from '@/components/global/contact'
import React from 'react'

function page() {
  return (
    <div>
                  <Banner title="Contact Us" para="lorem ipsum dolor sit amet consectetur adipiscing elit id laborum et qui reprehenderit et vel." slug="contact-us" />
      <ContactSection/>
    </div>
  )
}

export default page
