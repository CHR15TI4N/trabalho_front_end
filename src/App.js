import './App.css';
import Header from './components/Header';
import DigimonPage from './pages/DigimonPage';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <body>
        <DigimonPage/>
      </body>
    </div>
  );
}

export default App;
