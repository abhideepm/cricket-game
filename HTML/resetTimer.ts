export const timer = () => {
	const timer = <HTMLHeadingElement>document.getElementById('timer')
	let count = 60
	let time: number = window.setInterval(() => {
		timer.innerHTML = count.toString()
		if (+timer.innerHTML === 0) {
			clearInterval(time)
		}
		count--
	}, 1000)
}
