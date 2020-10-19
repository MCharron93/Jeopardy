import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _drawCard() {
  let card = ProxyState.question
  let template = ""
  document.getElementById("question").innerHTML = card.Cover
}

function flipOver() {
  let question = ProxyState.question
  let template = ""
  document.getElementById("question").innerHTML = question.Template
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("question", _drawCard);
    _drawCard()
    // console.log();
  }

}
