import Image from 'next/image'
import Logo from "../../../public/logo.png"

const WhoWeAre = () => {
  return (
    <>
      <div className="WhoWeAre">
        <h2>Who <span>we are</span></h2>
        <div className="WeAre">
          <div className="AboutFounderImages">
            <Image src={Logo} alt='SLV Firm main Logo' />
          </div>
          <div className="aboutWhoWeAre">
            <p>At Skylink Ventures, we are a team of passionate and experienced professionals dedicated to empowering businesses to achieve their full potential. We believe in the power of innovation, collaboration, and personalized solutions to drive strategic growth and transformation. Our diverse expertise spans across various industries, enabling us to provide tailored solutions that address the specific challenges and opportunities faced by our clients.</p>
            <p>If you are seeking a trusted partner to help your business achieve its full potential, Skylink Ventures is the ideal choice. Contact us today to learn more about our comprehensive suite of services and how we can help you transform your business.</p>
        <div className="main_btn">
          <a href="/about" className="btn">Know More</a>
        </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhoWeAre
