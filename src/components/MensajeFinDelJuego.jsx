import { Square } from "./Square.jsx"

export function MensajeFinDelJuego ( {resetGame, winner}) {
    if (winner == null) {
        return null 
    }
    
    const resultadoTexto = winner == false ? 'Empate' : 'Ganó: '

    return (
      <section className='winner'>
        <div className='text'>
          <h2>{resultadoTexto}</h2>
          <header className='win'>
            { winner && <Square>{winner}</Square> }
          </header>

          <footer>
            <button onClick={resetGame}>Empezar de nuevo</button>
          </footer>
        </div>
      </section>
    )
  }