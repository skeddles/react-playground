import {html as notes} from './Notes.md'; 

export default function Home() {
	return (<div className="notes" dangerouslySetInnerHTML={{__html: notes}}></div>);
}