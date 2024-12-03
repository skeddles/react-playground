

interface CellProps {
	id: number;
	value: string | null;
	clickedCell: (i: number) => void;
	gameOver: boolean;
}

export default function Cell({id, value, clickedCell, gameOver}: CellProps) {
	return (<div className={'cell' + ((value||gameOver) ? ' filled':'')} onClick={()=>{clickedCell(id)}}>{value}</div>);
}