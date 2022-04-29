import React from "react"

export default function HomePage(props) {
    return (
        <div className="home--div">
            <h1 className="home--title">Welcome to Quizzical!</h1>
            <div className="home--button" onClick={props.changeGameState}>Start</div>
        </div>
    )
}