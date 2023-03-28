// src/App.js
import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import FixedArea from './components/FixedArea';

import { css } from '@emotion/react';

import logo from './assets/P49-Logo-final.png'
import slogan from './assets/potential_slogan.png'
import redOnion from './assets/red_onion_logo.png'
import fnfLogo from './assets/fnf.png'
import globalLogo from './assets/global_logo.png'
import phineoLogo from './assets/phineo_logo.png'
import firstImage from './assets/firsstSection.png'
import secondImage from './assets/secondSection.jpg'
import thirdImage from './assets/thirdSection.png'
import fourthImage from './assets/fourthSection.jpg'
import fifthImage from './assets/fifthSection.jpg'
import contactImage from './assets/contactSection.jpg'
import greenOrange from './assets/green_orange_square.png'
import orangeTriangle from './assets/orange_triangle.png'
import logoShort from './assets/P49-Logo-kurz.png'
import africaMap from './assets/africa_map.png'

import './App.scss'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Topic: ${topic}, Message: ${message}`);

    // // Check if the form is valid
    // if (name && email && topic && message) {
    //   // Send the email with the form data
    //   // submitForm(name, email, topic, message);
    // } else {
    //   // Display an error message
    //   alert('Please fill out all fields.');
    // }
  }

  const handleInViewChange = (index, inView) => {
    if (inView) {
      setActiveIndex(index);
    }
  };

  return (
    <div className="App">
      <FixedArea activeIndex={activeIndex}
        topLeftImage={greenOrange}
        bottomRightImage={orangeTriangle}>
        <div className="headSection">
          <div className="topRow">
            <img src={greenOrange} width="80" alt="Landscape" style={{ maxWidth: 'none', maxHeight: 'none' }} />
          </div>
          <div className="logoSection">
            <img src={logo} width="40%" />
            <p className="logoSlogan">Expand smart in Sub-Saharan Africa</p>
          </div>
        </div>
        <div className="initialSection imageBoxSection">
          <div className="boxInner">
            <div className="backgroundPart" />
            <div className="sectionInner" >
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <img src={logoShort} width="200" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(-100%, -500%)'}` }} />
                  <div className="whiteBox" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(-100%, 0%)'}` }}>
                    <p className="mainText">„Europe should stop thinking of Africa as a charity case.<br />It is a business case!“</p>
                    <p className="authorInfo">Dr. Obiageli „Oby“ Ezekwesili<br />Richard von Weizäcker Fellow of Robert Bosch Academy at the GP Circle Dinner „Governance on Africa, 2020</p>
                  </div>
                </div>
              </div>
              <div className="mapInfo" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(0%, 150%)'}` }}>
                <p className="mapTitle">Sub-Saharan Africa 49 countries</p>
                <img src={africaMap} />
              </div>
            </div>
          </div>
        </div>
        <div className="secondSection imageBoxSection">
          <img src={secondImage} className="bgImage" width="100%" />
          <div className="sectionDescription" style={{ transform: `${activeIndex === 2 ? 'translate(0%, 0%)' : 'translate(0%, -120%)'}` }}>
            <div className="descriptionInner">
              <img src={logoShort} width="200" />
              <div className="whiteBox">
                <p className="mainText">„Der Afrikanische Kontinent ist die am stärksten wachsende Volkswirtschaft der Welt und verfügt über einen gigantischen Binnenmarkt.“</p>
                <ul>
                  <li>1,1 Mrd. Einwohner:innen</li>
                  <li>456 Mio. Mobilfunkverträge</li>
                  <li>444 Mrd. US-Dollar Exporte</li>
                  <li>459 Mrd. US-Dollar Importe</li>
                  <li>1.920 Mrd. US-Dollar BIP</li>
                  <li>4.069 US-Dollar BIP pro Kopf (nach PPP)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="thirdSection imageBoxSection">
          <img src={thirdImage} className="bgImage" />
          <div className="sectionDescription">
            <div className="descriptionInner">
              <div className="whiteBox" style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-100%, 0%)'}` }}>
                <p className="mainText">Jetzt ist die Zeit, Afrika als Marke zu positionieren. Gemeinsam können wir die Potentiale des Kontinents in ein richtiges Licht rücken.</p>
                <p className="authorInfo">Stephan Balzer<br />Projektpartner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="statistics statsGreen">
          <p className="statsHeadline">Was spricht für eine geschäftliche Expansion in Subsahara-Afrika?</p>
          <div className="statisticsData">
            <div className="statsRow" style={{ transform: `${activeIndex === 4 ? 'translate(0%, 0%)' : activeIndex > 4 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <div className="statsTitle">Niedrige Lohnkosten</div>
              <div className="statsValue">32%</div>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 4 ? 'translate(0%, 0%)' : activeIndex > 4 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Ungesättigte Märkte</p>
              <p className="statsValue">19,3%</p>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 4 ? 'translate(0%, 0%)' : activeIndex > 4 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Spricht nichts dafür</p>
              <p className="statsValue">39,1%</p>
            </div>
          </div>
        </div>
        <div className="statistics statsRed">
          <p className="statsHeadline">Was spricht gegen eine geschäftliche Expansion in Subsahara-Afrika?</p>
          <div className="statisticsData">
            <div className="statsRow" style={{ transform: `${activeIndex === 5 ? 'translate(0%, 0%)' : activeIndex > 5 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <div className="statsTitle">Mangelnde Rechtssicherheit</div>
              <div className="statsValue">47,3%</div>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 5 ? 'translate(0%, 0%)' : activeIndex > 5 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Politische Instabilität</p>
              <p className="statsValue">53,2%</p>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 5 ? 'translate(0%, 0%)' : activeIndex > 5 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Hohe Kriminalität</p>
              <p className="statsValue">28,6%</p>
            </div>
          </div>
        </div>
        <div className="statistics statsOrange">
          <p className="statsHeadline">Wie interessant ist Sub-Sahara Afrika als Investitionsstandort?</p>
          <div className="statisticsData">
            <div className="statsRow" style={{ transform: `${activeIndex === 6 ? 'translate(0%, 0%)' : activeIndex > 6 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <div className="statsTitle">Interessant</div>
              <div className="statsValue">29,1%</div>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 6 ? 'translate(0%, 0%)' : activeIndex > 6 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Unentschieden</p>
              <p className="statsValue">13,3%</p>
            </div>
            <div className="statsRow" style={{ transform: `${activeIndex === 6 ? 'translate(0%, 0%)' : activeIndex > 6 ? 'translate(-120%, 0%)' : 'translate(120%, 0%)'}` }}>
              <p className="statsTitle">Uninteressant</p>
              <p className="statsValue">57,6%</p>
            </div>
          </div>
        </div>
        <div className="fourthSection imageBoxSection">
          <img src={fourthImage} className="bgImage" width="100%" />
          <div className="sectionDescription">
            <div className="descriptionInner">
              <img src={logoShort} width="200" />
              <div className="whiteBox">
                <p className="mainTitle">Zielgruppe</p>
                <p className="subtext">Wir richten uns an die jungen Menschen in Deutschland, die über das wirtschaftliche, politische und geistige Vermögen verfügen, Subsahara-Afrika auf seinem Weg zum Innovations- und Wachstumsstandort zu unterstützen. Wir denken sowohl im B2B-Bereich, als auch durch die Förderung junger Entrepreneure und künstlerischer Kooperationen.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fifthSection imageBoxSection">
          <img src={fifthImage} className="bgImage" width="100%" />
          <div className="sectionDescription">
            <div className="descriptionInner">
              <img src={logoShort} width="200" />
              <div className="whiteBox">
                <p className="mainTitle">Zielgruppe</p>
                <p className="subtext">Wir betreiben dabei grundlegende Aufklärungsarbeit und Agenda Setting,um den Markt entsprechend zu stimulieren:</p>
              </div>
              <div className="coloredBoxes">
                <div className="coloredBox redBox">
                  Erfolgsversprechende Finanzierungsvehikel mit Anreizen für Investoren entwickeln
                </div>
                <div className="coloredBox greenBox">
                  Ein starkes Netzwerk von Schlüsselpersonen und Partnern aufbauen, die private Investitionen sowie den Aufbau eines Impact Fonds für Subsahara unterstützen und befürworten.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contactSection imageBoxSection">
          <div className="boxInner">
            <img src={contactImage} className="bgImage" width="100%" />
            <div className="sectionInner">
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <img src={logoShort} width="200" />
                  <div className="whiteBox">
                    <p className="mainText">Kontakt</p>
                    <form onSubmit={handleSubmit}>
                      <label>
                        Name:
                        <input
                          type="text"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          required
                        />
                      </label>
                      <label>
                        Email:
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </label>
                      <label>
                        Topic:
                        <input
                          type="text"
                          value={topic}
                          onChange={(event) => setTopic(event.target.value)}
                          required
                        />
                      </label>
                      <label>
                        Message:
                        <textarea
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          required
                        />
                      </label>
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsorSection">
          <div className="initialRow">
            <img src={logo} width="40%" />
            <p className="logoSlogan">Expand smart in Sub-Saharan Africa</p>
          </div>
          <p>Unsere Initiatoren und Projektpartener:</p>
          <div className="sponsorGrid">
            <div className="logoRow">
              <img key="0" src={fnfLogo} alt="" />
              <img key="1" src={globalLogo} alt="" />
            </div>
            <div className="logoRow">
              <img key="2" src={globalLogo} alt="" />
              <img key="3" src={phineoLogo} alt="" />
              <img key="4" src={globalLogo} alt="" />
            </div>
          </div>
        </div>
      </FixedArea>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(0, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(1, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(2, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(3, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(4, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(5, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(6, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(7, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(8, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(9, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <InView
        threshold={0.5}
        onChange={(inView) => handleInViewChange(10, inView)}
      >
        <div style={{ height: '100vh' }} />
      </InView>

      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default App;
