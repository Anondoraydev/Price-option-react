import {
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
} from "recharts";
const LineChat = () => {
	const studentMarks = [
		{
			id: 1,
			name: "John",
			math: 85,
			science: 78,
			english: 88,
			history: 76,
			computerScience: 90,
		},
		{
			id: 2,
			name: "Emma",
			math: 90,
			science: 92,
			english: 89,
			history: 85,
			computerScience: 94,
		},
		{
			id: 3,
			name: "Liam",
			math: 78,
			science: 84,
			english: 80,
			history: 79,
			computerScience: 88,
		},
		{
			id: 4,
			name: "Olivia",
			math: 92,
			science: 89,
			english: 94,
			history: 91,
			computerScience: 96,
		},
		{
			id: 5,
			name: "Noah",
			math: 88,
			science: 76,
			english: 85,
			history: 80,
			computerScience: 89,
		},
		{
			id: 6,
			name: "Ava",
			math: 95,
			science: 93,
			english: 96,
			history: 92,
			computerScience: 98,
		},
		{
			id: 7,
			name: "William",
			math: 80,
			science: 82,
			english: 78,
			history: 74,
			computerScience: 85,
		},
		{
			id: 8,
			name: "Sophia",
			math: 87,
			science: 90,
			english: 84,
			history: 86,
			computerScience: 92,
		},
		{
			id: 9,
			name: "James",
			math: 83,
			science: 81,
			english: 79,
			history: 77,
			computerScience: 86,
		},
		{
			id: 10,
			name: "Isabella",
			math: 91,
			science: 94,
			english: 90,
			history: 88,
			computerScience: 95,
		},
	];
	const data = [
		{
			name: "Page A",
			uv: 4000,
			pv: 2400,
			amt: 2400,
		},
		{
			name: "Page B",
			uv: 3000,
			pv: 1398,
			amt: 2210,
		},
		{
			name: "Page C",
			uv: 2000,
			pv: 9800,
			amt: 2290,
		},
		{
			name: "Page D",
			uv: 2780,
			pv: 3908,
			amt: 2000,
		},
		{
			name: "Page E",
			uv: 1890,
			pv: 4800,
			amt: 2181,
		},
		{
			name: "Page F",
			uv: 2390,
			pv: 3800,
			amt: 2500,
		},
		{
			name: "Page G",
			uv: 3490,
			pv: 4300,
			amt: 2100,
		},
	];  
	return (
		<div>
			<div>
				<LineChart width={1000} height={400} data={studentMarks}>
					<XAxis dataKey="id" />
					<YAxis dataKey={name} />
					<Line type="monotone" dataKey="science" stroke="#8884d8"></Line>
					<Line type="monotone" dataKey="history" stroke="red"></Line>
					<Line type="monotone" dataKey="english" stroke="#BBBBBB"></Line>
				</LineChart>
			</div>

			<div>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Bar dataKey="uv" fill="#8884d8" ></Bar>
					<Bar dataKey="pv" fill="#00C49F"></Bar>
					<Bar dataKey="amt" fill="#FFBB28"></Bar>
				</BarChart>
			</div>
		</div>
	);
};

export default LineChat;
