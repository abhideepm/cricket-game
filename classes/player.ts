export class player {
	runs: number[]
	name: string
	total: number = 0
	currentBall: number = 0
	constructor(name: string) {
		let temp: number[] = []

		for (let i = 0; i < 6; i++) temp.push(-1)

		this.runs = temp
		this.name = name
	}
	assignPlayerRun = (runs: number): void => {
		this.runs[this.currentBall] = runs
		this.currentBall++
	}
}
