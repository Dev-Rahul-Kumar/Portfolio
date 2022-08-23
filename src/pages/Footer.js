import React from 'react'
import "./footer.css"
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="footer2">
                    <div className="link">
                        <ul>
                            <li><a href="mailto:rk2909559@gmail.com" target="_blank"><BsGoogle/></a></li>
                            <li><a href="https://github.com/rk2909559" target="_blank"><BsGithub/></a></li>
                            <li><a href="https://www.linkedin.com/in/rahul-kumar05/" target="_blank"><BsLinkedin/></a></li>
                            <li><a href="https://twitter.com/Rahulku80777454" target="_blank"><BsTwitter/></a></li>
                        </ul>

                    </div>

                    <div className="footerelement">
                        © 2020 Copyright: Rahul kumar
                        
                    </div>
                </div>
            </footer>

        </>
    )
}
