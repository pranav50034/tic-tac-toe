import { useEffect, useState } from "react";
import ScoreContext from "./ScoreContext";

const ScoreState = (props) => {

    const [score, setScore] = useState(() => {
       const storedScore = JSON.parse(localStorage.getItem("ticTacToeScore"));
       return storedScore || { playerX: 0, playerO: 0 };
    });

    const updateX = () => {
        setScore({...score, playerX: score.playerX +1})
    }

    const updateO = () => {
        setScore({ ...score, playerO: score.playerO + 1 });
    }

    useEffect(() => {
       localStorage.setItem("ticTacToeScore", JSON.stringify(score));
    }, [score]);

  return (
     <ScoreContext.Provider value={{ score, setScore, updateX, updateO }}>
        {props.children}
     </ScoreContext.Provider>
  );
}

export default ScoreState;