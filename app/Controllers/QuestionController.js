import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _drawCard() {
  let card = ProxyState.question
  let template = ""
  document.getElementById("question").innerHTML = card.Cover
}


//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _drawCard);
    _drawCard()
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
  }

  scoreCount() {
    questionService.scoreCount()
  }

}
