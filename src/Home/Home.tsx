import {html as notes} from './Notes.md'; 

export default function Home() {
	return (<>
		<p>
			This is just a silly little site where I'm putting all my react practice projects so I don't have to keep doing the annoying setup part.
		</p>

		<div dangerouslySetInnerHTML={{__html: notes}}></div>
	</>);
}