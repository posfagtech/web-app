import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import "../../animate.min.css"

const Navbar = () => {
    const currentRoute = useHistory().location.pathname.toLowerCase()
    return (
        <nav style={style.nav} className="navbar navbar-expand-md bg-white navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <svg width="80" className="animated slideInLeft" height="90" viewBox="0 0 431 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Group 3" filter="url(#filter0_d_3_27)">
                            <g id="Group 1" className="animated zoomIn">
                                <path className="animated bounceInDown" id="Ellipse 1" d="M112.18 152.075C112.18 182.295 93.1117 206.792 69.5899 206.792C46.0682 206.792 27 182.295 27 152.075C27 121.856 46.0682 97.3585 69.5899 97.3585C93.1117 97.3585 112.18 121.856 112.18 152.075Z" fill="#544D4D"/>
                                <ellipse id="Ellipse 3" cx="352.755" cy="97.3585" rx="74.2446" ry="97.3585" fill="#544D4D"/>
                                <path className="animated zoomInDown" id="Ellipse 2" d="M301.307 97.3586C300.514 92.4585 186 124.268 164.74 130.18C143.48 136.093 96.3956 147.245 97.1881 152.145C97.9806 157.045 142.201 143.664 163.461 137.751C184.721 131.839 302.099 102.259 301.307 97.3586Z" fill="#544D4D"/>
                                <path className="animated bounce" id="Ellipse 4" d="M358.61 169.295C369.516 192.551 268.16 249.763 249.883 264.501C231.607 279.239 184.688 341.593 173.782 318.337C162.876 295.081 226.029 267.345 244.306 252.607C262.582 237.87 347.704 146.038 358.61 169.295Z" fill="#544D4D"/>
                                <ellipse className="animated rubberBand" id="Ellipse 5" cx="176.065" cy="315.849" rx="39.1367" ry="50.9434" fill="#544D4D"/>
                                <ellipse className="animated zoomIn" id="Ellipse 6" cx="363.978" cy="332.453" rx="54.964" ry="67.5472" fill="#544D4D"/>
                                <path id="Ellipse 7" d="M396.384 358.391C394.332 373.699 315.509 348.113 285.611 341.222C255.714 334.331 151.154 317.647 153.206 302.339C155.258 287.031 242.569 316.871 272.466 323.762C302.364 330.653 398.436 343.083 396.384 358.391Z" fill="#544D4D"/>
                            </g>
                            <g id="Group 2" className="animated bounceInLeft">
                                <path id="Ellipse 1_2" d="M226.735 221.215C226.735 195.226 240.226 174.158 256.868 174.158C273.509 174.158 287 195.226 287 221.215C287 247.204 273.509 268.272 256.868 268.272C240.226 268.272 226.735 247.204 226.735 221.215Z" fill="#0248FD" fillOpacity="0.81"/>
                                <ellipse id="Ellipse 3_2" cx="56.528" cy="268.272" rx="52.5281" ry="83.7283" transform="rotate(-180 56.528 268.272)" fill="#0248FD" fillOpacity="0.81"/>
                                <path id="Ellipse 2_2" d="M92.928 268.272C93.4887 272.486 174.508 245.13 189.549 240.045C204.59 234.96 237.903 225.37 237.342 221.156C236.781 216.941 205.495 228.449 190.454 233.534C175.413 238.619 92.3673 264.057 92.928 268.272Z" fill="#0248FD" fillOpacity="0.81"/>
                                <path id="Ellipse 4_2" d="M52.3861 206.407C44.6702 186.406 116.379 137.204 129.31 124.529C142.241 111.855 175.436 58.2298 183.152 78.2302C190.868 98.2306 146.187 122.083 133.256 134.758C120.325 147.432 60.1021 226.407 52.3861 206.407Z" fill="#0248FD" fillOpacity="0.81"/>
                                <ellipse id="Ellipse 5_2" cx="181.537" cy="80.3698" rx="27.6892" ry="43.8113" transform="rotate(-180 181.537 80.3698)" fill="#0248FD" fillOpacity="0.81"/>
                                <ellipse id="Ellipse 6_2" cx="48.5878" cy="66.0905" rx="38.8871" ry="58.0906" transform="rotate(-180 48.5878 66.0905)" fill="#0248FD" fillOpacity="0.81"/>
                                <path id="Ellipse 7_2" d="M25.6606 43.7836C27.1124 30.6186 82.8799 52.6226 104.032 58.5492C125.185 64.4757 199.161 78.8236 197.709 91.9887C196.257 105.154 134.485 79.4912 113.333 73.5646C92.1802 67.6381 24.2088 56.9487 25.6606 43.7836Z" fill="#0248FD" fillOpacity="0.81"/>
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_3_27" className="animated slideInLeft" x="-7.62939e-06" y="0" width="431" height="408" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="4"/>
                                <feGaussianBlur stdDeviation="2"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_27"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_27" result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </Link>
                <button className="navbar-toggler" type="button" id="navbar" data-bs-toggle="collapse" data-bs-target="#myMenu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="myMenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className={currentRoute.includes("home")?"nav-link actives" : "nav-link"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className={currentRoute.includes('services') ? "nav-link actives" : "nav-link"}>Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className={currentRoute.includes('projects') ? "nav-link actives" : "nav-link"}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className={currentRoute.includes('contact') ? "nav-link actives" : "nav-link"}>Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tech" className={currentRoute.includes('tech')? "nav-link actives" : "nav-link"}>Tech</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const style = {
    nav:{
        position:"sticky",
        top:"0",
        backgroundColor:"#fff",
        zIndex:"3"
    }
}

export default Navbar
