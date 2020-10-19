import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _drawCard() {
  let card = ProxyState.question
  let template = ""
  document.getElementById("question").innerHTML = card.Cover
}

// function _flipOver() {
//   let question = ProxyState.question
//   let template = ""
//   document.getElementById("question").innerHTML = question.Template
// }

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _drawCard);
    _drawCard()
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

}
