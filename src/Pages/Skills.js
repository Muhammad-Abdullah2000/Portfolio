import React from 'react'
import '../Styles/Skills.css'

function Skills() {
  return (
   <>
     <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 id='SkillsDetails'>Front-End</h2>
            <span>
              React.JS, HTML, CSS, NPM,
              BootStrap, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2 id='SkillsDetails'>Back-End</h2>
            <span>
              NodeJS, PHP, Java Spring, ExpressJS,
              MySQL, MongoDB, Firbase, OracleDb
            </span>
          </li>
          <li className="item">
            <h2 id='SkillsDetails'>Languages</h2>
            <span>JavaScript, Java, Python, C#, C++</span>
          </li>
          <li className="item">
            <h2 id='SkillsDetails'>Ux/UI Designing</h2>
            <span>Figma, Photoshop</span>
          </li>
        </ol>
      </div>
   </>
  )
}

export default Skills
