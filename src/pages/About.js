import React from 'react'
import "./about.css"
import about from "../img/react1.jpg"
import Footer from './Footer'

export default function About() {
  return (
    <>
      <div className="about_page">

        <div className="about_heading">
          <h1>ABOUT.</h1>
          <h4>I'm friendly Front-end Developer</h4>
        </div>

        <div className="about_detail">
          <div className="abouttext">
            <h2>Who Am I?</h2>
            <br />
            <h5>I am a Front-end React Developer.I can Develop responsive and secure page. </h5>
          </div>
          <div className="aboutpic">
            <img src={about} className="about_pic" alt="" width={500}  height={250} />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}