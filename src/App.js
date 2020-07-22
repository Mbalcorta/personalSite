import React from 'react';
import './App.css';
import { Column, Row } from 'simple-flexbox';

function App() {
  return (
    <div className="App">
      <header>
          <Row vertical='center'>
            <Column flexGrow={3} horizontal='center'>
              <h1> Mateo Balcorta </h1>
            </Column>
          </Row>
          <Row vertical='center'>
            <Column flexGrow={1} horizontal='center'>
              <span className='about'> About I’m a software engineer. I'm fascinated by programming and the exponential benefits it produces. My curiosity of how technology works keeps me engaged and presistantly pushing my limits of what is possible.</span>
            </Column>
          </Row>
      </header>
      <h1>Work</h1>
      <div className='cover'>
        <Row>
          <Column flexGrow={1} >
            <a href="https://blocktrumpswarcabinet.com/" target="_blank"><img src={require('./block.png')}/></a>
          </Column>
          <Column flexGrow={1}>
          <a href="http://progressivetalentpipeline.org/#home" target="_blank"><img src={require('./progressive.png')}/></a>
          </Column>
        </Row>
      </div>
        <Row >
          <Column flexGrow={1}>
            <a href="https://demandprogresseducationfund.org/#/" target="_blank"><img src={require('./demand.png')}/></a>
          </Column>
          <Column flexGrow={1}>
          <a href="https://stopthefcc.net/#/" target="_blank"><img src={require('./fcc.png')}/></a>
          </Column>
        </Row>
      <h1>Projects</h1>
        <Row>
          <Column flexGrow={1} >
            <a href="http://codepen.io/Mrpocketpet/full/XNwxNX/" target="_blank"><img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820156/Screen_Shot_2017-02-22_at_7.13.55_PM_p0df9f.png"/></a>
          </Column>
          <Column flexGrow={1}>
          <a href="https://mateospetcare.github.io/" target="_blank"><img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820203/Screen_Shot_2017-02-22_at_7.22.59_PM_qjtbq4.png"/></a>
          </Column>
        </Row>
        <Row >
          <Column flexGrow={1}>
          <a href="http://codepen.io/Mrpocketpet/full/mRJoWr/" target="_blank"><img src="http://res.cloudinary.com/misterrattail/image/upload/c_scale,h_729/v1487820154/Screen_Shot_2017-02-22_at_7.15.00_PM_cajqfz.png"/></a>
          </Column>
          <Column flexGrow={1}>
          <a href="https://oakkidsplay.com/" target="_blank"><img src="https://res.cloudinary.com/misterrattail/image/upload/c_scale,h_850,w_1460/v1562692910/Screen_Shot_2019-07-09_at_10.20.32_AM_kvvdvd.png"/></a>          </Column>
        </Row>

    </div> 
  );
}

export default App;
{/* <figure class="col-sm-6">
          <p>Tribute Page</p>
          <a href="http://codepen.io/Mrpocketpet/full/XNwxNX/" target="_blank"><img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820156/Screen_Shot_2017-02-22_at_7.13.55_PM_p0df9f.png"></a>
    </figure>
     <figure class="col-sm-6 pet">
          <p>Pet Sitting Site</p>
          <a href="https://mateospetcare.github.io/" target="_blank"><img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820203/Screen_Shot_2017-02-22_at_7.22.59_PM_qjtbq4.png"></a>
    </figure>
      <figure class="col-sm-6"></figure> */}