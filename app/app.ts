function startGame() {
  // start a new game
  const playerName: string = 'Audrey'
  logPLayer(playerName)
  const messagesElement = document.getElementById('messages')
  messagesElement!.innerText = 'Welcome! Starting a new game...'
}

function logPLayer(name: string) {
  console.log(`New game is starting for played: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame)