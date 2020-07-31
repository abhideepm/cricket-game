import { team } from '../classes/team'
import { player } from '../classes/player'

export const generateResultTemplate = (
	team1: team,
	team2: team
): HTMLDivElement => {
	const resultWrapper = <HTMLDivElement>document.createElement('div')

	const team1total = team1.totalScore
	const team2total = team2.totalScore

	const status =
		team1total === team2total
			? 'Game Drawn'
			: `Game Won by<br>` + (team1total > team2total)
			? team1.name
			: team2.name

	const resultHeader = <HTMLDivElement>document.createElement('div')
	resultHeader.innerHTML = status
	resultWrapper.appendChild(resultHeader)

	let manOfMatch: player
	if (team1total === team2total) {
		let maxRuns = 0
		team1.players.forEach(player => {
			if (player.total > maxRuns) {
				maxRuns = player.total
				manOfMatch = player
			}
		})
		team2.players.forEach(player => {
			if (player.total > maxRuns) {
				maxRuns = player.total
				manOfMatch = player
			}
		})
	} else {
		const winningTeam: team = team1total > team2total ? team1 : team2
		let maxRuns = 0
		winningTeam.players.forEach(player => {
			if (player.total > maxRuns) {
				maxRuns = player.total
				manOfMatch = player
			}
		})
	}
	return resultWrapper
}
