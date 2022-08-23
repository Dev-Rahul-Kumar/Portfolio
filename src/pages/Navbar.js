import React from 'react';
import { useState } from 'react';
import { BsWindowSidebar } from 'react-icons/bs';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";

export default function Navbar() {
    const[color,setColor]=useState(false)

    const changeColor= () => {
        if(window.scrollY>50){
            setColor(true);
        }
        else
        {
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);
    return (
        <>

            <div className={color? "header header-bg": "header"}>
                
                    <div className='one'>
                        <h1><Link className="link" to="/">PortFolio.</Link> </h1>

                    </div>
                    <div className='Two'>
                        <ul className='two_one'>
                            <li><Link className='link' to="/">Home</Link> </li>
                            <li><Link className='link' to="/project">Projects</Link></li>
                            <li><Link className='link' to="/about">About</Link></li>
                            <li><Link className='link' to="/contact">Contact us</Link></li>
                            <a href={require("../img/resume.pdf")} download="resume" target="_blank"><button className='resume'>Download CV </button></a> 
                        </ul>
                    </div>
                
            </div>


        </>

    )
}