import React from "react";

import Course from "./Course";
import Review from "./Review";

import heroBanner from "../assets/hero.svg";
import chooseImage from "../assets/choose.svg";

import courseData from "../coursesData.json";
import reviewData from "../reviewData.json";
import { Link } from "react-router-dom";

const Home = () => {
	const topCourse = courseData.slice(0, 4);

	return (
		<div className="px-8 py-4 md:px-16">
			{/* hero section */}
			<header className="flex flex-col-reverse gap-4 items-center justify-between md:flex-row">
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
				<section className="mt-16">
					<h2 className="text-2xl font-bold text-center my-8">Why Choose Us</h2>
					<div className="flex flex-col-reverse gap-4 items-center justify-around md:flex-row md:gap-0">
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
				<section className="mt-16 flex flex-col items-center">
					<h2 className="text-2xl font-bold my-8">Top Courses</h2>
					<div className="flex flex-wrap justify-center md:w-4/5">
						{topCourse.map(course => (
							<Course
								course={course}
								key={course.course_code}
							></Course>
						))}
					</div>
					<button className="bg-primary rounded text-white px-4 py-2 hover:opacity-80">
						<Link to="/courses">All Courses</Link>
					</button>
				</section>
				{/* review */}
				<section className="mt-16">
					<h2 className="text-2xl font-bold text-center my-8">What's peaple says about us</h2>
					<div className="flex flex-col gap-16 items-center justify-around md:flex-row md:items-stretch">
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
