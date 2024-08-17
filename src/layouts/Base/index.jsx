import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./styles.css";

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
		<div className="container">
			<Navbar items={navbarItems} />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

/* ====================== Exports ====================== */

export default BaseLayout;
