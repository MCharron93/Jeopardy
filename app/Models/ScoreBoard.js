import { ProxyState } from "../AppState.js"

export default class Score {
  constructor() {
    this.score = ProxyState.score
  }

  get ScoreBoard() {
    return /*html*/ `
      <div className="col-2 card">
      <h2>Score: ${this.score}</h2>
      </div>
    `
  }
}