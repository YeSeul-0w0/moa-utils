import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./component/Home";

function App() {
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
}

export default App;
