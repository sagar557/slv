import Link from "next/link"
import Image from "next/image"
import "../style/nav.scss"
import Logo from "../../../public/logo.png"

const Nav = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">
                    <Image src={Logo} alt='SLV Firm main Logo'  />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/about">About US</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/faq">FAQ&apos;S</Link>
                    </li>
                    {/* <li className="nav-item">
                    <Link className="nav-link" href="/news-update">News & Update</Link>
                    </li> */}
                </ul>
                <div className="main_btn">
                    <Link href="/contact-us" className="btn " type="submit">Contact Us</Link>
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav
