import PropTypes from "prop-types";
import "./styles.css";

/* ===================== PropTypes ===================== */

const HeroPropType = PropTypes.shape({
	headline: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	callToAction: PropTypes.string.isRequired,
	heroElement: PropTypes.element.isRequired,
}).isRequired;

/* =================== Main Component ================== */

function Hero({ headline, description, callToAction, heroElement }) {
	return (
		<section className="hero-section">
			<div className="headline">
				<h1>{headline}</h1>
				<p>{description}</p>
				<button className="call-to-action">{callToAction}</button>
			</div>

			{heroElement}
		</section>
	);
}

Hero.propTypes = HeroPropType;

/* ====================== Exports ====================== */

export default Hero;
