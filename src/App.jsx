import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HintCard from "./components/HintCard";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="hints">
        <HintCard />
        <HintCard />
        <HintCard />
      </main>

      <Footer />
    </div>
  );
}

export default App;
