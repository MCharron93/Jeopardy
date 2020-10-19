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



}

export const questionService = new QuestionService();

