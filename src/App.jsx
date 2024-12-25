import LineChat from "./componets/LineChat/LineChat";
import Navbar from "./componets/Navbar/Navbar";
import Phones from "./componets/Phones/Phones";
import PriceOptions from "./componets/PriceOptions/priceOptions";

 
 const App = () => {
	return (
		<div>
			{/* <Dasyui></Dasyui> */}
			<Navbar></Navbar> 
			<PriceOptions /> 
			<LineChat />
			<Phones/>
		</div>
	);
 };
 
 export default App;
