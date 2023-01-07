import React from "react";
import hero_banner from "../assets/hero.svg";

const Home = () => {
	return (
		<div className="container">
			{/* hero section */}
			<header className="flex items-center my-4">
				<div className="header-description">
					<h1 className="text-3xl font-extrabold">
						Welcome To, <span className="text-blue">programmingDojo()</span>
					</h1>
					<p className="text-gray-600">Learn programming for your dream job</p>
				</div>
				<div className="hero-image ">
					<img src={hero_banner} alt="" className="w-3/4 mx-auto" />
				</div>
			</header>
		</div>
	);
};

export default Home;
