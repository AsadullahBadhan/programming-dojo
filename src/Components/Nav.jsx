import React from "react";
import { Link } from "react-router-dom";

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
					<Link
						to="/"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Home
					</Link>
					<Link
						to="/courses"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Courses
					</Link>
					<Link
						to="/about"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						About us
					</Link>
					<Link
						to="/contact"
						className="text-white font-semibold px-2 ml-4 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
					>
						Contact Us
					</Link>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
