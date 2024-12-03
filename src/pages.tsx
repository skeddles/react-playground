
import {Route, NavLink} from "react-router-dom";

import Home from './Home/Home';
import Idle from './Idle/Idle';
import Notes from './Notes/Notes';

export const pages: { [key: string]: JSX.Element } = {
	Home: (<Home/>),
	Notes: (<Notes/>),
	Idle: (<Idle/>),
};


export const navigationLinks = Object.keys(pages).map((page) => {
	return <NavLink to={'/'+slugify(page)} className={({ isActive }) => isActive ? 'active' : ''}>{page}</NavLink>
});

export const pageRoutes = Object.keys(pages).map((page) => {
	return <Route path={'/'+slugify(page)} element={pages[page]} />
});

function slugify(str: string) {
	return str.toLowerCase().replace(/ /g, "-");
}
