import LineChat from "./componets/LineChat/LineChat";
import Navbar from "./componets/Navbar/Navbar";
import PriceOptions from "./componets/PriceOptions/priceOptions";

 
 const App = () => {
	return (
		<div>
			{/* <Dasyui></Dasyui> */}
			<Navbar></Navbar> 
			<PriceOptions /> 
			<LineChat/>
		</div>
	);
 };
 
 export default App;
