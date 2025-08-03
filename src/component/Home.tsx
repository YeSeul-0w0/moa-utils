import { useNavigate } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";

const Home = () => {
	const navigate = useNavigate();

	return (
		<main className="flex flex-col items-center justify-between px-4 py-20 text-center">
			<div className="text-xs text-gray-600">일상 생활에서 유용한 기능들을</div>
			<h1 className="text-2xl font-bold mt-1 mb-6">MoA</h1>

			<section className="bg-gray-100 rounded-xl my-10 p-6 flex gap-10 justify-center w-full max-w-sm">
				<div className="flex flex-col items-center cursor-pointer"></div>
			</section>
		</main>
	);
};

export default Home;
