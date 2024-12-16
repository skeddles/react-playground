import {navigationLinks} from '../pages';
import './Home.css';

export default function Home() {
	return (<>
		<p>
			This is just a silly little site where I'm putting all my react practice projects so I don't have to keep doing the annoying setup part.
		</p>
		<p>
			The source code for this site is available on <a href="https://github.com/skeddles/react-playground" target="_blank">github</a>.
		</p>
		<div className="homepagelist">{navigationLinks}</div>
	</>);
}