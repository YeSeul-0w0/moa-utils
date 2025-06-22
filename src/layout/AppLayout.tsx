import React from "react";

interface AppLayoutProps {
	children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-gray-100 flex justify-center items-start mobile:items-center mobile:p-5">
			<div className="w-full max-w-[393px] mx-auto min-h-screen bg-white mobile:shadow-2xl mobile:rounded-xl mobile:overflow-hidden mobile:min-h-[calc(100vh-2.5rem)]">
				{children}
			</div>
		</div>
	);
};

export default AppLayout;
