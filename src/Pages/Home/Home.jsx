import React, { useRef } from 'react'
import "./Home.css"
import mainVideo from "../../Media/hero-videoHD.mp4"
import avoLogo from "../../Media/AVO.png"
import img_1 from "../../Media/img_1.jpg"
import Footer from '../../Components/Footer/Footer'


const Home = () => {

   
    return (
        <div className='container'>
            <div className="main-home-container">
                <img src={avoLogo} alt="avo-logo" />
                {/* Z-INDEX 11 */}
                <div className="video-tint"></div>
                {/* Z-INDEX 10 */}
                {/* <section className='noise-filter'>
                    <svg className='svgs'>
                        <filter id="noise">
                            <feTurbulence id="turbulence">
                                <animate
                                    attributeName='baseFrequency'
                                    dur="50s"
                                    values="0.9 0.9;0.8 0.8;0.9 0.9"
                                    repeatCount="indefinite">
                                </animate>
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
                        </filter>
                    </svg>
                </section> */}
                {/* Z-INDEX 9 */}
                <div className="background"></div>
                <video className="hero-video" src={mainVideo} type="video/mp4" muted autoPlay="true" loop playsInline preload="true"  />
                
            </div>
            <section className='section-2'>
                <div className="subscribe-window">
                    <div className="card-sub">
                        <div className="texts">
                            <h2>More Coming Soon</h2>
                            <h1>Sign up to recieve upcoming news and updates to the AVO project!</h1>
                            <div className='input-component'>
                                <input placeholder='Email Address'></input>
                                <button>Submit</button>
                            </div>
                        </div>
                        <div className="imgs"><img src={img_1} alt="img_1" /></div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home