import { Calendar } from "lucide-react";
import info from "../data/dday.json";

const current: Date = new Date();
const year: string = current.getFullYear().toString();
const month: string = (current.getMonth() + 1).toString().padStart(2, "0");
const date: string = current.getDate().toString().padStart(2, "0");
const day: string = info["day_mapping"][current.getDay()];

const Dday = () => {
	return (
		<div className="flex flex-col items-center px-4 py-8 text-center gap-6">
			<div>
				<p className="text-sm text-gray-500">날짜를 계산해보자.</p>
				<h1 className="text-2xl font-bold mt-1">Dday</h1>
			</div>
			<div className="w-full max-w-sm bg-indigo-100 rounded-2xl py-2 text-lg font-semibold text-center">
				{year}.{month}.{date} {day}
			</div>
			<div className="flex justify-between w-full max-w-sm text-sm text-gray-700">
				<div className="flex flex-col items-center">
					<p>3일 후는</p>
					<p>2025. XX. XX</p>
				</div>
				<div className="flex flex-col items-center">
					<p>7일 후는</p>
					<p>2025. XX. XX</p>
				</div>
				<div className="flex flex-col items-center">
					<p>15일 후는</p>
					<p>2025. XX. XX</p>
				</div>
			</div>
			<hr className="w-full border-t border-blue-200 my-4" />
			<div className="w-full max-w-sm flex flex-col gap-4">
				<div className="flex items-center gap-2">
					<Calendar />
					<span className="font-semibold">날짜 선택</span>
				</div>
				<div className="flex justify-between">
					<input
						type="number"
						placeholder="숫자"
						className="w-50 px-1 py-1 border border-blue-400 rounded-xl text-center text-blue-600 font-medium"
					/>
					<button className="text-gray-700">일 후는?</button>
					<button className="text-gray-700">일 전은?</button>
				</div>
			</div>
		</div>
	);
};

export default Dday;
