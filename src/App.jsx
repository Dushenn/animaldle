import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HintCard from "./components/HintCard";
import {zivotinje} from './data/zivotinje'

const zivotinja = zivotinje[0]

function App() {
  return (
    <div className="app">
      <Header />

      <main className="hints">
        {
          zivotinja.hints.map((hint, index) => (
            <HintCard key={index} number={index + 1} text={hint} />
          ))
        }
      </main>

      <Footer />
    </div>
  );
}

export default App;
