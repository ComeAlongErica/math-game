/// <reference path="result.ts" />

class Scoreboard {
  private results: Result[] = []

  addResult(newResult: Result): void {
    this.results.push(newResult)
  }

  updateScoreboard():void {
    let output: string = '<h2>Scoreboard</h2>'

    this.results.forEach(result=> {
      output += `<h4>${result.playerName}: ${result.score} / ${result.problemCount} for factor ${result.factor}</h4>`
    })

    const scoresElement: HTMLElement = document.getElementById('scores')!
    scoresElement.innerHTML = output
  }
}