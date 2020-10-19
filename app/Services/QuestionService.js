import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "../Services/AxiosService.js"

class QuestionService {
  constructor() {
    // console.log(ProxyState.questions);
    this.getQuestions()
  }

  getQuestions() {
    api.get("").then(res => {
      console.log("did this work?", res.data[0].question)
      console.log("answer: ", res.data[0].answer)
    })
  }
}

export const questionService = new QuestionService();

