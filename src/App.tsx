import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./component/Home";
import Dday from "./component/Dday";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<AppLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/dday" element={<Dday />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
