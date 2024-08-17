import "./styles.css";
import PropTypes from "prop-types";

function Navbar({ items }) {
	return (
		<nav>
			<ul>
				{items.map(item => (
					<li key={item.href}>
						<a href={item.href}>{item.label}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

Navbar.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			href: PropTypes.string.isRequired,
			selected: PropTypes.bool || true,
		})
	),
};

export default Navbar;
