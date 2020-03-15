var Player = (function () {
    function Player() {
    }
    Player.prototype.formatName = function () { return this.name.toUpperCase(); };
    return Player;
}());
function startGame() {
    var playerName;
    playerName = getInputValue('playername');
    logPLayer(playerName);
    postScore(100);
    postScore(-5);
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome! Starting a new game...';
}
function logPLayer(name) {
    if (name === void 0) { name = 'Player'; }
    console.log("New game is starting for played: " + name);
}
function getInputValue(elementId) {
    var inputElm = document.getElementById(elementId);
    return inputElm.value === '' ? undefined : inputElm.value;
}
function postScore(score, player) {
    if (player === void 0) { player = 'Player'; }
    var logger;
    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }
    var inputElm = document.getElementById('postedScores');
    inputElm.innerText = player + ": " + score;
    logger("Score: " + score);
}
document.getElementById('startGame').addEventListener('click', startGame);
var logMessage = function (message) { return console.log(message); };
function logError(err) {
    console.error(err);
}
var firstPLayer = new Player();
firstPLayer.name = 'Jon Snow';
console.log(firstPLayer.formatName());
//# sourceMappingURL=app.js.map