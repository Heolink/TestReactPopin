import React from 'react';
import logo from './logo.svg';
import useToggle from './usePopin';
import SubComponnent from './SubComponnent';
import './App.css';

function App() {

  const [{isShowing}, dispatch] = useToggle();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <SubComponnent />
          { isShowing ? <div className="smart-popin">
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
