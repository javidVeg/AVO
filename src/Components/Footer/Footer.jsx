import React from 'react'
import "../Footer.css"
import AVO_footer from "../../Media/AVO_footer.png"
import IG_logo from "../../Media/Instagram-Icon.png"
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsDiscord } from 'react-icons/bs';







const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-main">
                    <img src={AVO_footer} alt="AVO-footer" />
                    <div className="contact">
                        <h2>Are you a Veteran and what to get involved?</h2>
                        <h3>Email Us: <a href="mailto: info@allveteransoutside.com">info@allveteransoutside.com</a></h3>
                    </div>
                    <div className="socials">
                        <h3>Follow us!</h3>
                        <div className="icons">
                            <a href='https//:'><AiFillFacebook color='black' size={30} /></a>
                            <a href='https//:'><AiFillInstagram color='black' size={30} /></a>
                            <a href='https//:'><AiFillTwitterSquare color='black' size={30} /></a>
                            <a href='https//:'><BsDiscord color='black' size={30} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-copy">
                    <p> ALL VETERANS OUTSIDE &reg; {new Date().getFullYear()}</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer