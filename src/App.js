import React from "react"
import HomePage from "./HomePage"
import QuizPage from "./QuizPage"



export default function App() {

    const [gameState, setGameState] = React.useState(false)

    function changeGameState() {
        setGameState(prevGameState => !prevGameState)
    }


    return (
        <main>
            {gameState 
                ? <QuizPage changeGameState={changeGameState} /> 
                : <HomePage changeGameState={changeGameState} />
            }
        </main>
    )
}