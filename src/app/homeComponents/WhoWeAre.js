import Image from 'next/image'
import G from '../../../public/G.png'
import Logo from "../../../public/logo.png"

const WhoWeAre = () => {
  return (
    <>
    <div className="WhoWeAre">
      <h2>Who <span>we are</span></h2>
      <div className="WeAre">
        <div className="aboutWhoWeAre">
          {/* <h1>Who W<span>e Are </span> </h1> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione itaque dignissimos eligendi pariatur accusamus nam sed similique cupiditate fugit? Molestiae voluptate at repudiandae odio quia, dolorum impedit animi architecto! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione itaque dignissimos eligendi pariatur accusamus nam sed similique cupiditate fugit? Molestiae voluptate at repudiandae odio quia, dolorum impedit animi architecto!</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos consequatur ipsum neque! Aliqu </p>
          
          {/* <hr /> */}
          

        </div>
        <div className="AboutFounderImages">
            <Image src={Logo} />
        </div>
      </div>
      <div className="main_btn">
            <a href="/about" className="btn">Know More</a>
          </div>
    </div>
    </>
  )
}

export default WhoWeAre
