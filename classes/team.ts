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
	nextPlayer = (): void => {
		this.generateTotalScore()
		if (this.playerIndex !== 10) this.playerIndex++
	}
	assignRuns = (runs: number): void => {
		const presentPlayer: player = this.players[this.playerIndex]
		if (runs === 0 || presentPlayer.currentBall === 5) this.nextPlayer()

		presentPlayer.assignPlayerRun(runs)
		presentPlayer.updateTotal()
	}
	generateTotalScore = (): void => {
		this.totalScore = this.players.reduce((acc, curr) => acc + curr.total, 0)
	}
}
