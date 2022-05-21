import React from "react"
import HomePage from "./components/HomePage"
import QuizPage from "./components/QuizPage"



export default function App() {

    const [gameState, setGameState] = React.useState(false)
    const [gameOption, setGameOption] = React.useState({
        amount: "5",
        category: "",
        categoryName: "All Category",
        difficulty: "easy",
        type: "multiple",
    })

    function changeGameState() {
        setGameState(prevGameState => !prevGameState)
    }

    function changeGameOption(event) {
        const selectedIndex = event.target.selectedIndex
        const selectedText = event.target[selectedIndex].text
        setGameOption(prevGameOption => 
            ({  ...prevGameOption, 
                [event.target.id]: event.target.value,
                categoryName: event.target.id === "category" ? selectedText : prevGameOption.categoryName
            })
        )
    }

    // console.log(gameOption)

    return (
        <main>
            {gameState 
                ? <QuizPage changeGameState={changeGameState} gameOption={gameOption}/> 
                : <HomePage changeGameState={changeGameState} gameOption={gameOption}
                    changeGameOption={(event)=>changeGameOption(event)}/>
            }
        </main>
    )
}