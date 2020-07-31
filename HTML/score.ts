import { team } from '../classes/team'
import { gridTable } from './scoreGrid'

export const score = (team: team): HTMLDivElement => {
	const scoreboard = <HTMLDivElement>document.createElement('div')

	const scoreHeader = <HTMLHeadingElement>document.createElement('h1')
	scoreHeader.innerHTML = `${team.name.toUpperCase()} SCORE`
	scoreboard.appendChild(scoreHeader)

	const scoreVal = <HTMLHeadingElement>document.createElement('h3')
	scoreVal.innerHTML = team.totalScore.toString()
	scoreboard.appendChild(scoreVal)

	const playButton = <HTMLButtonElement>document.createElement('button')
	playButton.innerHTML = 'Play!'
	playButton.classList.add('btn', 'btn-primary')
	playButton.addEventListener('click', () => {
		const randomNumber = Math.floor(Math.random() * 7)
		team.assignRuns(randomNumber)
		let teamState: HTMLElement
		if (team.name === 'Team 1') {
			teamState = <HTMLElement>document.getElementById('team1')!
		} else {
			teamState = <HTMLElement>document.getElementById('team2')!
		}
		teamState.innerHTML = ''
		teamState.appendChild(gridTable(team))
	})
	scoreboard.appendChild(playButton)

	return scoreboard
}
