import React from "react";

const Nav = () => {
	return (
		<nav className="flex justify-between items-center py-3">
			<div className="logo">
				<a href="#" className="text-blue text-2xl font-bold">
					programmingDojo()
				</a>
			</div>
			<div className="links">
				<ul className="flex justify-around">
					<li className="mx-3 text-blue font-bold border-b-2">Home</li>
					<li className="mx-3 text-blue font-bold">Courses</li>
					<li className="mx-3 text-blue font-bold">About us</li>
					<li className="mx-3 text-blue font-bold">Contact Us</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
