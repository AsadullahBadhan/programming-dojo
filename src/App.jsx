import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import CourseDetail from "./Components/CourseDetail";
import Courses from "./Components/Courses";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import NoMatch from "./Components/NoMatch";

function App() {
	return (
		<>
			<Nav></Nav>
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/courses"
					element={<Courses></Courses>}
				/>
				<Route
					path="/course/:courseCode"
					element={<CourseDetail></CourseDetail>}
				/>
				<Route
					path="/about-us"
					element={<About />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="*"
					element={<NoMatch />}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
