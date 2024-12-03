import { useState } from 'react';
import Cell from './Cell';
import './TicTacToe.css';


export default function TicTacToe() {

	const [cells, setCells] = useState<(null | 'X' | 'O')[]>([null, null, null, null, null, null, null, null, null]);
	const [turnIsX, setTurnIsX] = useState(true);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [turnBlurb, setTurnBlurb] = useState('X goes first!');
	const [winPosition, setWinPosition] = useState<number | null>(null);

	function clicked (i:number) {
		if (cells[i] || gameIsOver) return;

		console.log('clicked');
		const updatedCells = [...cells];
		updatedCells[i] = turnIsX ? 'X' : 'O';
		setTurnIsX(!turnIsX);
		setCells(updatedCells);
		setTurnBlurb(BLURBS[Math.floor(Math.random() * BLURBS.length)].replace('X', turnIsX ? 'O' : 'X'));

		const winner = calculateWinner(updatedCells);

		if (winner.name) {
			setTurnBlurb(winner.name + ' wins!');
			setGameIsOver(true);
			setWinPosition(winner.position);
			return;
		}

		if (updatedCells.includes(null) === false) {
			setTurnBlurb('Tie game!');
			setGameIsOver(true);
			return;
		}
	}
	
	function reset() {
		setCells([null, null, null, null, null, null, null, null, null]);
		setTurnIsX(true);
		setTurnBlurb('X goes first!');
		setGameIsOver(false);
		setWinPosition(null);
	}

	function progress() {
		const total = cells.filter(c => c).length + 1;
		return (total / 9) * 100;
	}

	return (<>
		<h1>Tic Tac Toe</h1>
		<p>
			Click on a cell to begin playing.
		</p>	
		<div className='turnBlurb'>{turnBlurb}</div>
		<div className={'game' + (gameIsOver ? (' gameOver w'+winPosition) : '')}>
			<Cell id={0} value={cells[0]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={1} value={cells[1]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={2} value={cells[2]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={3} value={cells[3]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={4} value={cells[4]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={5} value={cells[5]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={6} value={cells[6]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={7} value={cells[7]} clickedCell={clicked} gameOver={gameIsOver}/>
			<Cell id={8} value={cells[8]} clickedCell={clicked} gameOver={gameIsOver}/>
		</div>
        <div className="progressBar" style={{ '--progress': `${progress()}%` } as React.CSSProperties}></div>

		<div className="controls">
			<button onClick={reset}>Reset</button>
		</div>
		<div className="debug">
			<pre>{JSON.stringify({cells,turnIsX,gameIsOver,turnBlurb,winPosition}, null, 2)}</pre>
		</div>
	</>);
}

function calculateWinner(squares:Array<string|null>) {
	const lines = [
		//horizontal
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],

		//vertical
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],

		//diagonal
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return {won: true, name: squares[a], position: i};
		}
	}
	return {won: false, name: null, position: null};
}


const BLURBS = [
	'Now for X',
	'X\'s turn now',
	'X\'s turn',
	'X goes next',
	'X\'s move',
	'X\'s time to shine',
	'X plays now',
	'Okay X, your turn',
	'X, it\'s your move',
	'X, go ahead',
	'Let\'s go X!',
	'Do it, X.',
];