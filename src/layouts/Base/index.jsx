import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

function BaseLayout() {
	const navbarItems = [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Contact",
			href: "/contact",
		},
	];

	return (
		<>
			<Navbar items={navbarItems} />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default BaseLayout;
