
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import './layout.css';
import './defaults.css';
import Idle from './Idle/Idle';
import Home from './Home/Home';

function App() {

	return (<Router>

			<header>
				<h1>skeddles' react playground</h1>
				<nav>

					<Link to="/">Home</Link>
					<Link to="/idle">Idle</Link>

				</nav>
			</header>

			<div className="page">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/idle" element={<Idle />} />
				</Routes>
			</div>

			<div className="spacer"></div>

			<footer>
				<p>skeddles 2024</p>
			</footer>

	</Router>)
}


export default App;
