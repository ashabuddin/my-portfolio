import React from 'react';
import image1 from '../../images/pic2.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='row App-header'>
            <div className='col-md-6'>

                <img style={{ height: '200px' }} src={image1} alt="" />

                <p>
                    Hi I am Ashab. I am junior web developer.I have work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language and possess a good knowledge of computer software packages (frameworks and tools) that are used in today’s technology.
                  
                On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.
               </p>
            </div>
            <div className='col-md-6'>
                <h1>MY SKILL</h1>
               <div className='mySkill'>
                   <h5>JavaScript</h5>

               </div>
            
            </div>
        </div>
    );
};

export default AboutMe;