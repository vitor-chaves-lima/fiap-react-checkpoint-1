import PropTypes from "prop-types";
import "./styles.css";

/* ===================== PropTypes ===================== */

const PlanCardPropType = PropTypes.shape({
	title: PropTypes.string.isRequired,
	buttonText: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
}).isRequired;

/* =================== Main Component ================== */

function PlanCard({ title, buttonText, children }) {
	return (
		<div className="plan-card">
			<div className="title-wrapper">
				<h3>{title}</h3>
			</div>
			<div className="content-wrapper">{children}</div>
			<div className="button-wrapper">
				<button>{buttonText}</button>
			</div>
		</div>
	);
}

PlanCard.propTypes = PlanCardPropType;

/* ====================== Exports ====================== */

export default PlanCard;
