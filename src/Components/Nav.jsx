import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="bg-primary flex justify-between items-center py-4 px-16 w-full">
			<div>
				<Link
					to="/"
					className="text-white text-2xl font-bold logo"
				>
					programmingDojo()
				</Link>
			</div>
			<div className="links">
				<ul className="flex justify-around items-center">
					<NavLink
						to="/"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
						// className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Home
					</NavLink>
					<NavLink
						to="/courses"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Courses
					</NavLink>
					<NavLink
						to="/about-us"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						About us
					</NavLink>
					<NavLink
						to="/contact"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Contact Us
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
