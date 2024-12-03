
import { BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import './layout.css';
import './defaults.css';
import {pageRoutes, navigationLinks} from './pages';


function App() {


	return (<Router>

			<header>
				<h1>
					skeddles' react playground 
					<a href="https://github.com/skeddles/react-playground" target="_blank"><img src="/github.svg" alt="github" /></a>
				</h1>
				<nav>{navigationLinks}</nav>
			</header>

			<div className="page">
				<Routes>{pageRoutes}</Routes>
			</div>

			<div className="spacer"></div>

			<footer>
				<p>skeddles 2024</p>
			</footer>

	</Router>)
}

export default App;
