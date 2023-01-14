import React from "react";
import Course from "./Course";

import courseData from "../coursesData.json";

const Courses = () => {
	return (
		<div className="flex flex-wrap justify-around">
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
