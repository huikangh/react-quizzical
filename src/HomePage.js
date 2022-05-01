import React from "react"

export default function HomePage(props) {
    return (
        <div className="home--div">
            <h1 className="home--title">Welcome to Quizzical!</h1>
            <h4 className="home-text">Game options will be added soon</h4>
            <div className="home--button" onClick={props.changeGameState}>Start</div>
        </div>
    )
}