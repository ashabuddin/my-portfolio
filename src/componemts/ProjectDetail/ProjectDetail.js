import React from 'react';
import './ProjectDetail.css'

const ProjectDetail = ({ project }) => {

    const { name, image, live,  technology } = project

    return (

        
           <div className='col-md-4 mb-5 '>
             <div className="card" style={{width: '18rem',  }}>
                <img style={{height:'200px'}} src={image} className="card-img-top" alt="..." />
                <div className="card-body bgColor">
                    <h5 className="card-title text-white">{name}</h5>
                    <p className="card-text text-white">{ technology}</p>
                    <a target='blank' href={live} className="btn btn-primary text-center">LIVE DEMO</a>
                </div>
            </div>
           </div>
        
    );
};

export default ProjectDetail;