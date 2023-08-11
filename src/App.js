import "./App.css";
import Dish from "./dish";
import Dishes from "./dishes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Dishes />} />
					<Route path="/dish/:id" element={<Dish />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
