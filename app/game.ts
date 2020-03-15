/// <reference path="utility.ts" />
/// <reference path="scoreboard.ts" />
/// <reference path="player.ts" />
/// <reference path="result.ts" />

class Game {
  private scoreboard: Scoreboard = new Scoreboard()

  constructor(public player: Player, public problemCount: number, public factor: number) {
  }

  // create html for current game
  displayGame(): void {

    let gameForm: string = ''

    for (let i = 1; i <= this.problemCount; i++) {
      gameForm += `<div class="form-group"><label for="answer${i}" class="col-sm-2 control-label">
      ${String(this.factor)} x ${i}
      <div class"col-sm-1><input type="text" class="form-control" id="answer${i}" size="5"></div>
      </label></div>`
    }

    // add new game to page
    const gameElement: HTMLElement = document.getElementById('game')!
    gameElement.innerHTML = gameForm

    // enable calculate score btn
    document.getElementById('calculate')!.removeAttribute('disabled')
  }

  calculateScore(): void {

    let score: number = 0;

    // loop through the text boxes and calculate the number that are correct
    for (let problem = 1; problem <= this.problemCount; problem++) {
      const answer: number = Number(Utility.getInputValue(`answer${problem}`));
      if (problem * this.factor === answer) {
        score++;
      }
    }

    // create a new result object to pass to the scoreboard
    const result: Result = {
      playerName: this.player.name,
      score: score,
      problemCount: this.problemCount,
      factor: this.factor
    };

    // asd the result and update the scoreboard
    this.scoreboard.addResult(result);
    this.scoreboard.updateScoreboard();

    // disable the calculate score button
    document.getElementById('calculate')!.setAttribute('disabled', 'true');
  }
}