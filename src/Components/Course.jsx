import React from "react";
import { Link } from "react-router-dom";

const Course = props => {
	const { title, instructor, image, duration, lessons, price, oldPrice, course_code } = props.course;

	const durationInHour = duration => {
		const hour = Math.floor(duration / 60);
		return `${hour} hour ${duration - hour * 60} minute`;
	};
	return (
		<div className="max-w-sm bg-white rounded-md shadow-md p-4 my-8  flex flex-col justify-between sm:mx-4 md:mx-12">
			<div className="card-image">
				<img
					src={image}
					alt=""
					className=""
				/>
			</div>
			<h3 className="text-2xl font-bold text-primary my-4">
				<Link to={`/course/${course_code}`}>{title}</Link>
			</h3>
			<p className="text-darkGray">with {instructor}</p>
			<p className="text-darkGray text-xs">
				{lessons} lessons | {durationInHour(duration)}
			</p>
			<div className="flex mt-4 justify-between items-center sm:flex-col sm:items-start sm:gap-2 md:flex-row md:items-center">
				<div className="flex">
					<h3 className="text-xl font-bold text-primary">${price}</h3>
					<h3 className="text-xl font-bold ml-2 line-through decoration-darkGray text-darkGray">${oldPrice}</h3>
				</div>
				<button className="bg-primary rounded text-white px-4 py-2 hover:opacity-80">Enroll Now</button>
			</div>
		</div>
	);
};

export default Course;
