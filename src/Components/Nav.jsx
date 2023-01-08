import React from "react";

const Nav = () => {
	return (
		<nav className="bg-blue flex justify-between items-center py-4 px-16 mx-auto fixed w-full">
			<div>
				<a href="#" className="text-white text-2xl font-bold logo">
					programmingDojo()
				</a>
			</div>
			<div className="links">
				<ul className="flex justify-around">
					<li className="mx-3 text-white font-semibold border-b-2">Home</li>
					<li className="mx-3 text-white font-semibold">Courses</li>
					<li className="mx-3 text-white font-semibold">About us</li>
					<li className="mx-3 text-white font-semibold">Contact Us</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
