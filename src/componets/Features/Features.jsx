import PropTypes from "prop-types";
import { IoMdCheckmarkCircle } from "react-icons/io";

const Features = ({ feature }) => {
	return (
		<div>
			<h3 className="flex items-center">
				<IoMdCheckmarkCircle className=" mr-2" />
				{feature}
			</h3>
		</div>
	);
};
Features.propTypes = {
	features: PropTypes.string,
};
export default Features;
