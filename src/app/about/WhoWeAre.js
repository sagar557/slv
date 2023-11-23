import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/logo.png"


const WhoWeAre = () => {
  return (
    <>
      <div className="WeArePage">
        <div className="contentImage">
          <div className="content">
            <h2>Who <span>we are</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione itaque dignissimos eligendi pariatur accusamus nam sed similique cupiditate fugit? Molestiae voluptate at repudiandae odio quia, dolorum impedit animi architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione itaque dignissimos eligendi pariatur accusamus nam sed similique cupiditate fugit? Molestiae voluptate at repudiandae odio quia, dolorum impedit animi architecto!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu </p>
          
          </div>
          <div className="Image">
            <Image src={Logo} />
          </div>
        </div>

        
      </div>
    </>
  )
}

export default WhoWeAre
