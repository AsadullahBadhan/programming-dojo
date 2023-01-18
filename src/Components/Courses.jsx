import React from "react";
import Course from "./Course";

import courseData from "../coursesData.json";

const Courses = () => {
	return (
		// <div className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-4">
		<div className="flex flex-col items-center md:flex-wrap md:flex-row md:justify-center md:items-stretch">
			{courseData.map(course => (
				<Course
					course={course}
					key={course.course_code}
				></Course>
			))}
		</div>
	);
};

export default Courses;
