import React from "react"

export default function Quiz(props) {

    const choices = [props.correct, ...props.incorrects]

    const choicesArray = choices.map(choice => {
        const styles = {backgroundColor: choice===props.selected ? "#D6DBF5" : "white"}
        return (
            <div className="choice" style={styles} onClick={props.changeSelected}>
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