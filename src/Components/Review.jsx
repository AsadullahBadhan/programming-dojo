import React from "react";

const Review = props => {
	const { name, image, comment, designation } = props.review;
	return (
		<div className="bg-white rounded-md shadow-sm w-72 p-6 relative top-6">
			<img src={image} alt="reviewer's image" className="w-20 h-20 -top-10 left-1/2 -translate-x-1/2 absolute rounded-full" />
			<p className="text-darkGray text-sm mt-6">{comment}</p>
			<h4 className="text-2xl font-bold mt-2">{name}</h4>
			<p className="font-bold">{designation}</p>
		</div>
	);
};

export default Review;
