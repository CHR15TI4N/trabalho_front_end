import './App.css';
import Header from './components/Header';
import Router from './routes/Router';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
        <Router/>
      </body>
    </div>
  );
}

export default App;
