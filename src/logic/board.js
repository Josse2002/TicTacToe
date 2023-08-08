import { WINNER_COMBOS } from '../constants.js';

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (boardToCheck[a]  //si el cuadro esta vacio no hacer nada
        && boardToCheck[a] === boardToCheck[b]   //si el cuadro es igual al siguiente no hacer nada
        && boardToCheck[a] === boardToCheck[c]) { //si el cuadro es igual al siguiente no hacer nada

        return boardToCheck[a];  // si se cumple la condicion retornar el valor del cuadro

      }
    }
    //si no hay ganador
    return null;
  }
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
}