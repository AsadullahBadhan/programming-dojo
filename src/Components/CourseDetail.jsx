import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courseData from "../coursesData.json";

const CourseDetail = () => {
	const { courseCode } = useParams();
	const [rating, setRating] = useState(0);
	const course = courseData.find(courses => courseCode === courses.course_code);

	const { title, instructor, instructor_image, image, ratings, duration, lessons, price, oldPrice, description } = course;

	return (
		<div className="px-16 py-4">
			<div className="course-header mt-8 flex justify-between">
				<div className="course-title w-1/2">
					<h1 className="text-5xl font-bold text-primary">{title}</h1>
					<div className="flex items-center mt-8 h-32">
						<div>
							<img
								src={instructor_image}
								className="rounded-full w-32 h-32"
							/>
						</div>
						<div className="flex flex-col ml-4 h-32 justify-around">
							<h3 className="font-bold text-3xl">with {instructor}</h3>
							<p className="text-primary font-bold">Ratings: {ratings}</p>
						</div>
					</div>
				</div>
				<div className="w-2/5">
					<img
						src={image}
						alt=""
					/>
				</div>
			</div>
			<p className="w-1/2 mt-8">{description}</p>
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
