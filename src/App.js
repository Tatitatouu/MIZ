import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
    <Header />
      <Hero />
      <main className="app-main">
        {/* Contenu principal */}
      </main>
    </div>
  );
}

export default App;
