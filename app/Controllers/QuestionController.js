import { ProxyState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";


//Private
function _draw() {
  // let question = ProxyState.questions
  // let template = ''
  // question.forEach(q => template += q.Template)
  // document.getElementById("question").innerHTML = /*html*/`
  // `
}

//Public
export default class QuestionController {
  constructor() {
    ProxyState.on("questions", _draw);
    _draw()
    // console.log();
  }

}
