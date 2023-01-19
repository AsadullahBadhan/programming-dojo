import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="px-8 mx-auto md:px-16">
			<h1 className="mt-24 text-primary text-4xl font-bold logo md:text-5xl">programmingDojo()</h1>

			{/* who we are */}
			<section className="mt-8 flex flex-col md:flex-row">
				<div className="md:w-1/2">
					<h4 className="text-xl font-semibold">Who We Are</h4>
				</div>
				<div className="w-full md:w-1/2">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt perferendis quibusdam impedit cum facere porro a, quo corporis dicta, ab est distinctio similique. Officia minima minus temporibus provident iure.</p>
					<p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, autem aperiam? Enim reiciendis esse tempore exercitationem molestiae inventore iste quo aliquid! Velit fuga nam molestiae voluptate nesciunt aut assumenda iusto iste ducimus delectus odio quos quis doloribus, hic nulla modi corrupti inventore ratione ut, reiciendis tempora, nihil praesentium maiores dolor!</p>
				</div>
			</section>
		</div>
	);
};

export default About;
