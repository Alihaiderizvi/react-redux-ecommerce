import React from "react";
// Import: Internal Css
import "./App.css";
// Import: Internal Components
import Nav from "./components/Nav";
import Home from "./components/Home";
// Import Browser Router
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Nav />
			<Route path='/' exact component={Home} />
		</Router>
	);
};

export default App;
