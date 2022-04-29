import React from "react"

export default function Quiz(props) {

    const choices = [props.correct, ...props.incorrects]

    const choicesArray = choices.map(choice => {
        return (
            <div className="choice">
                {choice}
            </div>
        )
    })

    return (
        <div className="quiz">
            <h3> {props.question}</h3>
            <div className="choice--div"> {choicesArray} </div>
            <br/>
        </div>
    )
}