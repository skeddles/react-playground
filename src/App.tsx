
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import './App.css';
import './layout.css';
import './defaults.css';
import Home from './Home/Home';
import Idle from './Idle/Idle';
import Notes from './Notes/Notes';

const pages: { [key: string]: JSX.Element } = {
	Home: (<Home/>),
	Notes: (<Notes/>),
	Idle: (<Idle/>),
};

function App() {

    const navigationLinks = Object.keys(pages).map((page) => {
        return <NavLink to={'/'+slugify(page)} className={({ isActive }) => isActive ? 'active' : ''}>{page}</NavLink>
    });

	const pageRoutes = Object.keys(pages).map((page) => {
		return <Route path={'/'+slugify(page)} element={pages[page]} />
	});

	return (<Router>

			<header>
				<h1>skeddles' react playground</h1>
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

function slugify(str: string) {
	return str.toLowerCase().replace(/ /g, "-");
}


export default App;
