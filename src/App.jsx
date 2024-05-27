import { useState } from 'react'
import { Square } from './components/Square.jsx'
import { MensajeFinDelJuego } from './components/MensajeFinDelJuego.jsx'
import { Turns, ARRAYS_GANADORES } from './constants.js'
import { checkWinner, checkEndgame } from './logic/board.js'




function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board') // esto es lento y sincrono, ojo donde lo pones!!
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) // no puedo darle condiciones al estado asi que defino al estado con una funcion y meto las condiciones adentro
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? JSON.parse(turnFromStorage) : Turns.X
  })

  const [winner, setWinner] = useState(null)

  
// para reiniciar el juego solo tengo que setear los estados en sus valores iniciales
const resetGame = () => {
  setTurn(Turns.X)
  setBoard(Array(9).fill(null))
  setWinner(null)
}


  const updateBoard = (num) => {
    // condicion para que no sobre-escriba tableros usados ni siga si hay ganador
    if (board[num] || winner) { return } 

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[num] = turn
    setBoard(newBoard)


    // cambiar de turno
    const newTurn = turn == Turns.X ? Turns.O : Turns.X
    setTurn(newTurn)
    

    //guardar el estado de la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', JSON.stringify(newTurn))
    

    // revisar si hay ganador o empate
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      window.localStorage.removeItem('board')
      window.localStorage.removeItem('turn')
    } else if (checkEndgame(newBoard)) {
      setWinner(false)
    }
  }

  return (
    <>
      <main className='board'>
        <h1>Ta-Te-Ti</h1>
        <section className='game'>
          {
            board.map((square, index) => {
              return (
                <Square 
                  key={index} 
                  index={index} 
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>  
              )
            })
          }
        </section>
        <section className='turn'> 
          <Square isSelected={turn == Turns.X}>{Turns.X}</Square>
          <Square isSelected={turn == Turns.O}>{Turns.O}</Square>
        </section>
        
        <MensajeFinDelJuego resetGame={resetGame} winner={winner}/>  
      </main>
    </>
  )
}

export default App
