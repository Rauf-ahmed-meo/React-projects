import React from 'react'
import { useState, useEffect } from 'react'

function Square({ value, onClick }) {
    return <button className='tictactoeSquare' onClick={onClick}>{value}</button>
}



const TicTacToe = () => {
    const [squares, setsquares] = useState(Array(9).fill(""))
    const [isYTurn, setisYTurn] = useState(true)
    const [status, setstatus] = useState("")
    // console.log(squares);


    function handleClick(curretSquare) {
        let cpySquares = [...squares]
        if ( getWinner(squares) || cpySquares[curretSquare] !== "") return;
        cpySquares[curretSquare] = isYTurn ? "O" : "X"
        setisYTurn(!isYTurn)
        setsquares(cpySquares)
    }

    function handleRestart(){
        setisYTurn(true)
        setsquares(Array(9).fill(""))
    }


    function getWinner(squares) {
        const winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [2, 5, 8],
            [1, 4, 7],
            [0, 3, 6]
        ]
        for (let i = 0; i < winningPatterns.length; i++) {
            const [x, y, z] = winningPatterns[i]
            if (
                squares[x] === squares[y] && squares[x] === squares[z]
            ) {
                return squares[x]
            }
        }
        return null
    }
useEffect(()=>{
    if (!getWinner(squares) && squares.every(item => item!=="")) {
        setstatus("it is a draw")
    }else if(getWinner(squares)){
        setstatus(`the winner is ${getWinner(squares)}`)
    }else{
        setstatus(`next player is ${isYTurn? "O": "x"}`)
    }
}, [squares, isYTurn])
    return (
        <div style={{border:"2px solid violet"}}>
            <div className="tictactoeContainer">
                TIC TAC TOE GAME
                <div className="row">
                    <Square value={squares[0]} onClick={() => { handleClick(0) }} />
                    <Square value={squares[1]} onClick={() => { handleClick(1) }} />
                    <Square value={squares[2]} onClick={() => { handleClick(2) }} />
                </div>
                <div className="row">
                    <Square value={squares[3]} onClick={() => { handleClick(3) }} />
                    <Square value={squares[4]} onClick={() => { handleClick(4) }} />
                    <Square value={squares[5]} onClick={() => { handleClick(5) }} />

                </div>
                <div className="row">
                    <Square value={squares[6]} onClick={() => { handleClick(6) }} />
                    <Square value={squares[7]} onClick={() => { handleClick(7) }} />
                    <Square value={squares[8]} onClick={() => { handleClick(8) }} />
                </div>
            </div>
            <h1 style={{textAlign:"center"}}>{status}</h1>
            <button onClick={()=>{handleRestart()}} style={{display:"block", width:"object-fit", margin:"Auto"}}>Restart</button>
        </div>
    )
}

export default TicTacToe
