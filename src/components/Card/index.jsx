import PropTypes from "prop-types";
import "./styles.css";

/* ===================== PropTypes ===================== */

const CardPropType = PropTypes.shape({
	number: PropTypes.number.isRequired,
	backgroundColor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	iconSource: PropTypes.string.isRequired,
}).isRequired;

/* =================== Main Component ================== */

function Card({ number, backgroundColor, title, description, iconSource }) {
	const formattedCardNumber = number < 10 ? `0${number}` : number;

	return (
		<div className="card" style={{ backgroundColor }}>
			<div>
				<h2 className="card-number">{formattedCardNumber}</h2>
				<img src={iconSource} alt="Card icon" />
			</div>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}

Card.propTypes = CardPropType;

export default Card;
