import React from "react";
import heroBanner from "../assets/hero.svg";
import chooseImage from "../assets/choose.svg";
import courseData from "../coursesData.json";
import Course from "./Course";

const Home = () => {
	const topCourse = courseData.slice(0, 4);

	return (
		<div className="container px-16 py-4">
			{/* hero section */}
			<header className="flex items-center my-4 justify-between">
				<div className="header-description">
					<h1 className="text-4xl font-extrabold">
						Welcome To, <span className="text-blue">programmingDojo()</span>
					</h1>
					<p className="text-gray-200 font-medium mt-3">Learn programming for your dream job</p>
				</div>
				<div className="hero-image">
					<img src={heroBanner} alt="hero banner" className="w-3/4 mx-auto" />
				</div>
			</header>
			<main>
				{/* choose us section */}
				<section>
					<h2 className="text-2xl font-bold text-center my-8">Why Choose Us</h2>
					<div className="flex items-center justify-around">
						<img src={chooseImage} alt="why choose us" className="w-60" />
						<ul className="list-disc">
							<li>Team of industry experience teacher</li>
							<li>Clear Graphics and HD prerocorded video</li>
							<li>Screte support group on Facebook</li>
							<li>Live session on every week</li>
						</ul>
					</div>
				</section>

				{/* courses */}
				<section>
					<h2 className="text-2xl font-bold text-center my-8">Top Courses</h2>
					<div className="flex flex-wrap justify-around">
						{topCourse.map(course => (
							<Course course={course}></Course>
						))}
					</div>
					<button className="bg-blue rounded text-white px-4 py-2 hover:opacity-80 relative left-1/2 -translate-x-1/2">All Courses</button>
				</section>
				{/* review */}
				<section></section>
			</main>
		</div>
	);
};

export default Home;
