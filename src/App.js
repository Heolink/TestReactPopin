import React from 'react';
import { useReducer } from 'react';
import logo from './logo.svg';
import popin from './usePopin';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(popin.reducer, popin.initialState);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => dispatch({type: 'toggle'})}>POPUP</button>

        { state.isShowing ? <div className="smart-popin">
          JE SUIS UNE POPUP
          </div> : null
        }

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
