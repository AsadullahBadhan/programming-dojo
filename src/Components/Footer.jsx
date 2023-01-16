import React from "react";
import { BsEnvelopeFill, BsFacebook, BsTelephoneFill, BsTwitter } from "react-icons/bs";

const Footer = () => {
	return (
		<footer className="bg-primary p-12 mt-16">
			<div className="flex justify-between">
				<div>
					<h1 className="logo text-white text-3xl font-bold">programmingDojo()</h1>
					<div className="mt-8 w-2/3">
						<ul className="flex justify-between">
							<li className="text-white text-3xl">
								<a href="">
									<BsFacebook />
								</a>
							</li>
							<li className="text-white text-3xl">
								<a href="">
									<BsTwitter />
								</a>
							</li>
							<li className="text-white text-3xl">
								<a href="">
									<BsTelephoneFill />
								</a>
							</li>
							<li className="text-white text-3xl">
								<a href="">
									<BsEnvelopeFill />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="links">
					<p className="text-white font-medium text-lg">Usefull links</p>
					<ul>
						<li className="text-white font-medium mt-1 cursor-pointer">Home</li>
						<li className="text-white font-medium mt-1 cursor-pointer">Courses</li>
						<li className="text-white font-medium mt-1 cursor-pointer">About Us</li>
						<li className="text-white font-medium mt-1 cursor-pointer">Contact Us</li>
						<li className="text-white font-medium mt-1 cursor-pointer">Support</li>
						<li className="text-white font-medium mt-1 cursor-pointer">Blog</li>
					</ul>
				</div>
				<div className="flex flex-col items-start">
					<label
						htmlFor="email"
						className="text-sm text-white font-medium"
					>
						Email:
					</label>
					<input
						type="email"
						name="email"
						id="email"
					/>
					<label
						htmlFor="massege"
						className="mt-3 text-sm text-white font-medium"
					>
						Give Us your Feedback:
					</label>
					<textarea
						className="h-32 p-1 rounded"
						name="massege"
						id="massege"
					/>
					<button className="bg-white mt-2 px-4 py-1 rounded-sm text-primary font-semibold">Send</button>
				</div>
			</div>
			<p className="text-white text-xs text-center">&copy; Programming Dojo 2023</p>
		</footer>
	);
};

export default Footer;
