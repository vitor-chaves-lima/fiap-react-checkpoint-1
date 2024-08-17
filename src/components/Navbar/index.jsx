import "./styles.css";
import PropTypes from "prop-types";

/* ===================== PropTypes ===================== */
const NavbarItemPropType = PropTypes.shape({
	label: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	selected: PropTypes.bool.isRequired,
}).isRequired;

const NavbarPropType = PropTypes.shape({
	items: PropTypes.arrayOf(NavbarItemPropType),
}).isRequired;

/* =================== SubComponents =================== */
function NavbarItem({ label, href, selected }) {
	let classes = selected ? "selected" : "";

	return (
		<li key={href}>
			<a href={href} className={classes}>
				{label}
			</a>
		</li>
	);
}

NavbarItem.propTypes = NavbarItemPropType;

/* =================== Main Component ================== */
function Navbar({ items }) {
	return (
		<nav>
			<ul>{items.map(NavbarItem)}</ul>
		</nav>
	);
}

Navbar.propTypes = NavbarPropType;

/* ====================== Exports ====================== */
export default Navbar;
