import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='app-navbar'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">           
                 <h1 className='navbar-brand'>ASHAB</h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link  ms-5" to='/'>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  ms-5" to='/aboutMe'>ABOUT ME</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link className="nav-link  ms-5" to='/blog'>BLOG</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  ms-5" to='/contact'>CONTACT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link  ms-5" to='/project'>PROJECT</Link>
                        </li>
                      
                    </ul>

                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;