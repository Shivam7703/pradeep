import Banner from '@/components/global/banner'
import BlogSection from '@/components/home/blog'
import React from 'react'

function page() {
  return (
    <div>
       <Banner title="Blogs & Updates" para="lorem ipsum dolor sit amet consectetur adipiscing elit id laborum et qui reprehenderit et vel." slug="blogs"/>
       <BlogSection />
    </div>
  )
}

export default page
