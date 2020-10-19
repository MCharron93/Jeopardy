import { ProxyState } from "../AppState.js";
import Question from "../Models/Question.js";

class QuestionService {
  constructor() {
    console.log("Service setup");
  }
}

export const questionService = new QuestionService();

