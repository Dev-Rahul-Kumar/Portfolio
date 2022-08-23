import React from 'react'
import './project.css'
import image from "../img/mqdefault.jpg"
import Airbnb from "../img/airbnb-clone.jpg"
import wikisearch from "../img/wikiSearch.png"
import Footer from './Footer'


export default function Projects() {
  return (
    <div id='main_project'>
      <div className="topic_one">
        <h1>PROJECTS.</h1>
        <h3>Some of my most Recent works</h3>
      </div>
      <div className="topic_two">
        <h1 className='topic_heading'>Projects</h1>

        <div className="grid">
          <div className="grid_one">

            <img src={image} alt="image" />
            <div className="text">
              <h2>IMDB Clone</h2>
              <p>This React project is a simplified Full-Stack version of the IMDb website. It uses The MovieDB Api to search for movies and display results and keep user login data using MongoDB Database</p>
              <a href="https://github.com/rk2909559/Imdb-Clone" target="_blank"><button className='submitbutton'> Source</button></a>
              {/* <a href="www.google.com"><button className='submitbutton codebutton'> View</button></a> */}
            </div>
          </div>

          <div className="grid_one">
            <img src={Airbnb} alt="image" />
            <div className="text">
              <h2>AIRBNB Clone</h2>
              <p>Airbnb Clone is an online solution where listed Rental Properties are shared amongst host and guest.</p>
              <a href="https://github.com/rk2909559/Airbnb2" target="_blank"><button className='submitbutton'> Source</button></a>
              <a href="https://master.d1bwx044pnnbpl.amplifyapp.com/"><button className='submitbutton codebutton'> View</button></a>
            </div>
          </div>


          <div className="grid_one">
            <img src={wikisearch} alt="image" />
            <div className="text">
              <h2>WikiSearch</h2>
              <p>It is a website you can find information regarding your search topic
                you want. It is just fetching the information from Wikipedia API.</p>
              <a href="www.google.com"><button className='submitbutton'> Source</button></a>
              {/* <a href="www.google.com"><button className='submitbutton codebutton'> View</button></a> */}
            </div>
          </div>


         

        </div>

      </div>
      <Footer/>
    </div>
  )
}
