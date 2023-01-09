import React from "react";
import hero from "../assets/hero.svg";

const Courses = props => {
	const { title, instructor, image, duration, lessons, price, oldPrice } = props.course;

	const durationInHour = duration => {
		const hour = Math.floor(duration / 60);
		return `${hour} hour ${duration - hour * 60} minute`;
	};
	return (
		<div className="w-80 bg-white rounded-md shadow-md p-4 mx-12 my-8">
			<img src={hero} alt="" className="w-72 mx-auto" />
			<h3 className="text-2xl font-bold text-primary">{title}</h3>
			<p className="text-darkGray">with {instructor}</p>
			<p className="text-darkGray text-xs">
				{lessons} lessons | {durationInHour(duration)}
			</p>
			<div className="flex mt-4 justify-between items-center">
				<div className="flex">
					<h3 className="text-xl font-bold text-primary">${price}</h3>
					<h3 className="text-xl font-bold ml-2 line-through decoration-darkGray text-darkGray">${oldPrice}</h3>
				</div>
				<button className="bg-primary rounded text-white px-4 py-2 hover:opacity-80">Enroll Now</button>
			</div>
		</div>
	);
};

export default Courses;
