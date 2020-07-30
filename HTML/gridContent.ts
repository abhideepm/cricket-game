import { player } from '../classes/player'

export const playerRow = (player: player): HTMLTableRowElement => {
	const row = <HTMLTableRowElement>document.createElement('tr')

	const playerName = <HTMLTableDataCellElement>document.createElement('td')
	playerName.innerHTML = player.name.toUpperCase()
	row.appendChild(playerName)

	for (let i = 1; i <= 6; i++) {
		const td = <HTMLTableDataCellElement>document.createElement('td')
		const runs = player.runs[i - 1]
		td.innerHTML = runs !== -1 ? runs.toString() : ''
		row.appendChild(td)
	}

	const total = <HTMLTableDataCellElement>document.createElement('td')
	let sum = 0
	player.runs.map(run => (run !== -1 ? (sum += run) : null))
	total.innerHTML = sum !== 0 ? sum.toString() : ''
	row.appendChild(total)

	return row
}
