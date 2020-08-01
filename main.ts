import { title } from './HTML/title'
import { hr } from './HTML/hr'
import { score } from './HTML/score'
import { team } from './classes/team'
import { gridTable } from './HTML/scoreGrid'
import { gameInfo } from './HTML/gameInfo'
import { startTimer } from './HTML/timer'

const team1 = new team('Team 1')
const team2 = new team('Team 2')

const container = <HTMLElement>document.getElementById('container')

container.appendChild(title)
container.appendChild(hr())

const scoreboard = <HTMLDivElement>document.createElement('div')
scoreboard.classList.add('row')
scoreboard.appendChild(score(team1))
scoreboard.appendChild(startTimer())
scoreboard.appendChild(score(team2))
container.appendChild(scoreboard)

container.appendChild(hr())

const gameState = <HTMLDivElement>document.createElement('div')
gameState.classList.add('row')
gameState.id = 'gameState'
container.appendChild(gameState)

const team1State = <HTMLDivElement>document.createElement('div')
team1State.classList.add('col-lg-4', 'col-sm-12', 'col-md-12')
team1State.id = 'team1'
team1State.appendChild(gridTable(team1))
gameState.appendChild(team1State)

gameState.appendChild(gameInfo(team1, team2))

const team2State = <HTMLDivElement>document.createElement('div')
team2State.classList.add('col-lg-4', 'col-sm-12', 'col-md-12')
team2State.id = 'team2'
team2State.appendChild(gridTable(team2))
gameState.appendChild(team2State)
