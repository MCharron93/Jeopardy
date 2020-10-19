import { ProxyState } from "../AppState.js";
// import Score from "../Models/ScoreBoard.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _drawCard() {
  let card = ProxyState.question
  let template = ""
  document.getElementById("question").innerHTML = card.Cover
}

function _drawScoreBoard() {
  let score = ProxyState.score
  let template = ""
  document.getElementById("scoreBoard").innerHTML = score.toString()
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _drawCard);
    _drawCard()
    _drawScoreBoard()
  }

  previous() {
    questionService.previous()
  }

  next() {
    questionService.next()
  }

  flipOver() {
    let question = ProxyState.question
    let template = ""
    document.getElementById("question").innerHTML = question.Template
  }

  flipAnswer() {
    let question = ProxyState.question
    let template = ""
    document.getElementById("question").innerHTML = question.Answer
  }

  reveal() {
    let question = ProxyState.question
    let template = ""
    document.getElementById("question").innerHTML = question.Reveal
    this.scoreCount()
  }

  scoreCount() {
    questionService.scoreCount()
  }

}
