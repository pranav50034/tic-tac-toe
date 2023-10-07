import { useContext, useEffect, useState } from "react";
import "./App.css";
import Base from "./components/Base";
import ScoreContext from "./context/ScoreContext";

function App() {

   const {score, setScore} = useContext(ScoreContext);

   // useEffect(() => {
   //    const storedScore = JSON.parse(localStorage.getItem("ticTacToeScore"));
   //    if (storedScore) {
   //       setScore(storedScore);
   //    }
   // }, []);

   // useEffect(() => {
   //    localStorage.setItem("ticTacToeScore", JSON.stringify(score));
   // }, [score]);

   return (
      <div className="App">
         <p>Tic-Tac-Toe</p>
         <p>by Pranav Pokale</p>
         <div className="game">
            <div className="score">
               <p>Player X</p>
               <p>{score.playerX}</p>
            </div>
            <Base />
            <div className="score">
               <p>Player O</p>
               <p>{score.playerO}</p>
            </div>
         </div>
      </div>
   );
}

export default App;
