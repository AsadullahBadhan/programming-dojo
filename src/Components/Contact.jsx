import React from "react";
import { BsEnvelopeFill, BsFacebook, BsTelephoneFill, BsTwitter } from "react-icons/bs";

const Contact = () => {
	return (
		<div className="px-4 mx-auto md:px-16">
			<h1 className="mt-24 text-primary text-4xl font-bold logo md:text-5xl">programmingDojo()</h1>
			<div className="mt-16 p-6 bg-[#d9d9d9] rounded-md md:p-16 md:mt-32">
				<h3 className="text-3xl text-primary md:text-right md:4xl">Get In Touch</h3>
				<div className="mt-8">
					<ul className="flex flex-col justify-between">
						<li className="text-primary flex items-center mt-4 text-xl md:text-3xl">
							<BsFacebook /> <span className="ml-8">programmingdojo</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-xl md:text-3xl">
							<BsTwitter /> <span className="ml-8">@programmingdojo</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-xl md:text-3xl">
							<BsTelephoneFill /> <span className="ml-8">+123 456 7890</span>
						</li>
						<li className="text-primary flex items-center mt-4 text-xl md:text-3xl">
							<BsEnvelopeFill /> <span className="ml-8"> programmingdojo@gmail.com </span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Contact;
