export const gameInfo = <HTMLDivElement>document.createElement('div')

const startGame = <HTMLButtonElement>document.createElement('button')
startGame.innerHTML = 'Start game'
startGame.classList.add('btn', 'btn-success')
startGame.addEventListener('click', () => {
	startGame.disabled = true
	const team1btn = <HTMLButtonElement>document.getElementById('Team 1')
	team1btn.disabled = false
})
gameInfo.appendChild(startGame)
