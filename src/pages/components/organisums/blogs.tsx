import React from 'react'
import Blog from '../moluculs/blog'
import Image1 from '../../../../public/img/main1.jpg'
import Image2 from '../../../../public/img/main2.jpg'
import Image3 from '../../../../public/img/main3.jpg'

const Blogs = () => {
  return (
    <div className="w-[760px]">
        <Blog src={Image1} />
        <Blog src={Image2} />
        <Blog src={Image3} />
    </div>
  )
}

export default Blogs