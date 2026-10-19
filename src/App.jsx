import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HintCard from "./components/HintCard";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="hints">
        <HintCard number={1} text="Živi u Africi."/>
        <HintCard number={2} text="Ima crno-bele pruge."/>
        <HintCard number={3} text="Biljojed je."/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
