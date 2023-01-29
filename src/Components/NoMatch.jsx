import React from "react";

const NoMatch = () => {
	return (
		<div className="p-16 mx-auto flex flex-col items-center justify-center">
			<img
				src="https://i.postimg.cc/KvHXd23H/undraw-page-not-found-re-e9o6.png"
				alt="404 not found"
				className="w-1/2"
			/>
			<h1 className="mt-8 text-4xl font-bold">Oops! No page found</h1>
		</div>
	);
};

export default NoMatch;
