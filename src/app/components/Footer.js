import React from 'react'
import Link from 'next/link'
import '../style/footer.scss'
import Image from 'next/image'
import Logo from "../../../public/logo.png"


const Footer = () => {
    return (
        <>
            <footer>
                <div className="Name">
                    <h2>Skylink <span> Ventures</span></h2>
                </div>
                <div className="MainLinks">
                    <div className="links">
                        <h6>Home</h6>
                        <ul>
                            <li><Link href="/#TargetSector">Target Sectors</Link></li>
                            <li><Link href="/#Careers">Careers</Link></li>
                            <li><Link href="/#Affiliates">Our Affiliates</Link></li>
                        </ul>
                    </div>
                    <div className="links">
                        <h6>About Us</h6>
                        <ul>
                            <li><Link href="/about">Who we are</Link></li>
                            <li><Link href="/about">Co-Founders</Link></li>
                        </ul>
                    </div>
                    
                    <div className="LogoAndAddress">
                        <Image src={Logo} />
                    </div>
                </div>
                    <div className="SocialLink">
                        <ul>
                            <li><a href="https://www.linkedin.com/company/skylink-ventures/" target='_blank'><i className="bi bi-linkedin"></i></a></li>
                            <li><a href="" target='_blank'><i className="bi bi-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/skylink_ventures/" target='_blank'><i className="bi bi-instagram"></i></a></li>
                            <li><a href="https://www.threads.net/@skylink_ventures" target='_blank'><i className="bi bi-threads"></i></a></li>
                            <li><a href="https://twitter.com/SkylinkVentures" target='_blank'><i className="bi bi-twitter-x"></i></a></li>
                        </ul>
                    </div>
                <div className="CopyRight">
                    <p>All rights reserved <i className="bi bi-c-circle"></i> 2023 Skylink Ventures</p>
                    <p>L21-BDI, Chikani, Alwar, Rajasthan</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
