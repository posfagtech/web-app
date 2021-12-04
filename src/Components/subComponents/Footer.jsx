import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid" id="footer">
            {/* interest and collaboration */}
            <div className="container mt-2">
                <div className="row mt-4">
                    <div className="col-md-12 col-sm-12">
                        <h1 className="display-6 text-white" style={{fontWeight:"bolder",}}>
                            Interested in Collaboration?
                        </h1>
                        <p className="text-white p-2">
                            Let's help you work on your project, we offer you best services ever.
                        </p>
                        <button className="btn btn-dark float-end p-3">
                            Contact Us <i className="bi bi-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <hr  style={{borderBottom:"solid 0.9px white"}}/>

            {/* footer contents */}
            <div className="container mb-3 mt-5">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h4 className="text-white text-center" style={{fontWeight:"bold"}}>
                            POSFAGTECH
                        </h4>
                        <p className="p-2 text-light mt-2">
                            We are able to help you with the latest high technology solutions.
                            <br />
                            <a href="mailto:sample@posfagtech.com" className="nav-link text-white">sample@posfagtech.com</a>
                        </p>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h4 className="text-white text-center" style={{fontWeight:"bold"}}>
                            USEFUL LINKS
                        </h4>
                        <ul className="nav flex-column align-center mt-2">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="#">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="">Customer Stories</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <h4 className="text-white text-center" style={{fontWeight:"bold"}}>
                            SERVICES
                        </h4>
                        <div className="row mt-2">
                            <div className="col-lg-6 text-white col-sm-12">
                                <h6>Websites</h6>
                                <h6>Mobile</h6>
                                <h6>Ecommerce</h6>
                                <h6>SEO</h6>
                            </div>
                            <div className="col-lg-6 text-white col-sm-12">
                                <h6>Photography</h6>
                                <h6>Motion Graphics</h6>
                                <h6>3D Animation</h6>
                                <h6>Courses</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* copyrights */}
            <div className="p-2 text-center text-white mt-5">
                <p className="p-2">2021 &copy; POSFAGTECH  |  All rights are Reserved.</p>
            </div>
        </div>
    )
}

export default Footer
