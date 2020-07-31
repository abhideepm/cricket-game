export const startTimer = (): HTMLDivElement => {
	const timer = <HTMLDivElement>document.createElement('div')

	const timerheader = <HTMLHeadingElement>document.createElement('h1')
	timerheader.innerHTML = 'TIMER'
	timer.appendChild(timerheader)

	return timer
}
