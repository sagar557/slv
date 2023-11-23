import React from 'react'
import Image from 'next/image'
import '@/app/style/index.scss'
import '@/app/style/index.css'
import Hero from '../../../public/Pic.png'

const Head = () => {
  return (
    <>
      <div className="SLVHead">
        <div className="TagLine">
        <Image src={Hero} />
          {/* <h1>Our Vision, <br /><span>Your Future</span> </h1> */}
        </div>
          <p>Lorem ipsum dolor sit amet, elit. Iste, a mollitia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, a mollitia. Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, a mollitia.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, a mollitia. Lorem ipsum dolor sit amet</p>
          <div className="main_btn">
            <a href="/contact-us" className="btn">Get Started</a>
          </div>
      </div>
    </>
  )
}

export default Head
