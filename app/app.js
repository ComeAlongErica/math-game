function startGame() {
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome! Starting a new game...';
}
document.getElementById('startGame').addEventListener('click', startGame);
