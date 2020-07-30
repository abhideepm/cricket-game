import { gridHeader } from './gridHeader'
import { team } from '../classes/team'
import { playerRow } from './gridContent'

export const gridTable = (team: team): HTMLTableElement => {
	const table = <HTMLTableElement>document.createElement('table')
	table.classList.add('table', 'table-bordered')
	table.appendChild(gridHeader(team.name))
	team.players.map(player => table.appendChild(playerRow(player)))
	return table
}
