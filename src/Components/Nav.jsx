import React from "react";

const Nav = () => {
	return (
		<nav className="bg-primary flex justify-between items-center py-4 px-16 mx-auto w-full">
			<div>
				<a href="#" className="text-white text-2xl font-bold logo">
					programmingDojo()
				</a>
			</div>
			<div className="links">
				<ul className="flex justify-around items-center">
					<li className="mx-3 text-white font-semibold hover:rounded hover:px-2 hover:py-1 hover:bg-[#bd912c]">Home</li>
					<li className="mx-3 text-white font-semibold">Courses</li>
					<li className="mx-3 text-white font-semibold">About us</li>
					<li className="mx-3 text-white font-semibold">Contact Us</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
