import { ARRAYS_GANADORES } from "../constants.js"

export const checkWinner = (boardCheck) => {
    // revisamos si hay un ganador
    for ( const array of ARRAYS_GANADORES) {
      const [a, b, c] = array
      if (boardCheck[a] && boardCheck[a] == boardCheck[b] && boardCheck[a] == boardCheck[c]) {
        return boardCheck[a]
      }
    }
      // si no hay ganador
      return null
}


// esto chequea si están todos los espacios ocupados cosa de poder determinar un empate
export const checkEndgame = (checkBoard) => {
    return checkBoard.every((square) => square != null) //el 'every' te chequea una condicion (arg del 'every') en cada elemento y te devuelve si es true o false
  }