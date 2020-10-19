import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";
import { api } from "../Services/AxiosService.js"

class QuestionService {
  constructor() {
    console.log(ProxyState.questions);

  }
}

export const questionService = new QuestionService();

