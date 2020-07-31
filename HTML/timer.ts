export const startTimer = (): HTMLDivElement => {
	const timer = <HTMLDivElement>document.createElement('div')

	const timerheader = <HTMLHeadingElement>document.createElement('h1')
	timerheader.innerHTML = 'TIMER'
	timer.appendChild(timerheader)

	const timerCountdown = <HTMLHeadingElement>document.createElement('h1')
	timerCountdown.id = 'timer'
	timerCountdown.innerHTML = '60'
	timer.appendChild(timerCountdown)

	return timer
}
