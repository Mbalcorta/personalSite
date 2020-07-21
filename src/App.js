import React from 'react';
import './App.css';
import { Column, Row } from 'simple-flexbox';

function App() {
  return (
    <div className="App">
      <header>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <span> work </span>
            </Column>
            <Column flexGrow={3} horizontal='center'>
              <h1> Mateo Balcorta </h1>
            </Column>
            <Column flexGrow={1} horizontal='center'>
              <span> about </span>
            </Column>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <span className='about'> About I’m a software engineer. I'm fascinated by programming and the exponential benefits it produces. My curiosity of how technology works keeps me engaged and presistantly pushing my limits of what is possible.</span>
            </Column>
          </Row>
      </header>
      <Row >
      <Column flexGrow={1}>
        <a><img src={require('./block.png')}/></a>
      </Column>
      <Column flexGrow={1}>
      <a><img src={require('./progressive.png')}/></a>
      </Column>
      </Row>
      <Row >
      <Column flexGrow={1}>
        <a><img src={require('./demand.png')}/></a>
      </Column>
      <Column flexGrow={1}>
      <a><img src={require('./fcc.png')}/></a>
      </Column>
      </Row>
    </div> 
  );
}

export default App;
