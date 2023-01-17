import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	const [menuClass, setMenuClass] = useState("hidden relative md:block");
	const [isMenuClicked, setIsMenuClicked] = useState(false);

	const toggleMenu = () => {
		setIsMenuClicked(!isMenuClicked);
		if (!isMenuClicked) setMenuClass("relative md:block");
		else setMenuClass("hidden relative md:block");
	};

	return (
		<nav className="bg-primary flex justify-between items-center px-8 py-4 w-full md:px-16 ">
			<div>
				<Link
					to="/"
					className="text-white text-2xl font-bold logo"
				>
					programmingDojo()
				</Link>
			</div>
			<div className={menuClass}>
				<ul className="w-80 py-8 absolute top-16 -right-24 sm:-right-56 rounded-md bg-primary/90 flex flex-col justify-around items-center md:w-full md:gap-2 md:static md:flex-row md:py-0 md:px-4">
					<li className="my-2 ml-4">
						<NavLink
							to="/"
							className="text-white font-semibold px-2 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
						>
							Home
						</NavLink>
					</li>
					<li className="my-2 ml-4">
						<NavLink
							to="/courses"
							className="text-white font-semibold px-2 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
						>
							Courses
						</NavLink>
					</li>
					<li className="my-2 ml-4">
						<NavLink
							to="/about-us"
							className="text-white font-semibold px-2 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
						>
							About us
						</NavLink>
					</li>
					<li className="my-2 ml-4">
						<NavLink
							to="/contact"
							className="text-white font-semibold px-2 hover:rounded hover:py-1 hover:bg-white hover:opacity-70 hover:text-primary cursor-pointer"
						>
							Contact Us
						</NavLink>
					</li>
				</ul>
			</div>
			<div
				className="md:hidden cursor-pointer"
				onClick={toggleMenu}
			>
				<span className="block w-6 h-1 bg-white rounded mt-1"></span>
				<span className="block w-6 h-1 bg-white rounded mt-1"></span>
				<span className="block w-6 h-1 bg-white rounded mt-1"></span>
			</div>
		</nav>
	);
};

export default Nav;
