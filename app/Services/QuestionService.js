import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "../Services/AxiosService.js"

class QuestionService {
  constructor() {
    // console.log(ProxyState.questions);
    this.getQuestions()
  }

  getQuestions() {
    api.get().then(res => {
      // console.log("did this work?", res.data[0].question)
      // console.log(res.data[0])
      // console.log(ProxyState.question)

      let questionIndex = res.data[0]
      ProxyState.question = new Question(questionIndex)
    })
  }

  previous() {

  }

  next() {
    api.get().then(res => {
      let newQuestion = 
    })



    // if (ProxyState.next) {
    //   api.get(ProxyState.next).then(res => {
    //     ProxyState.next = 
    //   })
  }
}

scoreCount() {
  let score = ProxyState.score
  let correct = ProxyState.question.answer
  let answer = document.getElementById("answer")
  if (answer == correct) {
    let value = ProxyState.question.value
    score += value
    console.log(score);
  }
}


}

export const questionService = new QuestionService();

