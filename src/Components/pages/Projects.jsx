import React from 'react'
import Navbar from "../subComponents/Navbar"
import Footer from "../subComponents/Footer"
import { Helmet } from 'react-helmet-async';

const Projects = () => {
	return (
		<>
			<Helmet>
                <title>POSFAGTECH - Projects</title>
                <meta name="description" content="Solutions made so far are shown in this page, we provide you solutions you need at the very moment." />
                <link rel="canonical" href="/projects" />
            </Helmet>
			<Navbar /> 
			{/* header */}
			<div className="project_header mb-3">
                <div className="container-fluid project_bg" style={{padding:"3em"}}>
                    <h3 className="display-4 text-center text-light" style={{textTransform:"uppercase", fontWeight:"bold"}}>
						Projects
					</h3>
                </div>
            </div>

				<div className="container p-2 mb-2">
					<center>
						<h1 className="text-center mt-5 mb-2" style={{color:"#1C85E8", width:"9em",fontWeight:"bolder"}}>
							Featured Projects
						</h1>
					</center>
					<p className="text-center text-scondary mb-4">
						We hope for your best services and solution. 
						Over the years we have worked and delivered projects for various businesses in diverse sectors. 
						We are proud of our work and we believe you'll love it too. 
						You can go through our website design and development, corporate branding, and other projects for more.
					</p>
				</div>
			
			{/* project grid */}
			<div className="container mt-5">
				<div className="row">
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-sm-12 p-2">
						<div className="card">
							<img src="" alt="" className="card-img-top" />
							<div className="card-body">
								<h3 className="card-title">
									1
								</h3>
								<p className="card-text text-center">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, 
									architecto. Itaque aspernatur, rem culpa explicabo odit magnam maxime, 
									impedit inventore corrupti ipsa minus qui soluta in esse quas expedita ullam?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Awesome team section  */}

			 {/* Clients review  */}
			 <div className="container p-5 shadow-lg">
                <div className="conatiner p-3 pl-5">
                    <h1 className="display-3" style={{fontWeight:"bolder",width:"75%"}}>
                        Best servicing creative agency.
                    </h1>
                    <p className="text-secondary">
                        We believe in the power of recognition and empowerment leading to great employee engagement. 
                        And employee engagement is critical to guest engagement. 
                        Employee empowerment and recognition are the core of our culture and how we achieve outstanding customer service.
                    </p>
                </div>
                <br />
            </div>
			<Footer />
		</>
	)
}

export default Projects
