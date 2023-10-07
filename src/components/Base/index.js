import React, { useContext, useEffect, useState } from "react";
import Block from "../Block";
import "./style.css";
import ScoreContext from "../../context/ScoreContext";

const Base = () => {
   const [blockContent, setBlockContent] = useState([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
   ]);

   const [isXTurn, setIsXTurn] = useState(true);

   const {updateX, updateO, setScore} = useContext(ScoreContext);

   const handleClick = (block) => {
      if (blockContent[block] !== null) {
         return;
      }
      const blockContentCopy = [...blockContent];
      blockContentCopy[block] = isXTurn ? "X" : "O";
      setIsXTurn(!isXTurn);
      setBlockContent(blockContentCopy);
   };

   const maxMoves = 9;

   let [winner, setWinner] = useState("");

   // const [gameFinished, setGameFinished] = useState("");

   useEffect(() => {
    const winnerChecker = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6],
    ];
    
    const moves = blockContent.filter((block) => block !== null).length;
    

    for (let i = 0; i < winnerChecker.length; i++) {
       let [a, b, c] = winnerChecker[i];
       if (
          blockContent[a] !== null &&
          blockContent[a] === blockContent[b] &&
          blockContent[a] === blockContent[c]
       ) {
          if (blockContent[a] === "X" || blockContent[a] === "O") {
             setWinner(blockContent[a]);
            //  if(winner === "X"){
            //    updateX()
            //    return
            //  }
            //  else if (winner === "O") {
            //    updateO();
            //    return
            //  }
          } else {
             return;
          }
       }
    }
    if (moves === maxMoves) {
       setWinner("Tie");
    }
   }, [blockContent])

   useEffect(() => {
      if(winner==="X"){
         updateX();
      }else if (winner==="O"){
         updateO();
      }else{
         return;
      }
   },  [winner])


   const restart = () => {
    setBlockContent(Array(9).fill(null));
    setIsXTurn(true);
    setWinner("");
   }

   const reset = () => {
      localStorage.removeItem("ticTacToeScore");
      setScore({ playerX: 0, playerO: 0 });
      restart();
   };

   return (
      <div className="base">
         {winner ? (
            <div className="result">
               <h1>
                  {winner === "X" && "Player X Won!"}
                  {winner === "O" && "Player O Won!"}
                  {winner === "Tie" && "Game Draw!"}
               </h1>
               <button
                  className="restart"
                  onClick={() => {
                     restart();
                  }}
               >
                  Play Again!
               </button>
            </div>
         ) : (
            <div className="board">
               <div>
                  <div className="row">
                     <Block
                        handleClick={() => {
                           handleClick(0);
                        }}
                        value={blockContent[0]}
                        style={{
                           borderRight: "1px solid black",
                           borderBottom: "1px solid black",
                        }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(1);
                        }}
                        value={blockContent[1]}
                        style={{
                           borderRight: "1px solid black",
                           borderBottom: "1px solid black",
                        }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(2);
                        }}
                        value={blockContent[2]}
                        style={{ borderBottom: "1px solid black" }}
                     />
                  </div>
                  <div className="row">
                     <Block
                        handleClick={() => {
                           handleClick(3);
                        }}
                        value={blockContent[3]}
                        style={{
                           borderRight: "1px solid black",
                           borderBottom: "1px solid black",
                        }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(4);
                        }}
                        value={blockContent[4]}
                        style={{
                           borderRight: "1px solid black",
                           borderBottom: "1px solid black",
                        }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(5);
                        }}
                        value={blockContent[5]}
                        style={{ borderBottom: "1px solid black" }}
                     />
                  </div>
                  <div className="row">
                     <Block
                        handleClick={() => {
                           handleClick(6);
                        }}
                        value={blockContent[6]}
                        style={{ borderRight: "1px solid black" }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(7);
                        }}
                        value={blockContent[7]}
                        style={{ borderRight: "1px solid black" }}
                     />
                     <Block
                        handleClick={() => {
                           handleClick(8);
                        }}
                        value={blockContent[8]}
                     />
                  </div>
               </div>
               <button
                  onClick={() => {
                     reset();
                  }}
                  className="restart"
               >
                  Reset Game
               </button>
            </div>
         )}
      </div>
   );
};

export default Base;
