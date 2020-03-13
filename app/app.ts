function startGame() {
  // start a new game
  let playerName: string | undefined;
  playerName = undefined
  typeof playerName === 'string' && logPLayer(playerName)

  const messagesElement = document.getElementById('messages')
  messagesElement!.innerText = 'Welcome! Starting a new game...'
}

function logPLayer(name: string) {
  console.log(`New game is starting for played: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)