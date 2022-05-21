import React from "react"

export default function HomePage(props) {

    return (
        <div className="home--div">
            <div className="home--title">Welcome to Quizzical!</div>

            <div className="option--div">

                <label htmlFor="amount">Number of Questions</label>
                <select id="amount" onChange={props.changeGameOption} value={props.gameOption.amount}> 
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>

                <label htmlFor="category">Question Category</label>
                <select id="category" onChange={props.changeGameOption} value={props.gameOption.category}> 
                    <option value="27">Animals</option>
                    <option value="">Any Category</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="31">Entertainment: Japanese Anime & Manga</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals & Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="9">General Knowledge</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="20">Mythology</option>
                    <option value="24">Politics</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="21">Sport</option>
                    <option value="28">Vehicles</option>
                </select>

                {/* <label htmlFor="type">Select question type</label>
                <select id="type" onChange={props.changeGameOption} value={props.gameOption.type}> 
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True / False</option>
                    <option value="">Any Type</option>
                </select> */}

                <label htmlFor="difficulty">Question Difficulty</label>
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