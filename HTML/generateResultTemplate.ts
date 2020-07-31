import { team } from '../classes/team'
import { player } from '../classes/player'

export const generateResultTemplate = (
	team1: team,
	team2: team
): HTMLDivElement => {
	const resultWrapper = <HTMLDivElement>document.createElement('div')

	const team1total = team1.totalScore
	const team2total = team2.totalScore

	let status = team1total > team2total ? team1.name : team2.name
	status += ' Won!'

	const resultHeader = <HTMLDivElement>document.createElement('div')
	resultHeader.innerHTML = status
	resultWrapper.appendChild(resultHeader)

	let manOfMatch: player = team1.players[0]
	//given initial value because of TypeScript error of variable is used before assigned

	const winningTeam: team = team1total > team2total ? team1 : team2
	let maxRuns = 0
	winningTeam.players.forEach(player => {
		if (player.total > maxRuns) {
			maxRuns = player.total
			manOfMatch = player
		}
	})

	const playerWonTeam = team1total > team2total ? 'Team 1' : 'Team 2'

	const resultContent = <HTMLDivElement>document.createElement('div')
	resultContent.innerHTML = `Man Of The Match<br>${manOfMatch.name} of <br>${playerWonTeam}`
	resultWrapper.appendChild(resultContent)

	return resultWrapper
}
