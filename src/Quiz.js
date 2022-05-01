import React from "react"
import { nanoid } from "nanoid"


export default function Quiz(props) {

    const choicesArray = props.choices.map(choice => {

        let styles = {backgroundColor: "white"}
        if (!props.gameOver) {
            if (choice === props.selected) {
                styles = {backgroundColor: "#D6DBF5"}
            }
        } else {
            if (choice === props.correct) {
                styles = {backgroundColor: "#94D7A2"}
            } else if (choice === props.selected) {
                styles = {backgroundColor: "#F8BCBC", opacity: 0.6}
            } else {
                styles = {backgroundColor: "white", opacity: 0.6}
            }
        }

        let handleClick
        if (!props.gameOver) {
            handleClick = props.changeSelected
        }

        return (
            <div className="choice" style={styles} onClick={handleClick} key={nanoid()}>
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