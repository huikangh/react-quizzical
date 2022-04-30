import React from "react"
import Quiz from "./Quiz"
import {nanoid} from "nanoid";
import {decode} from 'html-entities';

export default function QuizPage(props) {

    const APIurl = "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"

    const [quizData, setQuizData] = React.useState([])
    const [quizzes, setQuizzes] = React.useState([])

    React.useEffect(() => {
        fetch(APIurl)
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])

    React.useEffect(() => {
        setQuizzes(
            quizData.map(data => {
                return {
                    id: nanoid(),
                    question: decode(data.question),
                    correct: decode(data.correct_answer),
                    incorrects: decode(data.incorrect_answers),
                    selected: ""
                }
            })
        )
    }, [quizData])

    function changeSelected(event, id) {
        const choice = event.target.innerText
        setQuizzes(prevQuizzes =>
            prevQuizzes.map(quiz =>{
                return id === quiz.id ? {...quiz, selected: choice} : quiz
            })
        )
    }

    const quizElements = quizzes.map(quiz => {
        return (
            <Quiz 
                key = {quiz.id}
                question = {quiz.question} 
                correct = {quiz.correct}
                incorrects = {quiz.incorrects}
                selected = {quiz.selected}
                changeSelected = {(event)=>changeSelected(event, quiz.id)}
            />
        )
    })

    return (
        <div className="game--div">
            <h1 className="game--title">Quizzical Game</h1>
            <div className="quiz--div"> {quizElements} </div>
            <hr/>
            <div className="reset--button" onClick={props.changeGameState}>New Game</div>
        </div>
    )
}