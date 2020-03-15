/// <reference path="player.ts" />

function startGame() {
  // start a new game
  let playerName: string | undefined;
  playerName = getInputValue('playername')
  logPLayer(playerName)
  postScore(100)
  postScore(-5)

  const messagesElement = document.getElementById('messages')
  messagesElement!.innerText = 'Welcome! Starting a new game...'
}

function logPLayer(name: string = 'Player'): void {
  console.log(`New game is starting for played: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
  const inputElm: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
  return inputElm.value === '' ? undefined : inputElm.value
}

function postScore(score: number, player: string = 'Player'): void {

  let logger: (value: string) => void;

  if (score < 0) {
    logger = logError
  } else {
    logger = logMessage
  }

  const inputElm: HTMLElement = <HTMLElement>document.getElementById('postedScores')
  inputElm!.innerText = `${player}: ${score}`

  logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)

const logMessage = (message: string) => console.log(message)

function logError(err: string): void {
  console.error(err)
}

const firstPLayer: Player = new Player()
firstPLayer.name = 'Jon Snow'
console.log(firstPLayer.formatName())