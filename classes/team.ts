import { player } from './player'

export class team {
	players: player[]
	name: string
	totalScore: number = 0
	playerIndex: number = 0
	constructor(name: string) {
		let temp: player[] = []
		for (let i = 1; i <= 10; i++) {
			temp.push(new player(`Player ${i}`))
		}
		this.players = temp
		this.name = name
	}
	assignRuns = (runs: number): void => {
		const presentPlayer: player = this.players[this.playerIndex]
		if (runs === 0 || presentPlayer.currentBall === 5) this.nextPlayer()

		presentPlayer.assignPlayerRun(runs)
		presentPlayer.updateTotal()
	}
	nextPlayer = (): void => {
		if (this.playerIndex < 9) {
			this.generateTotalScore()
			this.playerIndex++
		} else {
			console.log(this.name)
			const btn = <HTMLButtonElement>document.getElementById(this.name)
			btn.disabled = true
			if (this.name === 'Team 1') {
				const btn2 = <HTMLButtonElement>document.getElementById('Team 2')
				btn2.disabled = false
			} else {
				const genResBtn = <HTMLButtonElement>document.getElementById('genBtn')
				genResBtn.disabled = false
			}
		}
	}
	generateTotalScore = (): void => {
		this.totalScore = this.players.reduce((acc, curr) => acc + curr.total, 0)
	}
}
