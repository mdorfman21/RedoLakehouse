import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppContainer from './components/Container';
import Header from './components/Header';


function App() {
  return (
    <div>
      <div className="panel" id="home">
        <div className="inner">
          <div id="background-change">
            <div className="background-image" id="back-one"></div>
            <div className="background-image" id="back-two"></div>
            <div className="background-image" id="back-three"></div>
            <div className="background-image" id="back-four"></div>
          </div>
        </div>
      </div>
             
    <div>
      <AppContainer />
    </div>
    </div>
  );
}

export default App;
