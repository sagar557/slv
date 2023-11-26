"useEffect"
import "../style/contact.scss"
import Link from "next/link"


const page = () => {
  return (
    <>
      <div className="ContactUs">
        <div className="Group_GetTouch_contact">
          <div className="GetInTouch">
            <h2>GET I<span>N TOUCH</span></h2>
            <p>Skylink Ventures is committed to helping businesses achieve their full potential. We invite you to get in touch with us today to discuss your unique needs and how we can help you transform your business.</p>
            <ul>
              <li>
                <a href=""><i className="bi bi-envelope-at-fill"></i>skylinkventures.slv@gmail.com</a>
              </li>
              <li>
              <a href=""><i className="bi bi-geo-alt-fill"></i> 
              <div className="location">
              L-21/304, BDI-Chikani, Alwar
              </div>
            </a>

              </li>
            </ul>
            
            {/* <p><a href=""><i className="bi bi-telephone-fill"></i>01440-</a></p> */}
          </div>
          <div className="Contact_form">
              <h2>SAY SOME<span>THING</span></h2>
              <form action="">
                <input type="text" placeholder="Full Name" />
                <input type="tel" placeholder="Phone" />
                <input type="Email" placeholder="Email" />
                <textarea name="" id="" placeholder="Message" ></textarea>
                <div className="main_btn">
                    <button className="btn " type="submit">Submit</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
