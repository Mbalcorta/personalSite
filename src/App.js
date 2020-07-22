import React from 'react';
import './App.css';
import { Column, Row } from 'simple-flexbox';

function App() {
  return (
    <div className="App">
      <header>
          <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
              <a href="contact"><span> Contact </span></a>
            </Column>
            <Column flexGrow={3} horizontal='center'>
              <h1> Mateo Balcorta </h1>
            </Column>
            <Column flexGrow={1} horizontal='center'>
            <a href="#resume"><span> Resume </span></a>
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
            <a className='clickable-container' href="https://blocktrumpswarcabinet.com/" target="_blank">
              <div className="single-news">
                <img src={require('./block.png')}/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> 
                  blocktrumpswarcabinet.com Update content for single page site that connects user data in CMS, connects users via API to directly call their senator and connects to a feedback page where the API sends the feedback via email to demand progress employees.
                </div>
              </div> 
            </a>
          </Column>
          <Column flexGrow={1}>
            <a className='clickable-container' href="http://progressivetalentpipeline.org/#home" target="_blank">
              <div className="single-news">
                <img src={require('./progressive.png')}/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> 
                progresspipeline.org Implemented single page site where applicants submit application with supplemental questions which gets put into a google drive folder.
                </div>
              </div> 
            </a>
          </Column>
        </Row>
      </div>
        <Row >
          <Column flexGrow={1}>
            <a className='clickable-container' href="https://demandprogresseducationfund.org/#/" target="_blank">
              <div className="single-news">
                <img src={require('./demand.png')}/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> 
                  demandprogresseducationfund.org Implemented single page web site.
                </div>
              </div> 
            </a>
          </Column>
          <Column flexGrow={1}>
            <a className='clickable-container' href="https://stopthefcc.net/#/" target="_blank">
              <div className="single-news">
                <img src={require('./fcc.png')}/>
              </div>
              <div class="overlay">
                  <div class="overlay-content"> 
                    stopthefcc.com
                    Update content for single page micosite with tipe.io API to enable non technical folks to update text content. User information is sent via API I produced which runs a headless browser to fill out FCC comment form with a generic comment.
                  </div>
              </div> 
            </a>
          </Column>
        </Row>
      <h1>Projects</h1>
      <div className='cover'>
        <Row>
          <Column flexGrow={1} >
            <a className='clickable-container' href="http://codepen.io/Mrpocketpet/full/XNwxNX/" target="_blank">
              <div className="single-news">
                <img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820156/Screen_Shot_2017-02-22_at_7.13.55_PM_p0df9f.png"/>
              </div> 
              <div class="overlay">
                <div class="overlay-content"> Tribute Page</div>
              </div> 
            </a>
          </Column>
          <Column flexGrow={1}>
            <a className='clickable-container' href="https://mateospetcare.github.io/" target="_blank">
              <div className="single-news"> 
                <img src="http://res.cloudinary.com/misterrattail/image/upload/v1487820203/Screen_Shot_2017-02-22_at_7.22.59_PM_qjtbq4.png"/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> Pet Sitting Site </div>
              </div> 
            </a>
          </Column>
        </Row>
        </div>
        <Row >
          <Column flexGrow={1}>
            <a className='clickable-container' href="http://codepen.io/Mrpocketpet/full/mRJoWr/" target="_blank">
              <div className="single-news">
                <img src="http://res.cloudinary.com/misterrattail/image/upload/c_scale,h_850,w_1460/v1487820154/Screen_Shot_2017-02-22_at_7.15.00_PM_cajqfz.png"/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> Random Quote Generator </div>
              </div> 
            </a>
          </Column>
          <Column flexGrow={1}>
            <a className='clickable-container' href="https://oakkidsplay.com/" target="_blank">
              <div className="single-news">
                <img src="https://res.cloudinary.com/misterrattail/image/upload/c_scale,h_850,w_1460/v1562692910/Screen_Shot_2019-07-09_at_10.20.32_AM_kvvdvd.png"/>
              </div>
              <div class="overlay">
                <div class="overlay-content"> Oakland Kids Playgroups Map </div>
              </div> 
            </a>          
          </Column>
        </Row>
        <h1>Resume</h1>
        <Row >
        <Column flexGrow={1}>
        </Column>
          <Column >
            <div id='resume' className='resume'>
              <img src="https://res.cloudinary.com/misterrattail/image/upload/v1595389255/Screen_Shot_2020-07-21_at_8.14.44_PM_aujqn0.png"/>
            </div>
          </Column>
        <Column flexGrow={1}>
        </Column>
        </Row>
        <h1>Contact</h1>
        <Row className='contact' justifyContent='center'>
            <a className='mail' href="https://www.linkedin.com/in/mateo-balcorta-169202114/" target='_blank'>
              <span>LinkedIn</span>
            </a>
            <a className='mail' href="mailto:mateo.balcorta@gmail.com">
              <img className="envelope" src="http://35wmrr2htzue38ph9kt270l1711.wpengine.netdna-cdn.com/wp-content/uploads/2015/11/email-2-icon.png"/>
              <span>Mateo.balcorta@gmail.com</span>
            </a>
            <a className='mail' href="https://github.com/mbalcorta" target='_blank'>
              <span>GitHub</span>
            </a>
        </Row>
    </div> 
  );
}

export default App;
