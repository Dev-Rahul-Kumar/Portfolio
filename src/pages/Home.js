import React from 'react'
import { Link } from 'react-router-dom';
import './home.css'
import Footer from './Footer';


export default function Home() {
  return (
    <>
      <div id='main_sheet'>
        <div id='heros' className=' header_top  '>
          <h1> Hi <span className="wave">👋</span> </h1>
          <h1>I'm Rahul Kumar,</h1>
          <h1>Front-end Developer </h1>
          <p>I design and developer experiences that make people's lives simpler through Web
            Apps.I work with HTML5,CSS3,JavaScript,React and also worked in Back-End technologies such as Node.js, Express.js, MongoDB(for Database management).
          </p>

          <br />
          <div className="button_class">
            <Link to="/project"><button className='button' type='button'>Project</button></Link>
            <Link to="/contact"><button className='button' type='button'>Contact</button></Link>
          </div>
        </div>

        <div className="skill">
          <h2 className='skilltitle'> My Skills</h2>

          <div class="column right">

            <div class="bars">
              <div class="info">
                <span>PYTHON</span>
                <span>70%</span>
              </div>
              <div className="line python"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>HTML</span>
                <span>90%</span>
              </div>
              <div className="line html"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>CSS</span>
                <span>70%</span>
              </div>
              <div className="line css"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>JAVASCRIPT</span>
                <span>60%</span>
              </div>
              <div className="line javascript"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>REACT JS</span>
                <span>85%</span>
              </div>
              <div className="line react"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>NODE JS</span>
                <span>50%</span>
              </div>
              <div className="line node"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>EXPRESS JS</span>
                <span>55%</span>
              </div>
              <div className="line express"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>MONGODB</span>
                <span>65%</span>
              </div>
              <div className="line mongodb"></div>
            </div>

            <div class="bars">
              <div class="info">
                <span>MYSQL</span>
                <span>70%</span>
              </div>
              <div className="line mysql"></div>
            </div>

          </div>


        </div>
        <Footer/>
      </div>
    </>
  )
}