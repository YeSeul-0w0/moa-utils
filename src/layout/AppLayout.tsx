import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
	return (
		<div className="min-h-screen flex flex-col max-w-[430px] mx-auto border border-gray-300">
			<div className="flex-1">
				<Outlet />
			</div>
			<footer className="h-12 text-center text-gray-400 border-t text-sm py-3">
				made by ...
			</footer>
		</div>
	);
};

export default AppLayout;
