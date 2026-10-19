import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HintCard from "./components/HintCard";
import {zivotinje} from './data/zivotinje';

const MAX_POKUSAJA = 3

function izaberiZivotinju() {
  const index = Math.floor(Math.random() * zivotinje.length)
  return zivotinje[index]
}

// pomocna funkcija koja pretvara čć u c, š u s, ž u z, itd...
/* function normalize(text) {
  return text
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
} */


function App() {
  //let revealed = 1;  NE VALJA
  const [revealed, setRevealed] = useState(1);

  const [zivotinja, setZivotinja] = useState(izaberiZivotinju);   // funkcija bez zagrada, jer bi se u suprotnom pozivala pri svakom iscrtavanju
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState([]);
  const [isWon, setIsWon] = useState(false);

  const isLost = !isWon && attempts.length >= MAX_POKUSAJA
  const gameOver = isWon || isLost

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("Pokušaj: ", guess)
    const clean = guess.trim().toLowerCase();       //ili const clean = normalize(guess) zbog čćžš
    if(clean === '') return;

    if(clean === zivotinja.name) {
      setIsWon(true)
    } else {
      setAttempts([...attempts, clean]);
    }
    setGuess('');
  };

  const resetGame = () => {
    setZivotinja(izaberiZivotinju());
    setRevealed(1);
    setGuess('');
    setAttempts([]);
    setIsWon(false);
  }

  return (
    <div className="app">
      <Header />

      <main className="hints">
        {
          zivotinja.hints.slice(0, revealed).map((hint, index) => (
            <HintCard key={index} number={index + 1} text={hint} />
          ))
        }
      </main>
      <button 
        className="reveal-button" 
        onClick={() => setRevealed(revealed + 1)}
        disabled = {revealed >= zivotinja.hints.length || gameOver}
      >
        Sledeći hint
      </button>

      <form className="guess-form" onSubmit={handleSubmit}>
        <input 
          type="text"
          className="guess-input"
          placeholder="Unesi zivotinju"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          disabled={gameOver}
        />
        <button type="submit" disabled={gameOver}>Pogodi</button>
      </form>
      <ul className="attempts">
        {attempts.map((attempt, index) => (
          <li key={index} className="attempt">❌ {attempt}</li>
        ))}
      </ul>

      {isWon && <p className="message win">Čestitamo, pogodio si! 🎉</p>}
      {isLost && <p className="message lose">Nisi uspeo. Odgovor je: {zivotinja.name}</p>}
      {gameOver && <button className="reveal-button" onClick={resetGame}>Igraj ponovo</button>}

      <Footer />
    </div>
  );
}

export default App;
