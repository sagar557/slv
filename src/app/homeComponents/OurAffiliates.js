import Image from "next/image"
import One from '../../../public/01.svg'
import TeamWork from '../../../public/teamwork.png'
import Ed from '../../../public/ed.png'

import Two from '../../../public/02.svg'



const OurAffiliates = () => {
  return (
    <>
      <div className="OurAffiliates" id="Affiliates" >
        <h2>Our <span>Affiliates</span></h2>

          <div className="AffiliatesHeading">
            <div className="heading">
              <Image src={One} alt="SLV Number One"/>
              <div className="ContentContainer">
                <h4>Skylink Ventures IT Solutions</h4>
                <p>From Concept to Reality: We Bring Your Software Ideas to Life</p>
              </div>
            </div>
            <p className="AboutAffiliates">In today's digital era, businesses rely heavily on technology to drive growth, enhance efficiency, and deliver exceptional customer experiences. At Skylink Ventures IT Solutions, we are passionate about empowering businesses through innovative software solutions that transform their operations and propel them towards success.</p>
            <a href="/coming-soon" className="Screens"><div className="link"><Image src={TeamWork} /></div></a>
            
          </div>
          <hr />
          <div className="AffiliatesHeading">
            <div className="heading">
              <Image src={Two} alt="SLV Number Two" />
              <div className="ContentContainer">
                <h4>Tech. Education </h4>
                <p>Empower Your Tech Future with Comprehensive Tech Education</p>
              </div>
            </div>
                <p className="AboutAffiliates">In today's technology-driven world, a strong foundation in tech education is essential for success in a wide range of fields. From software development and cybersecurity to data analytics and artificial intelligence, tech skills are in high demand across various industries. At Ventures Tech Education , we are committed to providing comprehensive tech education programs that empower individuals to become skilled professionals and innovators in the ever-evolving tech landscape.</p>
            <a href="/coming-soon" className="Screens"><div className="link"><Image src={Ed} /></div></a>
          </div>
        
      </div>
    </>
  )
}

export default OurAffiliates
