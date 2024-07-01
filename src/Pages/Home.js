import React from 'react'
import '../Styles/Home.css'

function Home(props) {
  return (
    <div className='home'>
      <div className="about">
       <h2 id='HI'>Hi, My name is Abdullah and I am a </h2>
       <div className="prompt">
        <p>{props.Animation}</p>
       </div>
      </div>
    </div>
  )
}

export default Home
