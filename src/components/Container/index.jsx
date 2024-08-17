import PropTypes from "prop-types";
import "./styles.css";

/* ===================== PropTypes ===================== */

const ContainerPropTypes = {
	children: PropTypes.node.isRequired,
};

/* =================== Main Component ================== */

function Container({ children }) {
	return <div className="container">{children}</div>;
}

Container.propTypes = ContainerPropTypes;

/* ====================== Exports ====================== */

export default Container;
