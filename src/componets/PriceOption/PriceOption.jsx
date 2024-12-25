import PropTypes from "prop-types";
import Features from "../Features/Features";
const PriceOption = ({ option }) => {
	const { price, name, features } = option;
	return (
		<div className="bg-blue-500 text-white flex flex-col rounded-2xl p-4">
			<h2 className="text-center">
				<span className="text-7xl font-extrabold">{price}</span>
				<span className="text-3xl">/mon</span>
			</h2>
			<h4 className="text-4xl text-center my-8">{name}</h4>
			<div className="pl-8 flex-grow">
				{features.map((feature, idx) => (
					<Features key={idx} feature={feature}></Features>
				))}
			</div>
			<button className="bg-purple-700 text-white py-2 rounded-md  w-full mt-12 hover:bg-green-600">Buy Now</button>
		</div>
	);
};
PriceOption.propTypes = {
	option: PropTypes.object,
};
export default PriceOption;
