import { player } from './player'

export class team {
	players: player[]
	name: string
	constructor(name: string) {
		let temp: player[] = []
		for (let i = 1; i <= 10; i++) {
			temp.push(new player(`Player ${i}`))
		}
		this.players = temp
		this.name = name
	}
}
