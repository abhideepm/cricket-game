import { team } from '../classes/team'
import { generateResultTemplate } from './generateResultTemplate'
import { timer } from './resetTimer'

export const gameInfo = (team1: team, team2: team): HTMLDivElement => {
	const wrapper = <HTMLDivElement>document.createElement('div')
	wrapper.classList.add('d-flex', 'flex-column', 'justify-content-center')

	const startGame = <HTMLButtonElement>document.createElement('button')
	startGame.innerHTML = 'Start game'
	startGame.classList.add('btn', 'btn-success')
	startGame.addEventListener('click', () => {
		startGame.disabled = true
		const team1btn = <HTMLButtonElement>document.getElementById('Team 1')
		team1btn.disabled = false
		timer()
	})
	wrapper.appendChild(startGame)

	const generateResultBtn = <HTMLButtonElement>document.createElement('button')
	generateResultBtn.innerHTML = 'Generate Result'
	generateResultBtn.id = 'genBtn'
	generateResultBtn.classList.add('btn', 'btn-primary')
	generateResultBtn.disabled = true
	generateResultBtn.addEventListener('click', () => {
		wrapper.appendChild(generateResultTemplate(team1, team2))
	})
	wrapper.appendChild(generateResultBtn)

	return wrapper
}
