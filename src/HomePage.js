import React from "react"

export default function HomePage(props) {

    return (
        <div className="home--div">
            <h1 className="home--title">Welcome to Quizzical!</h1>

            <div className="option--div">

                <label htmlFor="amount">Select number of questions</label>
                <select id="amount" onChange={props.changeGameOption} value={props.gameOption.amount}> 
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>

                <label htmlFor="category">Select question category</label>
                <select id="category" onChange={props.changeGameOption} value={props.gameOption.category}> 
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                </select>

                {/* <label htmlFor="type">Select question type</label>
                <select id="type" onChange={props.changeGameOption} value={props.gameOption.type}> 
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                    <option value="">Any Type</option>
                </select> */}

                <label htmlFor="difficulty">Select question difficulty</label>
                <select id="difficulty" onChange={props.changeGameOption} value={props.gameOption.difficulty}> 
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>

            <div className="home--button" onClick={props.changeGameState}>Start</div>
        </div>
    )
}