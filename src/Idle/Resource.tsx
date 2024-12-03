


//import { useEffect } from "react";

interface ResourceProps {
	game: {
		Gold: number;
		setGold: (gold: number) => void;
	}
	name: string;
	verb: string;
	icon: string;
	cost: number;
	generates?: string;
	rate?: number;
}


export default function Resource({game, name, verb, icon, cost, generates, rate}: ResourceProps) {

	const count:number = (game as any)[name];
	const setFunction = (game as any)['set'+name];


	function buy() {
		if(game.Gold >= cost) {
			game.setGold(game.Gold-cost);
			setFunction(count+1);
		}
	}

	
	// const generatesCount = generates ? (game as any)[generates] : undefined;
	// const generatesFunction = generates ? (game as any)['set'+generates] : undefined;

	// useEffect(() => {
	// 	if(generates && rate) {
	// 		let timeSinceLastReward = Date.now();
	// 		setInterval(() => {
	// 			if(timeSinceLastReward+1000*rate < Date.now()) {
	// 				generatesFunction(generatesCount+rate);
	// 			}
	// 		}, 1000);
	// 	}
	// });
	

	return (<div className="resource">
		<h2>{icon} {name}</h2>
		<div className="buy">
			<div className="count">
				<div>Owned:</div>
				x{count}
			</div>
			<button onClick={buy} className={game.Gold>=cost?'':'disabled'}>{verb}</button>
			<div className="cost">
				<div>Cost:</div>
				{cost===0?'Free':'🟡'+cost}
			</div>

		</div>
		{generates && <div className="generates">Generates {generates} at a rate of {rate}/m</div>}
	</div>)
}