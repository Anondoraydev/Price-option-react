import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import Link from "../Link/Link";
const Navbar = () => {
	const routes = [
		{ id: 1, name: "Home", path: "/", place: "Main" },
		{ id: 2, name: "About", path: "/about", place: "Main" },
		{ id: 3, name: "Services", path: "/services", place: "Main" },
		{ id: 4, name: "Contact", path: "/contact", place: "Footer" },
		{ id: 5, name: "Login", path: "/login", place: "Header" },
		{ id: 6, name: "Dashboard", path: "/dashboard", place: "Private" },
	];
	const [open, setOpen] = useState(false);
	return (
		<div className="bg-purple-600 p-5">
			<div className=" md:hidden" onClick={() => setOpen(!open)}>
				{open === true ? (
					<IoCloseSharp className="text-2xl"></IoCloseSharp>
				) : (
					<RiMenu2Fill className="text-2xl"></RiMenu2Fill>
				)}
			</div>
			<ul
				className={`md:flex absolute md:static duration-1000 ${
					open ? "top-16" : "-top-60"
				}  bg-purple-600 px-5`}>
				{routes.map((route) => (
					<Link key={route.id} route={route}></Link>
				))}
			</ul>
		</div>
	);
};

export default Navbar;
