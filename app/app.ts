function startGame() {
  // start a new game
  let playerName: string | undefined;
  playerName = getInputValue('playername')
  typeof playerName === 'string' && logPLayer(playerName)

  const messagesElement = document.getElementById('messages')
  messagesElement!.innerText = 'Welcome! Starting a new game...'
}

function logPLayer(name: string): void {
  console.log(`New game is starting for played: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
  const inputElm: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId)
  return inputElm ? inputElm.value : undefined
}

function postScore(score: number, player: string): void {
  const inputElm: HTMLElement = <HTMLElement>document.getElementById('postedScores')
  inputElm!.innerText = `${player}: ${score}`
}

document.getElementById('startGame')!.addEventListener('click', startGame)