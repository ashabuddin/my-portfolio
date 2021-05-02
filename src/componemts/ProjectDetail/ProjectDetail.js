import React from 'react';

const ProjectDetail = ({ project }) => {

    const { name, image, live,  technology } = project

    return (

        
           <div className='col-md-4'>
             <div className="card" style={{width: '18rem',  }}>
                <img style={{height:'200px'}} src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{ technology}</p>
                    <a target='blank' href={live} className="btn btn-primary text-center">LIVE DEMO</a>
                </div>
            </div>
           </div>
        
    );
};

export default ProjectDetail;