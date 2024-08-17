import PropTypes from "prop-types";
import "./styles.css";

/* ===================== PropTypes ===================== */

const HeroPropType = PropTypes.shape({
	headline: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	callToAction: PropTypes.string.isRequired,
	heroImageSource: PropTypes.string.isRequired,
}).isRequired;

/* =================== Main Component ================== */

function Hero({ headline, description, callToAction, heroImageSource }) {
	return (
		<section className="hero-section">
			<div className="headline">
				<h1>{headline}</h1>
				<p>{description}</p>
				<button className="call-to-action">{callToAction}</button>
			</div>

			<div>
				<img className="hero" src={heroImageSource} />
			</div>
		</section>
	);
}

Hero.propTypes = HeroPropType;

/* ====================== Exports ====================== */

export default Hero;
