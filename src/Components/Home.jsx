import React from "react";

import Course from "./Course";
import Review from "./Review";

import heroBanner from "../assets/hero.svg";
import chooseImage from "../assets/choose.svg";

import courseData from "../coursesData.json";
import reviewData from "../reviewData.json";

const Home = () => {
	const topCourse = courseData.slice(0, 4);

	return (
		<div className="px-16 py-4">
			{/* hero section */}
			<header className="flex items-center justify-between">
				<div className="header-description">
					<h1 className="text-3xl font-extrabold">
						Welcome To, <br />
						<span className="text-primary">Programming Dojo</span>
					</h1>
					<p className="text-darkGray font-medium mt-3">Hello coding Ninjas this is your personal dojo to enhance your coding power.</p>
				</div>
				<div className="hero-image">
					<img
						src={heroBanner}
						alt="hero banner"
						className="w-3/4 mx-auto"
					/>
				</div>
			</header>
			<main>
				{/* choose us section */}
				<section>
					<h2 className="text-2xl font-bold text-center my-8">Why Choose Us</h2>
					<div className="flex items-center justify-around">
						<img
							src={chooseImage}
							alt="why choose us"
							className="w-60"
						/>
						<ul className="list-disc">
							<li>Team of industry experience teacher</li>
							<li>Clear Graphics and HD prerocorded video</li>
							<li>Screte support group on Facebook</li>
							<li>Live session on every week</li>
						</ul>
					</div>
				</section>

				{/*top courses */}
				<section>
					<h2 className="text-2xl font-bold text-center my-8">Top Courses</h2>
					<div className="flex flex-wrap justify-around">
						{topCourse.map(course => (
							<Course course={course}></Course>
						))}
					</div>
					<button className="bg-primary rounded text-white px-4 py-2 relative left-1/2 -translate-x-1/2 hover:opacity-80">All Courses</button>
				</section>
				{/* review */}
				<section>
					<h2 className="text-2xl font-bold text-center my-8">What's peaple says about us</h2>
					<div className="flex justify-around">
						{reviewData.map(review => (
							<Review review={review} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
};

export default Home;
