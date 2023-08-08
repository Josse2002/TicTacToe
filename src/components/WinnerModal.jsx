
import { Square } from './Square';

export function WinnerModal({toDefault, ganador}) {
    if (ganador === null) return null; //si no hay ganador no se muestra el componente
    const winnerText = ganador ? `El ganador es ${ganador}` : 'Empate';
    return (
        //por eso al resetear el juego se pone el estado a null para que no se muestre el componente nuevamente
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header className='win'>
                    {
                        ganador && <Square>{ganador}</Square>
                    }
                </header>
                <footer>
                    <button onClick={toDefault}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )


}