import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
	return (
		<>
			<Nav></Nav>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
