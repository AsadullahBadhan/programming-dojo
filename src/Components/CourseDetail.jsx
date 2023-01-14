import React from "react";
import { useParams } from "react-router-dom";
import courseData from "../coursesData.json";

const CourseDetail = () => {
	const { courseCode } = useParams();
	const course = courseData.find(courses => courseCode === courses.course_code);

	const { title, instructor, image, duration, lessons, price, oldPrice, description } = course;

	console.log(course);

	return (
		<div className="px-16 py-4">
			<div className="course-header mt-8 flex justify-between">
				<div className="course-title">
					<h1 className="text-6xl font-bold text-primary">{title}</h1>
					<h3 className="font-bold text-3xl text-right mt-8">with {instructor}</h3>
				</div>
				<div className="card-image">
					<img
						src={image}
						alt=""
					/>
				</div>
			</div>
			<p className="w-1/2">{description}</p>
			<p className="my-4 text-darkGray text-sm">
				{lessons} lessons | {duration}
			</p>
			<div className="flex flex-col mt-4 justify-between items-start">
				<div className="flex">
					<h3 className="text-xl font-bold text-primary">${price}</h3>
					<h3 className="text-xl font-bold ml-2 line-through decoration-darkGray text-darkGray">${oldPrice}</h3>
				</div>
				<button className="bg-primary rounded text-white px-4 py-2 hover:opacity-80 mt-4">Enroll Now</button>
			</div>
		</div>
	);
};

export default CourseDetail;
