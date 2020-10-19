export default class Question {
    constructor(data) {
        this.value = data.value
        this.question = data.question
        this.answer = data.answer
        this.category = data.category.title
    }

    get Cover() {
        return /*html*/`
        <div class="col-4 card p-4 text-center">
            <h3>${this.value}</h3>
            <h3>${this.category}</h3>
            <button class="btn btn-info" onclick="flip()">???</button>
        </div >
            `
    }


    get Template() {

        return /*html*/`
            < div class="col-4 card p-4 text-center" >
                <h4>${this.question}</h4>
        </div >
            `
    }

}
