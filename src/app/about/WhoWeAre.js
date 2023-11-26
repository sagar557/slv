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
            <p>[Firm Name] is a leading provider of business solutions, empowering organizations to achieve their strategic goals and thrive in the ever-evolving marketplace. Our team of experienced professionals possesses deep industry knowledge and a passion for fostering collaborative partnerships. We work closely with our clients to understand their unique needs and aspirations, developing customized solutions that deliver tangible results.</p>
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
