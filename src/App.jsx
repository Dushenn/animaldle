import { useState } from "react";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HintCard from "./components/HintCard";
import {zivotinje} from './data/zivotinje';

const zivotinja = zivotinje[0];

function App() {
  //let revealed = 1;  NE VALJA
  const [revealed, setRevealed] = useState(1)

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
        disabled = {revealed >= zivotinja.hints.length}
      >
        Sledeći hint
      </button>

      <Footer />
    </div>
  );
}

export default App;
