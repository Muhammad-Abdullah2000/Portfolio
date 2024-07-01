import React from 'react'
import '../Styles/About.css'
import { Link } from 'react-router-dom'
import ttttt from '../imgs/ttttt.png'

function About(props) {
  return (
   <>
      <section className="about section " id="about">
                <h2 className="section-title">About Me</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={ttttt} alt=""/>
                    </div>
                    
                    <div className='subtitle'>
                        <h2 className="aboutsubtitle">I'am Abdullah and I'm a <span id='SE'>Software Engineer</span></h2>
                        
                        <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam unde sunt illum ipsam qui fuga consequatur quisquam quae, commodi itaque voluptatem nemo expedita nihil non quidem voluptas impedit! Ratione alias sunt dolore distinctio adipisci illum vero tempora autem id saepe inventore, sint dicta! Eaque dolorem, non quae necessitatibus inventore magnam ullam minima impedit ab id error veniam. Non, architecto.</p>           
                    </div> 
                    <div className="btn">
                        
                        {/* <a href="/" id='button'>Download CV</a> */}
                        <Link to="/"  id='button'>Download CV</Link>
                        </div>                                  
                </div>
            </section>



  
   
   
   </>
  )
}

export default About

