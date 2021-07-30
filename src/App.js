import React from "react";
// Import: Internal Css
import "./App.css";
// Import: Internal Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
// Import Browser Router
import { BrowserRouter as Router, Route } from "react-router-dom";
// Import Redux React
import { Provider } from "react-redux";
import store from "./Redux/reducers/Index";
import Details from "./components/Details";
const App = () => {
	return (
		<Router>
			<Provider store={store}>
				<Nav />
				<Route path='/' exact component={Home} />
				<Route path='/cart' exact component={Cart} />
				<Route path='/details/:id' exact component={Details} />
			</Provider>
		</Router>
	);
};

export default App;
