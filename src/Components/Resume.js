import React, { Component } from 'react';
import FontAwesome from './FontAwesome'


class Resume extends Component {
  render() {

    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}
             <br />
             <br />
            <b><i>Key Contributions: <br /></i></b> 
            {work.contributions}
            </p>
        </div>
      })
      //Using components for this instead
      // var skills = this.props.data.skills.map(function(skills){
      //   var className = 'fa fab fa-'+skills.name.toLowerCase() + ' ' + 'fab-'+skills.name.toLowerCase() + ''
      //   return <li key={skills.name}><span className={className}></span><em>{skills.name}</em></li>
      // })
    }

    return (
      <section id="resume">
      <div className="row work">
         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

      <div id="techSkill" className="row skill">
        <h1><span>Skills</span></h1>
        <p>{skillmessage}</p>
        <div className="fa-skills">
            <ul className="skill-container">
                <li><FontAwesome fa="fab fa-html5 fa-8x" skillname="HTML5"/></li>
                <li><FontAwesome fa="fab fa-react fa-8x" skillname="React + Redux"/></li>
                <li><FontAwesome fa="fab fa-github fa-8x" skillname="Git + GitHub"/></li>
                <li><FontAwesome fa="fab fa-css3-alt fa-8x" skillname="CSS3"/></li>
                <li><FontAwesome fa="fab fa-python fa-8x" skillname="Python"/></li>
                <li><FontAwesome fa="fab fa-wordpress-simple fa-8x" skillname="WordPress"/></li>
                <li><FontAwesome fa="fab fa-sass fa-7x" skillname="SASS/SCSS"/></li>
                <li><FontAwesome fa="fab fa-js fa-8x" skillname="JS + jQuery"/></li>
                <li><FontAwesome fa="fab fa-node-js fa-8x" skillname="Node"/></li>
                <li><FontAwesome fa="fab fa-php fa-7x" skillname="PHP"/></li>
                <li><FontAwesome fa="fas fa-database fa-7x" skillname="MongoDB"/></li>
                <li><FontAwesome fa="fas fa-table fa-7x" skillname="PostgreSQL"/></li>
                <li><FontAwesome fa="fas fa-fire-alt fa-8x" skillname="Firebase"/></li>
                
            </ul>
          </div>
      </div>
   </section>
    );
  }
}

export default Resume;
