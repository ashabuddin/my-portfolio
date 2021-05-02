import React from 'react';
import './Project.css'
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import mobileRepair from '../../images/mobileRepair.png'
import bookStall from '../../images/bookStall.png'
import premierLeague from '../../images/premierLeague.png'
import ridding from '../../images/ridding.png'



const Project = () => {

    const projects = [

        {
          name : 'MOBILE REPAIR',
          live:'https://mobile-services-4034b.web.app/',
          image:mobileRepair,
          technology:'React.js,Node.js,Express.js, MOngoDB',
         
        },
        {
          name : 'BOOK STALL',
          live:'https://book-stall-f45e5.web.app/',
          image:bookStall,
          technology:'React.js,Node.js,Express.js, MOngoDB , BootStrap' ,
         
        },
        {
          name : 'INNER CITY RIDER',
          live:'https://inner-city-riding.web.app/',
          image:ridding,
          technology:'React.js,Node.js,Express.js, MOngoDB',
         
        },
        {
          name : 'PREMIER LEAGUE',
          live:'https://amazing-ptolemy-4ba03a.netlify.app/',
          image:premierLeague,
          technology:'React.js,Node.js,Express.js, MOngoDB',
         
        },
       
    ]


    return (
       <div className='d-flex justify-content-around'>
          <div className='row mt-5 pt-5 bgColor'>
            {
                projects.map(project => <ProjectDetail project={project}></ProjectDetail> )
            }
          </div>
       </div>
    );
};

export default Project;