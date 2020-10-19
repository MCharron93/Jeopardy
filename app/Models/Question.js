export default class Question {
    constructor(data) {
        this.value = data.value
        this.question = data.question
        this.answer = data.answer
        this.category = data.category.title
    }

    get Cover() {
        return /*html*/`
        <div class="col-4 card p-4 text-center" onclick="app.questionController.flipOver()">
        <h2>${this.category}</h2>
        <h3>${this.value}</h3>
        </div >
            `
    }

    get Template() {
        return /*html*/`
            <div class="col-4 card p-4 text-center" onclick="app.questionController.flipAnswer()">
                <h4>${this.question}</h4>
        </div >
            `
    }

    get Answer() {
        return /*html*/`
        <div class="col-4 card p-4 text-center">
            <h4>Answer Submission</h4>
            <div class="form-group">
              <input type="text"
                class="form-control" name="answer" id="answer" placeholder="Your answer here...">
            </div>
            <button class="btn btn-info" onclick="app.questionController.reveal()">Answer</button>
    </div >
        `
    }

    get Reveal() {
        return /*html*/`
            <div class="col-4 card p-4 text-center">
                <h4>${this.answer}</h4>
        </div >
            `
    }

}
