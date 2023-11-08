import './App.css';
import logo from './images/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi, I'm Shagun!
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This website is currently being devloped, check back later.
        </p>
        <p>
          Old website is available <a href="/index-old.html">here</a>
        </p>
      </header>
    </div>
  );
}

export default App;
