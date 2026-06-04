import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, ChevronRight, CheckCircle2, ArrowRight, Lock } from "lucide-react";

function Contact() {
	const [formName, setFormName] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);
		document.title = "Contact Us | TechOps Global";
	}, []);

	return (
		<div className="min-h-screen bg-[#0a0b0f] text-white font-sans">

			{/* ============================================================
          1. HERO – breadcrumb left / form right / bg image full-bleed
         ============================================================ */}
			<section
				className="relative pt-28 pb-16 bg-cover bg-center"
				style={{
					backgroundImage:
						"linear-gradient(to right, rgba(8,9,14,0.96) 0%, rgba(8,9,14,0.88) 42%, rgba(8,9,14,0.60) 68%, rgba(8,9,14,0.30) 100%), url('/img/contact/hero-bg.jpg')",
					minHeight: "88vh",
				}}
			>
				<div className="w-full px-[50px] flex flex-col h-full">
					{/* Breadcrumb */}
					<nav className="flex items-center gap-2 text-[13px] text-gray-300 mb-10">
						<Link to="/" className="hover:text-[#ff7a00] transition-colors">Home</Link>
						<ChevronRight size={13} className="opacity-50" />
						<span>Contact Us</span>
					</nav>

					<div className="grid lg:grid-cols-12 gap-8 items-start flex-1">
						{/* ── LEFT COPY ── */}
						<div className="lg:col-span-7 flex flex-col justify-center py-6">
							<p className="text-[#ff7a00] text-[13px] font-bold tracking-[2px] uppercase mb-5">
								WE'RE HERE TO HELP
							</p>

							<h1 className="text-white font-extrabold leading-[1.1] mb-6"
								style={{ fontSize: "clamp(40px, 5.5vw, 68px)" }}>
								Let's Build a<br />
								Smarter Energy<br />
								Future—<span className="text-[#ff7a00]">Together.</span>
							</h1>

							<p className="text-gray-300 text-[17px] leading-relaxed max-w-[480px] mb-12 font-light">
								Have a question, project idea, or looking for more information? Our team is ready to help you unlock the potential of your property with AI-powered energy solutions.
							</p>

							{/* Three contact-info pills */}
							<div className="flex flex-wrap gap-8">
								{[
									{ icon: <Phone size={20} />, title: "Call Us", sub: "(609) 555-0123" },
									{ icon: <Mail size={20} />, title: "Email Us", sub: "hello@techopsglobal.com" },
									{ icon: <Clock size={20} />, title: "Business Hours", sub: "Mon - Fri: 8AM – 6PM EST" },
								].map((item, i) => (
									<div key={i} className="flex items-center gap-4">
										<div className="w-12 h-12 rounded-full border border-[#ff7a00] flex items-center justify-center text-[#ff7a00] shrink-0">
											{item.icon}
										</div>
										<div>
											<p className="text-white font-bold text-[14px] mb-0.5">{item.title}</p>
											<p className="text-gray-400 text-[13px]">{item.sub}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* ── RIGHT FORM ── */}
						<div className="lg:col-span-5">
							<div className="bg-[#0d0f15]/95 border border-white/8 rounded-xl shadow-2xl p-8 backdrop-blur-md">
								<h3 className="text-white font-bold text-[22px] mb-10">Send Us a Message</h3>

								<form
									action="https://formsubmit.co/matrikaventures2020@gmail.com"
									method="POST"
									className="flex flex-col gap-3"
								>
									<input type="hidden" name="_next"
										value={typeof window !== "undefined"
											? window.location.origin + "/success"
											: "https://techops-global.com/success"} />
									<input type="hidden" name="_subject"
										value={`New Contact from ${formName || "a user"} – TechOps Global`} />

									{[
										{ name: "name", placeholder: "Full Name*", type: "text", onChange: e => setFormName(e.target.value) },
										{ name: "email", placeholder: "Work Email*", type: "email", onChange: undefined },
										{ name: "phone", placeholder: "Phone Number*", type: "tel", onChange: undefined },
										{ name: "company", placeholder: "Company Name*", type: "text", onChange: undefined },
									].map(field => (
										<input
											key={field.name}
											type={field.type}
											name={field.name}
											placeholder={field.placeholder}
											required
											onChange={field.onChange}
											className="w-full bg-[#060810] border border-white/8 rounded-md px-4 py-3 text-white placeholder:text-gray-500 text-[14px] focus:border-[#ff7a00] outline-none transition-colors"
										/>
									))}

									<div className="relative">
										<select
											name="interest"
											required
											defaultValue=""
											className="w-full bg-[#060810] border border-white/8 rounded-md px-4 py-3 text-gray-500 text-[14px] focus:border-[#ff7a00] outline-none transition-colors appearance-none"
										>
											<option value="" disabled>I'm interested in...*</option>
											{["Solar Energy", "Battery Storage", "Wind Energy", "VPP Solutions", "Parking Lots", "Other"].map(v => (
												<option key={v} value={v} className="text-white bg-[#0d0f15]">{v}</option>
											))}
										</select>
										<ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 pointer-events-none" />
									</div>

									<textarea
										name="message"
										placeholder="Tell us about your project or inquiry...*"
										required
										rows={4}
										className="w-full bg-[#060810] border border-white/8 rounded-md px-4 py-3 text-white placeholder:text-gray-500 text-[14px] focus:border-[#ff7a00] outline-none transition-colors resize-none"
									/>

									<button
										type="submit"
										className="w-full bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-bold py-3.5 rounded-md text-[14px] tracking-wider uppercase flex items-center justify-center gap-2 mt-1 transition-colors"
									>
										SEND MESSAGE <ArrowRight size={16} />
									</button>

									<p className="text-center text-gray-500 text-[12px] flex items-center justify-center gap-1.5 mt-0.5">
										<Lock size={11} /> Your information is secure and confidential.
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ============================================================
          2. GET IN TOUCH – 4 info cards + 1 map card
         ============================================================ */}
			<section className="py-20 bg-[#0a0b0f]">
				<div className="w-full px-[50px]">
					{/* Section title */}
					<div className="flex items-center justify-center gap-5 mb-12">
						<span className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-r from-transparent to-[#ff7a00]" />
						<h2 className="text-white font-bold text-[26px]">Get in Touch</h2>
						<span className="flex-1 max-w-[80px] h-[1px] bg-gradient-to-l from-transparent to-[#ff7a00]" />
					</div>

					{/* 5-column grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
						{/* 4 info cards */}
						{[
							{
								icon: <MapPin size={26} strokeWidth={1.5} />,
								title: "Our Headquarters",
								lines: ["TechOps Global, Inc.", "200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"],
							},
							{
								icon: <Phone size={26} strokeWidth={1.5} />,
								title: "Call Us",
								lines: ["(609) 555-0123", "", "Toll Free:", "(833) TECH-OPS", "(833-832-4677)"],
							},
							{
								icon: <Mail size={26} strokeWidth={1.5} />,
								title: "Email Us",
								lines: ["hello@techopsglobal.com", "info@techopsglobal.com", "", "Investor Relations", "investors@techopsglobal.com"],
							},
							{
								icon: <Clock size={26} strokeWidth={1.5} />,
								title: "Business Hours",
								lines: ["Monday – Friday", "8:00 AM – 6:00 PM EST", "", "Saturday – Sunday", "By Appointment"],
							},
						].map((card, i) => (
							<div
								key={i}
								className="bg-[#0d0f15] border border-white/6 rounded-xl p-7 flex flex-col items-center text-center hover:border-white/12 transition-colors"
							>
								<div className="w-14 h-14 rounded-full border border-[#ff7a00] text-[#ff7a00] flex items-center justify-center mb-5 shrink-0">
									{card.icon}
								</div>
								<h4 className="text-white font-bold text-[15px] mb-4">{card.title}</h4>
								<div className="space-y-[3px]">
									{card.lines.map((line, j) => (
										<p key={j} className="text-gray-400 text-[13px] leading-snug m-0 min-h-[18px]">{line}</p>
									))}
								</div>
							</div>
						))}

						{/* Map card – takes 1 column in the 5-col grid */}
						<div className="relative rounded-xl overflow-hidden border border-white/6 bg-[#0d0f15] min-h-[280px]">
							<img
								src="/img/contact/map-dark.jpg"
								alt="Map – Princeton NJ"
								className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale saturate-0"
							/>
							<div className="absolute inset-0 flex flex-col items-center justify-center">
								<MapPin size={38} fill="#ff7a00" className="text-black drop-shadow-lg mb-2" />
								<div className="bg-black/80 border border-white/10 px-4 py-1.5 rounded text-white text-[13px] font-bold shadow-xl">
									Princeton, NJ
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ============================================================
          3. OUR LOCATIONS – 3 city cards with real photos on top
         ============================================================ */}
			<section className="py-20 bg-[#0a0b0f] border-t border-white/5">
				<div className="w-full px-[50px]">
					<div className="flex items-center justify-center gap-5 mb-12">
						<h2 className="text-white font-bold text-[26px]">Our Locations</h2>
					</div>

					<div className="grid md:grid-cols-3 gap-6">
						{[
							{
								city: "Princeton, New Jersey",
								type: "Headquarters",
								img: "/img/contact/princeton.jpg",
								address: ["200 Princeton Hightstown Rd", "Suite 201", "Princeton, NJ 08540", "USA"],
							},
							{
								city: "Houston, Texas",
								type: "Office",
								img: "/img/contact/houston.jpg",
								address: ["5444 Westheimer Rd", "Suite 1000", "Houston, TX 77056", "USA"],
							},
							{
								city: "Los Angeles, California",
								type: "Office",
								img: "/img/contact/los-angeles.jpg",
								address: ["1900 Avenue of the Stars", "Suite 200", "Los Angeles, CA 90067", "USA"],
							},
						].map((loc, i) => (
							<div
								key={i}
								className="bg-[#0d0f15] border border-white/6 rounded-xl overflow-hidden group hover:border-white/12 transition-colors"
							>
								{/* Photo */}
								<div className="h-[280px] overflow-hidden relative">
									<img
										src={loc.img}
										alt={loc.city}
										className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
									/>
								</div>
								{/* Text */}
								<div className="p-7">
									<h4 className="text-white font-bold text-[17px] mb-1">{loc.city}</h4>
									<p className="text-[#ff7a00] text-[12px] font-bold uppercase tracking-wider mb-4">{loc.type}</p>
									{loc.address.map((line, j) => (
										<p key={j} className="text-gray-400 text-[14px] leading-snug m-0">{line}</p>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ============================================================
          4. CTA BLOCK – "Let's Talk About Your Project"
         ============================================================ */}
			<section className="py-16 bg-[#0a0b0f]">
				<div className="w-full px-[50px]">
					<div
						className="relative rounded-xl overflow-hidden border border-white/6 p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-10"
						style={{
							backgroundImage:
								"linear-gradient(to right, rgba(9,11,16,0.97) 0%, rgba(9,11,16,0.88) 55%, rgba(9,11,16,0.70) 100%), url('/img/contact/hero-bg.jpg')",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					>
						{/* Left text */}
						<div className="lg:w-5/12">
							<h2 className="text-white font-extrabold text-[30px] lg:text-[40px] leading-[1.2] mb-5">
								Let's Talk About Your Project
							</h2>
							<p className="text-gray-300 text-[16px] leading-relaxed font-light">
								Whether you have a single site or a portfolio, we'll help you transform your real estate into high-performing energy assets with zero capex and maximum returns.
							</p>
						</div>

						{/* Middle checklist */}
						<div className="lg:w-4/12">
							<div className="grid grid-cols-2 gap-x-6 gap-y-4">
								{["Zero Capex", "Sustainable Impact", "Long-Term Value", "Maximum Performance"].map((item, i) => (
									<div key={i} className="flex items-center gap-2.5 text-white font-bold text-[14px]">
										<CheckCircle2 size={18} className="text-[#ff7a00] shrink-0" />
										{item}
									</div>
								))}
							</div>
						</div>

						{/* Right CTA button */}
						<div className="lg:w-3/12 flex justify-end">
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 bg-[#ff7a00] hover:bg-[#ff8a1c] text-black font-bold px-7 py-4 rounded-md text-[13px] uppercase tracking-wider transition-colors whitespace-nowrap shadow-[0_4px_20px_rgba(255,122,0,0.35)]"
							>
								GET YOUR FREE SITE ASSESSMENT <ArrowRight size={16} />
							</Link>
						</div>
					</div>
				</div>
			</section>

		</div>
	);
}

export default Contact;
