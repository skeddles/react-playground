import React from "react";
import './Idle.css'
import Resource from './Resource'

export default function Idle() {

	const [Food, setFood] = React.useState(0);
	const [Gold, setGold] = React.useState(0);
	const [Stone, setStone] = React.useState(0);
	const [Wood, setWood] = React.useState(0);
	const [Houses, setHouses] = React.useState(0);

	const game = {Gold, setGold, Stone, setStone, Wood, setWood, Food, setFood, Houses, setHouses};

	return (<div className="idle">
		<Resource game={game} name="Gold" verb="Mine" icon="🟡" cost={0}/>
		<Resource game={game} name="Stone" verb="Mine" icon="⚪" cost={0}/>
		<Resource game={game} name="Wood" verb="Chop" icon="🟤" cost={0}/>
		<Resource game={game} name="Food" verb="Farm" icon="🔴" cost={0}/>

		<Resource game={game} name="Houses" verb="Buy" icon="🏠" cost={10} generates="Gold" rate={1}/>
	</div>);
}