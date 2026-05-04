import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
	{
		img: '/img/business-solution-2026-03-10-02-05-05-utc.JPG',
		subtitle: 'Renewable Energy Solutions',
		title1: 'Powering the Future Through',
		title2: 'Smart Energy Solutions',
		desc: 'TechOps Global delivers reliable solar, wind, battery storage, and industrial power solutions designed to drive efficiency, sustainability, and long-term growth.',
	},
	{
		img: '/img/concept-of-an-energy-storage-system-based-on-elect-2026-03-24-07-19-07-utc.jpg',
		subtitle: 'Advanced Technology',
		title1: 'Reliable Solar, Wind &',
		title2: 'Energy Storage Solutions',
		desc: 'TechOps Global delivers advanced energy infrastructure across the USA and international markets, specializing in utility-scale systems and industrial operations.',
	},
	{
		img: '/img/low-angle-shot-of-a-group-of-businesspeople-joinin-2026-01-09-09-45-09-utc.jpg',
		subtitle: 'Sustainable Growth',
		title1: 'Clean Energy Infrastructure',
		title2: 'For a Sustainable Tomorrow',
		desc: 'We combine technical excellence with strategic execution to help organizations transition toward cleaner, smarter, and more efficient energy systems.',
	},
];

function Home() {
	const [activeSlide, setActiveSlide] = useState(0);
	const [formName, setFormName] = useState("");
	const [apptName, setApptName] = useState("");

	// Re-initialize jQuery theme plugins when this page mounts
	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "TechOps Global | Solar, Wind & Energy Storage Solutions USA";
		const setMetaTag = (attrName, attrValue, content) => {
			let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
			if (!element) {
				element = document.createElement('meta');
				element.setAttribute(attrName, attrValue);
				document.head.appendChild(element);
			}
			element.setAttribute('content', content);
		};
		setMetaTag('name', 'description', 'TechOps Global provides renewable energy, solar power, wind systems, battery storage, and industrial infrastructure solutions across the USA and global markets.');
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % heroSlides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
		{/*==================================================*/}
		{/* Start Solar Panel Hero Section (Auto-Carousel) */}
		{/*==================================================*/}
		<div id="home" style={{ position: 'relative', overflow: 'hidden', background: '#1c1632' }}>
			{heroSlides.map((slide, i) => (
				<div
					key={i}
					className="slider-section d-flex align-items-center"
					style={{
						backgroundImage: `url("${slide.img}")`,
						backgroundSize: 'cover',
						backgroundPosition: 'center center',
						position: i === 0 ? 'relative' : 'absolute',
						top: 0, left: 0, right: 0, bottom: 0,
						opacity: activeSlide === i ? 1 : 0,
						transition: 'opacity 1s ease-in-out',
						zIndex: activeSlide === i ? 2 : 1,
					}}
				>
					<div className="container">
						<div className="row align-items-center">
							<div className="col-lg-12">
								<div className="slider-content">
									<h4>{slide.subtitle}</h4>
									<h1>{slide.title1}</h1>
									<h1>{slide.title2}</h1>
									<p>{slide.desc}</p>
									<div className="solar-btn slider1">
										<Link to="/services">Explore Solutions <i className="bi bi-arrow-right"></i></Link>
									</div>
									<div className="solar-btn slider2">
										<Link to="/contact">Request Consultation <i className="bi bi-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
			{/* Dot Indicators */}
			<div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10, display: 'flex', gap: '10px' }}>
				{heroSlides.map((_, i) => (
					<button
						key={i}
						onClick={() => setActiveSlide(i)}
						style={{
							width: activeSlide === i ? '32px' : '12px',
							height: '12px',
							borderRadius: '6px',
							background: activeSlide === i ? '#e63a27' : 'rgba(255,255,255,0.6)',
							border: 'none',
							cursor: 'pointer',
							transition: 'all 0.3s ease',
							padding: 0,
						}}
					/>
				))}
			</div>
		</div>
		{/*==================================================*/}
		{/*End Solar Panel Hero Section  */}
		{/*==================================================*/}

		{/*==================================================*/}
		{/* Start Trust Bar Section */}
		{/*==================================================*/}
		<div className="trust-bar-section" style={{ backgroundColor: '#fba500', padding: '20px 0', textAlign: 'center' }}>
			<div className="container">
				<h4 style={{ margin: 0, color: '#fff', fontSize: '20px', fontWeight: '600' }}>Trusted Expertise in Renewable Energy, Infrastructure & Industrial Operations</h4>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Trust Bar Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  About Section */}
		{/*==================================================*/}
		<div id="about" className="about-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="">
							<div className="about-thumb">
								<img src="assets/images/about/about-thumb.jpg" alt=""  loading="lazy" />
								<div className="about-counter">
									<div className="about-counter-text">
										<div className="about-numbar">
											<h4 className="counter">29</h4>
											<span>+</span>
										</div>
										<div className="about-text">
											<h5>Years Experience</h5>
										</div>
									</div>
								</div>
								<div className="about-counter-two d-flex align-items-center ">
									<div className="about-counter-img">
										<img src="assets/images/about/about-shape.png" alt=""  loading="lazy" />
									</div>
									<div className="about-number-two">
										<h4 className="counter">100</h4>
										<span>MW+</span>
										<h5>Commissioned</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about-section-title">
							<div className="about-section-sub-title ">
								<h4>About TechOps Global</h4>
							</div>
							<div className="about-section-main-title ">
								<h2>Powering the Future Through Smart Energy Solutions</h2>
							</div>
						</div>
						{/* tab */}
						<div className="tab">
							<ul className="tabs active ">
								<li className="current"><Link to="/contact">About Us <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Mission <i className="bi bi-arrow-up-right"></i></Link></li>
								<li className=""><Link to="/contact">Vision <i className="bi bi-arrow-up-right"></i></Link></li>
							</ul> {/* / tabs */}
		
							 <div className="tab_content">
								{/* / tabs_item */}
								<div className="tabs_item" >
									<div className="tabs-items-content">
										<div className="about-content-discription ">
											<p>TechOps Global is a forward-thinking energy solutions company committed to building reliable and sustainable power systems for businesses, communities, and governments. We specialize in renewable energy development, industrial operations, engineering support, and advanced infrastructure solutions across domestic and international markets.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list ">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Mega Project Management</li>
														<li><i className="bi bi-chevron-double-right"></i> NIWE Validated Data</li>
														<li><i className="bi bi-chevron-double-right"></i> Industrial Grid-Tie</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6 col-sm-6 col-6">
												<div className="about-list ">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Power Evacuation</li>
														<li><i className="bi bi-chevron-double-right"></i> Land Procurement</li>
														<li><i className="bi bi-chevron-double-right"></i> Utility Liaisoning</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about ">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>
								</div>
								{/* / tabs_item */}
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>Our mission is to help organizations transition toward cleaner, smarter, and more efficient energy systems. We combine technical excellence with strategic execution to deliver measurable results and long-term value.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Job Opportunity Creation</li>
														<li><i className="bi bi-chevron-double-right"></i> Local Technical Training</li>
														<li><i className="bi bi-chevron-double-right"></i> Sustainable Infrastructure</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Job Opportunity Creation</li>
														<li><i className="bi bi-chevron-double-right"></i> Sustainable Agriculture</li>
														<li><i className="bi bi-chevron-double-right"></i> Technical Empowerment</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>		
								</div>
								{/* / tabs_item */}
								<div className="tabs_item" style={{ display: 'none' }}>
									<div className="tabs-items-content">
										<div className="about-content-discription">
											<p>We aim to be the global leader in sustainable energy infrastructure, driving innovation and efficiency in every project we deliver. Our vision is a world powered by reliable, clean energy for a sustainable tomorrow.</p>
										</div>
										<div className="row">
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Bankable Power Systems</li>
														<li><i className="bi bi-chevron-double-right"></i> Optimized ROI Strategy</li>
														<li><i className="bi bi-chevron-double-right"></i> Standardized Logistics</li>
													</ul>
												</div>
											</div>
											<div className="col-lg-6 col-md-6">
												<div className="about-list">
													<ul>
														<li><i className="bi bi-chevron-double-right"></i> Standardized Logistics</li>
														<li><i className="bi bi-chevron-double-right"></i> Reliable Grid Hosting</li>
														<li><i className="bi bi-chevron-double-right"></i> Economic Stabilization</li>
													</ul>
												</div>
											</div>
											<div className="solar-btn about">
												<Link to="/services">Our Service <i className="bi bi-arrow-right"></i></Link>
											</div>
										</div>
									</div>		
								</div>
							</div> 
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  About Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  Service Section */}
		{/*==================================================*/}
		 <div id="services" className="service-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title ">
								<h4>Our Solutions</h4>
							</div>
							<div className="section-main-title ">
								<h2>Comprehensive Energy & Infrastructure Services</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service1.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">1. Solar Energy Systems</Link></h4>
										<p>Custom solar power solutions for commercial, industrial, and utility-scale applications.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service2.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">2. Wind Power Infrastructure</Link></h4>
										<p>Efficient wind energy systems designed for long-term performance and sustainability.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="service-box ">
							<div className="service-thumb">
								<img src="assets/images/resource/service3.png" alt=""  loading="lazy" />
								<div className="service-content">
									<div className="service-text">
										<h4><Link to="/contact">3. Battery Energy Storage</Link></h4>
										<p>Advanced storage systems for grid stability, backup power, and energy optimization.</p>
										<Link to="/contact">Explore Solutions <i className="bi bi-arrow-up-right"></i></Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Service Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  contanct us Section */}
		{/*==================================================*/}
		 <div id="contact" className="contact-us-section">
			<div className="container">
				<div className="row contact-us align-items-center">
					<div className="col-lg-2"></div>
					<div className="col-lg-7 col-md-6">
						<div className="section-title ">
							<div className="section-main-title contact-us">
								<h2>Ready to Build the Future of Energy?</h2>
							</div>
						</div>
						<div className="contact-us-discription ">
							<p>Partner with TechOps Global for dependable solutions in solar, wind, storage, and industrial operations.</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="solar-btn contact-us ">
							<Link to="/contact">Request Consultation <i className="bi bi-arrow-right"></i></Link>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  contanct us Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  pricing Section */}
		{/*==================================================*/}
		 <div className="pricing-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-12">
						<div className="section-title">
							<div className="section-sub-title pricing ">
								<h4>Our Pricing Table</h4>
							</div>
							<div className="section-main-title pricing ">
								<h2>Have Questions</h2>
								<h2>For Us?</h2>
							</div>
						</div>
						{/* Start Accordion */}
						<div className="tab_container">
							<div id="tab1" className="tab_content">
								<ul className="accordion">
									<li className=""><a><span> What are the benefits of Hybrid Solar systems? </span></a>
										<p>Hybrid systems are a unique and innovative solution that combines solar energy with traditional power sources to create a reliable and efficient energy system, providing consistent power even when solar generation is low.</p>
									</li>
									<li className=""><a><span> How does Peak Demand Shaving reduce fees? </span></a>
										<p>Energy Storage helps mitigate demand-based fees by allowing your business to flatten demand peaks, drawing from stored solar energy rather than grid energy during high-cost billing cycles.</p>
									</li>
									<li className=""><a><span> What is validated wind resource data? </span></a>
										<p>Our wind resource assessment data is validated by the National Institute of Wind Energy (NIWE), ensuring the highest accuracy for project planning and investment – a first for the private energy sector in the region.</p>
									</li>
									<li className=""><a><span> Do you provide Off-grid solutions for remote areas? </span></a>
										<p>Yes, our off-grid solar and battery systems are specifically designed for facilities located in remote areas without access to the power grid, ensuring 24/7 reliability through advanced storage.</p>
									</li>
								</ul>
							</div>
						</div>
						{/* End Accordion */}
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="pricing-box ">
							<div className="pricing-info">
								<div className="pricing-year"><h4>Standard</h4></div>
								<div className="pricing-rate"><h2>Project<span>Based</span></h2></div>
							</div>
							<div className="pricing-icon"><i className="bi bi-check2"></i></div>
							<div className="pricing-content">
								<h4>Consultation First</h4>
								<p>Detailed technical and commercial feasibility studies followed by customized engineering and deployment strategies for industrial scale.</p>
							</div>
							<div className="pricing-value"><h5>Best Value</h5></div>
						</div>
						<div className="pricing-box ">
							<div className="pricing-info">
								<div className="pricing-year"><h4>Enterprise</h4></div>
								<div className="pricing-rate"><h2>Supply<span>Chain</span></h2></div>
							</div>
							<div className="pricing-icon"><i className="bi bi-check2"></i></div>
							<div className="pricing-content">
								<h4>Finance Options</h4>
								<p>Strategic supply chain finance solutions for large-scale solar and wind developments to optimize ROI and project cash flow.</p>
							</div>
							<div className="pricing-value"><h5>Best Value</h5></div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  pricing Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Call Do Action  Section */}
		{/*==================================================*/}
		 <div className="call-do-action-section" style={{ height: '450px', backgroundImage: 'url("/assets/images/resource/call-do-bg.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						{/* Background Image restored via CSS class or inline if needed */}
						<div style={{ height: '200px' }}></div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Call Do Action  Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Choose Us  Section */}
		{/*==================================================*/}
		 <div className="choose-us-section" style={{ marginTop: '-220px', position: 'relative', zIndex: 10 }}>
			<div className="container">
				<div className="row choose" style={{ backgroundImage: 'url("/assets/images/resource/choose-bg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
					<div className="col-lg-6 col-md-12">
						<div className="section-title ">
							<div className="section-sub-title choose">
								<h4>Why Choose Us</h4>
							</div>
							<div className="section-main-title home">
								<h2>Why Businesses Choose</h2>
								<h2>TechOps Global</h2>
							</div>
							<div className="about-discription">
								<p>Our leadership team brings decades of expertise in power generation, engineering, renewable energy, infrastructure development, and industrial operations. We combine technical excellence with strategic execution to deliver measurable results.</p>
							</div>
						</div>
						<div className="choose-us-content ">
							<div className="choose-us-thumb">
								<img src="assets/images/resource/choose-thumb.png" alt=""  loading="lazy" />
							</div>
							<div className="choose-us-list">
								<ul>
									<li><i className="bi bi-check"></i> Experienced Industry Leadership</li>
									<li><i className="bi bi-check"></i> Proven Project Delivery</li>
									<li><i className="bi bi-check"></i> Safety & Compliance Focused</li>
									<li><i className="bi bi-check"></i> Innovative Clean Energy Solutions</li>
									<li><i className="bi bi-check"></i> Cost-Efficient Operations</li>
									<li><i className="bi bi-check"></i> Global Expertise with Local Execution</li>
								</ul>
							</div>
							<div className="choose-us-info">
								<div className="solar-btn choose">
									<Link to="/contact">Get A Quote <i className="bi bi-arrow-right"></i></Link>
								</div>
								<div className="choose-us-icon">
									<i className="bi bi-telephone-plus"></i>
								</div>
								<div className="choose-us-phone">
									<h5>Emergency Call <span>+232 33 448 065</span></h5>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="choose-contact-box ">
							<div className="choose-contact-title">
								<h4>Make an Appointment</h4>
							</div>
							<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="it-form">
								<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
								<input type="hidden" name="_subject" value={`New Submission By ${formName || 'a User'} From Techops Global`} />
								<div className="row">
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="name" placeholder="Full Name *" onChange={(e) => setFormName(e.target.value)} />
											<i className="bi bi-person"></i>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box">
											<input type="text" name="email" placeholder="Email Address *" />
											<i className="bi bi-envelope"></i>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box">
											<select name="subject" defaultValue="">
												<option value="" disabled>Select Service *</option>
												<option value="Commercial Solar">Commercial Solar</option>
												<option value="Battery Storage">Battery Storage</option>
												<option value="Wind Energy">Wind Energy</option>
												<option value="Solar Maintenance">Solar Maintenance</option>
												<option value="Energy Audits">Energy Audits</option>
											</select>
											<i className="bi bi-chevron-down" style={{ pointerEvents: 'none' }}></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box">
											<textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message *"></textarea>
											<i className="bi bi-chat-left-text-fill"></i>
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button">
											<button type="Submit">Schedule Appointment <i className="bi bi-arrow-right"></i></button>
										</div>
									</div>
								</div>
							</form>
							<div id="status"></div>
						</div>
					</div>
				</div>
			</div>
		 </div>
		{/*==================================================*/}
		{/* End Solar Panel  Choose Us  Section */}
		{/*==================================================*/}



		{/*==================================================*/}
		{/* Start Solar Panel  Protfolio  Section */}
		{/*==================================================*/}
		<div id="projects" className="protfolio-section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-8 col-md-6 col-sm-12">
						<div className="section-title">
							<div className="section-sub-title protfolio">
								<h4>Featured Projects</h4>
							</div>
							<div className="section-main-title protfolio ">
								<h2>Building High-Impact Energy Projects</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="solar-btn protfolio">
							<Link to="/contact">All  Projects <i className="bi bi-arrow-right"></i></Link>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="protfolio-thumb ">
							<img src="assets/images/project/protfolio-thumb.png" alt=""  loading="lazy" />
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="protfolio-item ">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>01</span></div>
								<div className="protfolio-item-title">
									<h3>100MW Solar Photovoltaic</h3>
									<h3>Kenema District, SL</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
						<div className="protfolio-item">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>02</span></div>
								<div className="protfolio-item-title">
									<h3>Wind Resource Assessment</h3>
									<h3>20 Validated Locations</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
						<div className="protfolio-item style-two">
							<div className="protfolio-item-content">
								<div className="protfolio-item-numbar"><span>03</span></div>
								<div className="protfolio-item-title">
									<h3>Off-Grid Battery Storage</h3>
									<h3>Industrial Utility Plan</h3>
								</div>
							</div>
							<div className="protfolio-itme-hover">
								<img src="assets/images/project/prot-hover.png" alt=""  loading="lazy" />
							</div>
							<div className="protfolio-item-icon">
								<i className="bi bi-arrow-up-right"></i>
							</div>
						</div> 
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Protfolio  Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Solar Panel  Offer  Section */}
		{/*==================================================*/}
		<div className="offer-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 col-md-12">
						<div className="section-title ">
							<div className="section-sub-title offer">
								<h4>Our Services</h4>
							</div>
							<div className="section-main-title offer">
								<h2>Taking The Effort Out Of</h2>
								<h2>Business Energy</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/service1.png" alt="Industrial Power"  loading="lazy" />
									</div>
									<div className="offer-content">
										<h4>4. Industrial Power Operations</h4>
										<p>Reliable plant operations, maintenance, and performance management.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/service2.png" alt="Technical Consulting"  loading="lazy" />
									</div>
									<div className="offer-content">
										<h4>5. Technical Consulting</h4>
										<p>Strategic guidance for energy planning, design, compliance, and execution.</p>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 col-6">
								<div className="offer-items-box">
									<div className="offer-card-image">
										<img src="assets/images/resource/service3.png" alt="EPC Support"  loading="lazy" />
									</div>
									<div className="offer-content">
										<h4>6. EPC Project Support</h4>
										<p>End-to-end engineering, procurement, and construction management solutions.</p>
									</div>
								</div>
							</div>
						</div>
						{/* start progress bar */}
						<div className="process-ber-plugin">
							<span className="process-bar">Project Reliability</span>
							<div id="bar1" className="barfiller">
								<div className="tipWrap" style={{ display: 'inline' }}>
									<span className="tip" style={{ left: '100.254px', transition: 'left 7s ease-in-out 0s' }}>98%</span>
								</div>
								<span className="fill" data-percentage="98" style={{ background: 'rgb(22, 181, 151)', width: '100.076px', transition: 'width 7s ease-in-out 0s' }}></span>
							</div>  
							<span className="process-bar">Grid Efficiency</span>
							<div id="bar2" className="barfiller">
								<div className="tipWrap" style={{ display: 'inline' }}>
									<span className="tip" style={{ left: '100.294px', transition: 'left 7s ease-in-out 0s' }}>95%</span>
								</div>
								<span className="fill my-class" data-percentage="95" style={{ background: 'rgb(22, 181, 151)', width: '100.117px', transition: 'width 7s ease-in-out 0s' }}></span>
							</div>
						</div>
						{/* end progress bar */}
					</div>
					<div className="col-lg-5 col-md-12">
						<div className="offer-thumb ">
							<img src="assets/images/resource/offer-thumb.png" alt=""  loading="lazy" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Offer  Section */}
		{/*==================================================*/}





		{/*==================================================*/}
		{/* Start Solar Panel  Appointment  Section */}
		{/*==================================================*/}
		<div className="appointment-section">
			<div className="container">
				<div className="row appointment">
					<div className="col-lg-7 col-md-6">
						<div className="section-title ">
							<div className="section-sub-title offer appointment">
								<h4>Make an Appointment</h4>
							</div>
							<div className="section-main-title offer ">
								<h2>Accelerating Growth</h2>  
								<h2>And Success</h2>
							</div>
						</div>
						<div className="choose-us-info ">
							<div className="choose-us-icon appointment">
								<i className="bi bi-telephone-plus"></i>
							</div>
							<div className="choose-us-phone">
								<h5>Emergency Call <span>+232 33 448 065</span></h5>
							</div>
						</div>
					</div>
					<div className="col-lg-5 col-md-6">
						<div className="choose-contact-box appointment ">
							<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="appt-form">
								<input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.origin + "/success" : "https://techops-global.com/success"} />
								<input type="hidden" name="_subject" value={`New Appointment Request By ${apptName || 'a User'} From Techops Global`} />
								<div className="row">
									<div className="col-lg-12">
										<div className="form-box appointment">
											<input type="text" name="name" placeholder="Your Name" onChange={(e) => setApptName(e.target.value)} />
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-box appointment">
											<input type="text" name="email" placeholder="Email Address" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12">
										<div className="form-box-button appointment">
											<button type="Submit">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
							<div id="appt-status"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Appointment  Section */}
		{/*==================================================*/}


		{/*==================================================*/}
		{/* Start Industries We Serve Section */}
		{/*==================================================*/}
		<div id="industries" className="service-section style-three" style={{ backgroundColor: '#f8f9fa', padding: '100px 0' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="section-title text-center">
							<div className="section-sub-title">
								<h4>Industries We Serve</h4>
							</div>
							<div className="section-main-title">
								<h2>Powering Growth Across Sectors</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-4">
					{[
						{ title: "Healthcare", desc: "Providing mission-critical backup power and energy independence to ensure life-saving medical equipment operates without interruption.", icon: "bi-hospital" },
						{ title: "Education", desc: "Reducing operational costs for schools and universities with high-efficiency solar campuses, enabling more funds for student success.", icon: "bi-book" },
						{ title: "Government", desc: "Supporting energy security and infrastructure stability with reliable, large-scale renewable projects tailored for public utility needs.", icon: "bi-bank2" },
						{ title: "Finance", desc: "Optimizing ROI through predictable energy overheads and long-term asset management of renewable energy portfolios.", icon: "bi-currency-dollar" }
					].map((industry, i) => (
						<div className="col-lg-3 col-md-6" key={i}>
							<div className="service-box style-two text-center" style={{ padding: '30px', background: '#fff', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', height: '100%' }}>
								<div className="industry-icon mb-3" style={{ fontSize: '40px', color: '#fba500' }}>
									<i className={`bi ${industry.icon}`}></i>
								</div>
								<h4>{industry.title}</h4>
								<p style={{ fontSize: '14px' }}>{industry.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 


		{/*==================================================*/}
		{/* Start Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		<div className="subscribe-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-md-6">
						<div className="section-title ">
							<div className="section-main-title Subscribe">
								<h2>Subscribe For </h2>
								<h2>Exclusive Updates</h2>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-6">
						<form action="https://formsubmit.co/matrikaventures2020@gmail.com" method="POST" id="contact-form">
							<input type="hidden" name="_next" value="https://techops-global.com/success" />
							<input type="hidden" name="_subject" value="New Newsletter Subscription From Techops Global" />
							<div className="form-box Subscribe ">
								<input type="text" name="email" placeholder="Your Email Address..." />
								<button type="submit" className="icons">
									<i className="bi bi-send"></i>
								</button>
							</div>
							<div className="checkbox-box">
								<input type="checkbox" id="reviewcheck" name="reviewcheck" />
								<label htmlFor="reviewcheck"> I agree to the <Link to="/contact">Privacy Policy</Link></label>
							</div>
						</form>
						<div id="status"></div>
					</div>
				</div>
			</div>
		</div>
		{/*==================================================*/}
		{/* End Solar Panel  Subscribe  Section */}
		{/*==================================================*/} 
		</>
	);
}

export default Home;
