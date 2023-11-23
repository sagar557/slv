import Image from "next/image"
import One from '../../../public/01.svg'
import Two from '../../../public/02.svg'



const OurAffiliates = () => {
  return (
    <>
      <div className="OurAffiliates">
        <h2>Our <span>Affiliates</span></h2>

          <div className="AffiliatesHeading">
            <div className="heading">
              <Image src={One} />
              <div className="ContentContainer">
                <h4>Skylink Ventures IT Solutions</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <p className="AboutAffiliates">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem officia veniam consectetur eaque fuga, repellat ipsa in expedita. Ad laudantium pariatur hic excepturi voluptate voluptatum amet similique recusandae magni veniam?</p>
            <a href="/" className="Screens"><div className="link"></div></a>
            
          </div>
          <hr />
          <div className="AffiliatesHeading">
            <div className="heading">
              <Image src={Two} />
              <div className="ContentContainer">
                <h4>Tech. Education </h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
            <p className="AboutAffiliates">Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur perspiciatis numquam eius soluta blanditiis, non asperiores sequi autem officiis laudantium consequuntur inventore aliquam corrupti, dolore sit quae itaque magnam!</p>
            <a href="/" className="Screens"><div className="link"></div></a>
          </div>
        
      </div>
    </>
  )
}

export default OurAffiliates
