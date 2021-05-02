import React from 'react';
import image1 from '../../images/pic2.png'
import './AboutMe.css'

const AboutMe = () => {


    return (
        <div className='row App-header '>
            <div className='col-md-6 d-flex justify-content-around'>

                <img style={{ height: '200px' }} src={image1} alt="" />
                <p>
                    Hi I am Ashab. I am junior web developer.I have work experience in front-end and have a firm knowledge of HTML, CSS and JavaScript language .
                On a personal level, I am highly-motivated, result oriented, self-driven, hard-working, fast learner and constantly seeking to improve my skills and am fully aware of the latest Front-end Development Tools.
               </p>
            </div>
            
            <div className='col-md-6 mt-3'>
                <h1 className='text-center'>MY SKILL</h1>
               <div className='mySkill'>
                   <h5>JavaScript</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Html</h5>              
               </div>
               <div className='mySkill'>
                   <h5>React Js</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Css</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Bootstrap</h5>              
               </div>
               <div className='mySkill'>
                   <h5>ES6</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Firebase Auth</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Node Js</h5>              
               </div>
               <div className='mySkill'>
                   <h5>MongoDB</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Firebase</h5>              
               </div>
               <div className='mySkill'>
                   <h5>Express Js</h5>              
               </div>
            
            </div>
        </div>
    );
};

export default AboutMe;