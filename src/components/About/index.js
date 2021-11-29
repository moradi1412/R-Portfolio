import React from 'react'
import asks from '../../assets/img/2.jpg'

function About() {

  return (
    <div className="container">
      <div className="row">
        <div className="col Hero" id="about">
            <h1 className="Hero-text"> Mohammad Javid Moradi </h1>
            <h2 className="Hero-text"> FULL-STACK WEB DEVELOPER </h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente similique blanditiis dolorum reprehenderit maxime.
              Fugit voluptatum veritatis iure consequuntur sequi delectus officia nulla consectetur id non, sit aliquam ducimus officiis! </p>
          </div>
          <div className= 'col'>
          <img className= "pimg" src={asks}
          alt="Javid Moradi" />
          </div>

        </div>
      </div>
    

  )
}; 

export default About