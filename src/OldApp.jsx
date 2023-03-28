import React, { useState } from 'react'

import { Parallax, useParallax } from 'react-scroll-parallax'

// import { Mailer } from 'nodemailer-react'

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

function App() {
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

  // function submitForm(name, email, topic, message) {
  //   // Create a nodemailer transporter
  //   const transporter = nodemailer.createTransport({
  //     host: 'v073171.kasserver.com',
  //     port: 465,
  //     auth: {
  //       user: "hello@whatsmojo.com",
  //       pass: "82cCKdVwfJKgcPXf"
  //     }
  //   });
  //
  //   // Create an email message
  //   const mailOptions = {
  //     from: '"Fred Foo 👻" <foo@example.com>',
  //     to: 'fabian@12kmedia.com',
  //     subject: `New message from ${name} (${email}) - ${topic}`,
  //     text: message,
  //   };
  //
  //   // Send the email
  //   transporter.sendMail(mailOptions, function (error, info) {
  //     if (error) {
  //       console.log(error);
  //     } else {
  //       console.log('Email sent: ' + info.response);
  //     }
  //   });
  // }

  return (
    <div className="App">
      <div className="topRow">
        <Parallax translateX={['-10vw', '200vw']} translateY={['-21vh', '250vh']} speed={1000} easing="easeInQuad" style={{ width: '80px',
      height: '80px',
      position: 'absolute' }} ><img src={greenOrange} width="80" alt="Landscape" style={{ maxWidth: 'none', maxHeight: 'none' }} /></Parallax>
      </div>
      <Parallax className="logoSection" translateY={['-21vh', '20vh']} speed={-30}>
        <img src={logo} width="40%" />
        <p className="logoSlogan">Expand smart in Sub-Saharan Africa</p>
      </Parallax>
      <Parallax className="container" speed={30}>
        <div className="initialSection imageBoxSection">
          <div className="boxInner">
            <Parallax className="backgroundPart" speed={-50} />
            <Parallax className="sectionInner" speed={-30}>
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <img src={logoShort} width="200" />
                  <div className="whiteBox">
                    <p className="mainText">„Europe should stop thinking of Africa as a charity case.<br />It is a business case!“</p>
                    <p className="authorInfo">Dr. Obiageli „Oby“ Ezekwesili<br />Richard von Weizäcker Fellow of Robert Bosch Academy at the GP Circle Dinner „Governance on Africa, 2020</p>
                  </div>
                </div>
              </div>
              <div className="mapInfo">
                <p className="mapTitle">Sub-Saharan Africa 49 countries</p>
                <img src={africaMap} />
              </div>
            </Parallax>
          </div>
        </div>
        <div className="secondSection imageBoxSection">
          <Parallax translateY={['200px', '600px']} opacity={[0, 100]} easing="easeInQuad">
            <img src={secondImage} width="100%" />
          </Parallax>
          <Parallax className="sectionDescription" translateY={['800px', '400px']}>
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
          </Parallax>
        </div>
        <div className="thirdSection imageBoxSection">
          <Parallax translateY={['200px', '600px']} easing="easeInQuad">
            <img src={thirdImage} />
          </Parallax>
          <Parallax className="sectionDescription" translateY={['800px', '400px']}>
            <div className="descriptionInner">
              <div className="whiteBox">
                <p className="mainText">Jetzt ist die Zeit, Afrika als Marke zu positionieren. Gemeinsam können wir die Potentiale des Kontinents in ein richtiges Licht rücken.</p>
                <p className="authorInfo">Stephan Balzer<br />Projektpartner</p>
              </div>
            </div>
          </Parallax>
        </div>
        <Parallax translateY={['200px', '600px']} opacity={[0, 100]} easing="easeInQuad">
          <div className="statistics statsGreen">
            <p className="statsHeadline">Was spricht für eine geschäftliche Expansion in Subsahara-Afrika?</p>
            <div className="statisticsData">
              <Parallax className="statsRow" opacity={[0, 5]} translateX={['-100%', '0%']} easing="easeInQuad">
                <div className="statsTitle">Niedrige Lohnkosten</div>
                <div className="statsValue">32%</div>
              </Parallax>
              <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
                <p className="statsTitle">Ungesättigte Märkte</p>
                <p className="statsValue">19,3%</p>
              </Parallax>
              <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
                <p className="statsTitle">Spricht nichts dafür</p>
                <p className="statsValue">39,1%</p>
              </Parallax>
            </div>
          </div>
        </Parallax>
        <Parallax translateY={['200px', '600px']} opacity={[0, 100]} easing="easeInQuad">
        <div className="statistics statsRed">
          <p className="statsHeadline">Was spricht gegen eine geschäftliche Expansion in Subsahara-Afrika?</p>
          <div className="statisticsData">
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <div className="statsTitle">Mangelnde Rechtssicherheit</div>
              <div className="statsValue">47,3%</div>
            </Parallax>
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <p className="statsTitle">Politische Instabilität</p>
              <p className="statsValue">53,2%</p>
            </Parallax>
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <p className="statsTitle">Hohe Kriminalität</p>
              <p className="statsValue">28,6%</p>
            </Parallax>
          </div>
        </div>
        </Parallax>
        <Parallax translateY={['200px', '600px']} opacity={[0, 100]} easing="easeInQuad">
        <div className="statistics statsOrange">
          <p className="statsHeadline">Wie interessant ist Sub-Sahara Afrika als Investitionsstandort?</p>
          <div className="statisticsData">
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <div className="statsTitle">Interessant</div>
              <div className="statsValue">29,1%</div>
            </Parallax>
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <p className="statsTitle">Unentschieden</p>
              <p className="statsValue">13,3%</p>
            </Parallax>
            <Parallax className="statsRow" opacity={[0, 5]} easing="easeInQuad">
              <p className="statsTitle">Uninteressant</p>
              <p className="statsValue">57,6%</p>
            </Parallax>
          </div>
        </div>
        </Parallax>
        <div className="fourthSection imageBoxSection">
          <div translateY={['300px', '600px']} opacity={[0, 100]} easing="easeInQuad">
            <img src={fourthImage} width="100%" />
          </div>
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
          <div translateY={['300px', '600px']} opacity={[0, 100]} easing="easeInQuad">
            <img src={fifthImage} width="100%" />
          </div>
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
            <div translateY={['300px', '600px']} opacity={[0, 100]} easing="easeInQuad">
              <img src={contactImage} width="100%" />
            </div>
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
      </Parallax>
      <div className="footer">
        <div className="footerRow">
          <a href="/imprint">Impressum</a>
          <img src={orangeTriangle} width="80" />
        </div>
      </div>
    </div>
  )
}

export default App
