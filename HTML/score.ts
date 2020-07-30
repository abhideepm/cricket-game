export const score = (name: string, total: number): HTMLDivElement => {
	const scoreboard = <HTMLDivElement>document.createElement('div')

	const scoreHeader = <HTMLHeadingElement>document.createElement('h1')
	scoreHeader.innerHTML = `${name.toUpperCase()} SCORE`
	scoreboard.appendChild(scoreHeader)

	const scoreVal = <HTMLHeadingElement>document.createElement('h3')
	scoreVal.innerHTML = total.toString()
	scoreboard.appendChild(scoreVal)

	const playButton = <HTMLButtonElement>document.createElement('button')
	playButton.innerHTML = 'Play!'
	playButton.classList.add('btn', 'btn-primary')
	scoreboard.appendChild(playButton)

	return scoreboard
}
