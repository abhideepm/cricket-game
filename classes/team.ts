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
		this.playerIndex++
	}
	assignRuns = (runs: number): void => {
		this.players[this.playerIndex].assignPlayerRun(runs)
	}
}