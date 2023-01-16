import React from "react";
import { BsEnvelopeFill, BsFacebook, BsTelephoneFill, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div className="px-16 mx-auto">
			<div className="mt-24">
				<Link
					to="/"
					className="text-primary text-5xl font-bold logo"
				>
					programmingDojo()
				</Link>
			</div>
			<div className="mt-32 p-16 bg-[#d9d9d9] rounded-md">
				<h3 className="text-4xl text-primary text-right">Get In Touch</h3>
				<div className="mt-8">
					<ul className="flex flex-col justify-between">
						<li className="text-primary flex items-center mt-4 text-3xl">
							<BsFacebook /> <span className="ml-8">programmingdojo</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-3xl">
							<BsTwitter /> <span className="ml-8">@programmingdojo</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-3xl">
							<BsTelephoneFill /> <span className="ml-8">+123 456 7890</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-3xl">
							<BsEnvelopeFill /> <span className="ml-8"> programmingdojo@gmail.com </span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
