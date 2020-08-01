export const resetTimer = (count: number) => {
	const timer = <HTMLHeadingElement>document.getElementById('timer')
	const time: number = window.setInterval(() => {
		timer.innerHTML = count.toString()
		count--
		if (count === 0) clearInterval(time)
	}, 1000)
}
