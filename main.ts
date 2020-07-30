import { title } from './HTML/title'
import { hr } from './HTML/hr'
import { score } from './HTML/score'
import { team } from './classes/team'

const team1 = new team('Team 1')
const team2 = new team('Team 2')

const container = <HTMLElement>document.getElementById('container')

container.appendChild(title)
container.appendChild(hr)
container.appendChild(score(team1.name, team1.totalScore))
container.appendChild(score(team2.name, team2.totalScore))
