import { team } from '../classes/team'
import { generateResultTemplate } from './generateResultTemplate'
import { resetTimer } from './resetTimer'

export const gameInfo = (team1: team, team2: team): HTMLDivElement => {
	const wrapper = <HTMLDivElement>document.createElement('div')
	wrapper.classList.add('col-lg-4', 'col-sm-12', 'col-md-12')
	wrapper.classList.add(
		'd-flex',
		'flex-column',
		'justify-content-around',
		'align-items-center'
	)

	const startGame = <HTMLButtonElement>document.createElement('button')
	startGame.innerHTML = 'Start game'
	startGame.classList.add('btn', 'btn-success', 'btn-lg')
	startGame.addEventListener('click', () => {
		startGame.disabled = true
		const team1btn = <HTMLButtonElement>document.getElementById('Team 1')
		team1btn.disabled = false
		resetTimer(60)
	})
	wrapper.appendChild(startGame)

	const generateResultBtn = <HTMLButtonElement>document.createElement('button')
	generateResultBtn.innerHTML = 'Generate Result'
	generateResultBtn.id = 'genBtn'
	generateResultBtn.classList.add('btn', 'btn-primary', 'btn-lg')
	generateResultBtn.disabled = true
	generateResultBtn.addEventListener('click', () => {
		wrapper.appendChild(generateResultTemplate(team1, team2))
	})
	wrapper.appendChild(generateResultBtn)

	return wrapper
}
