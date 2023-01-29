import React, { useState, useEffect } from "react";
import Course from "./Course";

import courseData from "../coursesData.json";

const Courses = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		setCourses(courseData);
	}, []);

	return (
		// <div className="grid grid-cols-1 px-8 sm:grid-cols-2 lg:grid-cols-4">
		<div className="flex flex-col items-center px-2 md:flex-wrap md:flex-row md:justify-center md:items-stretch">
			{courses.map(course => (
				<Course
					course={course}
					key={course.course_code}
				></Course>
			))}
		</div>
	);
};

export default Courses;
