import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Phones = () => {
	const [phones, setPhones] = useState([]);

	useEffect(() => {
		axios
			.get("https://openapi.programming-hero.com/api/phones?search=iphone")
			.then((data) => {
				const phoneData = data.data.data;
				const phoneWithFakeData = phoneData.map((phone) => {
					const obj = {
						name: phone.phone_name,
						price: parseInt(phone.slug.split("-")[1]),
					};
					return obj;
				});
				console.log(phoneWithFakeData);
				setPhones(phoneWithFakeData);
			});
	}, []);

	return (
		<div>
			<h2>Phone: {phones.length}</h2>
			<BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey={'name'} />
                <YAxis />
                <Tooltip/>
			</BarChart> 
		</div>
	);
};

export default Phones;
