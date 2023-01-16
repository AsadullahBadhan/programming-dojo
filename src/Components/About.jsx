import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="px-16 mx-auto">
			<div className="mt-24">
				<Link
					to="/"
					className="text-primary text-6xl font-bold logo"
				>
					programmingDojo()
				</Link>
			</div>

			{/* why choose us */}
			<section className="mt-8 flex">
				<div className="w-1/2">
					<h4 className="text-xl font-semibold">Who We Are</h4>
				</div>
				<div className="w-1/2">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt perferendis quibusdam impedit cum facere porro a, quo corporis dicta, ab est distinctio similique. Officia minima minus temporibus provident iure.</p>
					<p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, autem aperiam? Enim reiciendis esse tempore exercitationem molestiae inventore iste quo aliquid! Velit fuga nam molestiae voluptate nesciunt aut assumenda iusto iste ducimus delectus odio quos quis doloribus, hic nulla modi corrupti inventore ratione ut, reiciendis tempora, nihil praesentium maiores dolor!</p>
				</div>
			</section>
		</div>
	);
};

export default About;
