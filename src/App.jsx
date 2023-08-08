import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

function App() {

  const [turn, setTurn] = useState(TURNS.X);
  const [board, setBoard] = useState(Array(9).fill(null));
  //Estado del ganador
  //null es porque no hay ganador y false si hay empate
  const [winner, setWinner] = useState(null);



  const resetGame = () => {
    //set to default 
    setTurn(TURNS.X);
    setBoard(Array(9).fill(null));
    setWinner(null);

  }

 


  const updateBoard = (index) => {

    if (board[index] || winner) return //si el cuadro ya esta ocupado no hacer nada 
    const newBoard = [...board]; //creando una copia del board para no mutar el estado original 
    newBoard[index] = turn;
    setBoard(newBoard);


    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;

    //actualizando el estado
    setTurn(newTurn);
    //actualizando el estado


    //verificando si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);

    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }

  };


  return (
    <main className='board'>
      <h2>TicTactToe</h2>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal toDefault={resetGame} ganador={winner} />
    </main>
  )
}

export default App
