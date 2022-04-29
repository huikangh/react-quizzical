import React from "react"
import Quiz from "./Quiz"

export default function QuizPage(props) {

    const APIurl = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"

    const [quizzes, setQuizzes] = React.useState([])

    const quizElements = quizzes.map(quiz => {
        return (
            <Quiz 
                question = {quiz.question} 
                correct = {quiz.correct_answer}
                incorrects = {quiz.incorrect_answers}
            />
        )
    })

    React.useEffect(() => {
        fetch(APIurl)
            .then(res => res.json())
            .then(data => setQuizzes(data.results))
    }, [])

    console.log(quizzes)

    return (
        <div className="game--div">
            <h1 className="game--title">Quizzical Game</h1>
            <div className="quiz--div"> {quizElements} </div>
            <hr/>
            <div className="reset--button" onClick={props.changeGameState}>New Game</div>
        </div>
    )
}