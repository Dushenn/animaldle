import './App.css'

function App() {

  return (
    <div className='app'>
      <header className='header'>
        <h1>Pogodi životinju 🐼</h1>
        <p>Otkrivaj hint-ove i pogodi koja životinja je u pitanju.</p>
      </header>

      <main className='hints'>
        <div className='hint-card'>
          <span className='hint-number'>1</span>
          <p className='hint-text'>Živi u Africi.</p>
        </div>

        <div className='hint-card'>
          <span className='hint-number'>2</span>
          <p className='hint-text'>Ima crno-bele pruge.</p>
        </div>

        <div className='hint-card'>
          <span className='hint-number'>3</span>
          <p className='hint-text'>Biljojed je.</p>
        </div>
      </main>

      <footer>
        <p>Radionica: React · ETF</p>
      </footer>

    </div>
  );
}

export default App
