import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";

/* =================== Main Component ================== */

function BaseLayout() {
	const location = useLocation();

	const navbarItems = [
		{
			label: "Home",
			href: "/",
			selected: location.pathname === "/",
		},
		{
			label: "Sobre",
			href: "/about",
			selected: location.pathname === "/about",
		},
		{
			label: "Contato",
			href: "/contact",
			selected: location.pathname === "/contact",
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

/* ====================== Exports ====================== */

export default BaseLayout;
