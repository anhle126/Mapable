import mapable_logo from './mapable_logo.png';
import './App.css';
// import index from './backend/index.html';

// var __html =require('./backend/index.html');
// var index = { __html: __html };

function App() {
  return (
    <div className="App">
      <div className="grid"></div>
      <header className="App-header">
        <img src={mapable_logo} className="App-logo" alt="logo" />
      </header>
      <div className="slogan"></div>
      
      <div className="transport-header">Where are you going?</div>
      <div className="fields">
        <div className="start-field">
          <p>Starting At:</p>
          <input className="input-field"></input>
        </div>
        <div className="end-field">
          <p>Ending At:</p>
          <input className="input-field"></input>
        </div>
      </div>
      <div className="transport-header">How do you get around?</div>
      <div className="buttons">
        <button>Walking</button>
        <button>Biking</button>
        <button>Wheelchair</button>
        <button>Scooter</button>
      </div>
    </div>
  );
}

export default App;
