// src/App.js
import React, { useState, useRef, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import FixedArea from './components/FixedArea';
import Slider from './components/Slider';
import Modal from './components/Modal';
import axios from 'axios';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

import { css } from '@emotion/react';

import logo from './assets/P49-Logo-final.png'
import slogan from './assets/potential_slogan.png'
import redOnion from './assets/red_onion_logo.png'
import fnfLogo from './assets/fnf.png'
import globalLogo from './assets/global_logo.png'
import phineoLogo from './assets/phineo_logo.png'
import hiddenChampionLogo from './assets/hidden_champions.png'
import africaLogo from './assets/africa-logo.png'
import secondImage from './assets/secondSection.jpg'
import thirdImage from './assets/thirdSection.jpg'
import fifthImage from './assets/fifthSection.jpg'
import greenOrange from './assets/green_orange_square.png'
import orangeTriangle from './assets/orange_triangle.png'
import logoShort from './assets/P49-Logo-kurz.png'
import africaMap from './assets/africa_map.png'
import sendMessage from './assets/sendMessage.png'
import orangeBG from './assets/orangeBG.jpg'

import event1 from './assets/event-1.png'
import event2 from './assets/event-2.png'
import event3 from './assets/event-3.png'
import event11 from './assets/dakar_1.jpeg'
import event12 from './assets/dakar_2.jpeg'
import event13 from './assets/dakar_3.jpeg'
import event14 from './assets/dakar_4.jpeg'
import event31 from './assets/lunch_1.jpg'
import event32 from './assets/lunch_2.jpg'
import event33 from './assets/lunch_3.jpg'

import './App.scss'

const App = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');
  const [sentMessage, setSentMessage] = useState(false)
  const [openSidebar, setOpenSidebar] = useState(false)
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const prevActiveIndexRef = useRef();
  const fixedAreaRef = React.createRef();

  const eventImages = {
    event1: [
      event11,
      event12,
      event13,
      event14
    ],
    event2: [
      event1,
      event2,
      event3,
    ],
    event3: [
      event31,
      event32,
      event33,
    ],
  };

  useEffect(() => {
  if (isModalOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  // Clean up when the component is unmounted
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [isModalOpen]);

  const toggleSidebar = () => {
    setOpenSidebar((prevOpenSidebar) => !prevOpenSidebar);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(`Name: ${name}, Email: ${email}, Topic: ${topic}, Message: ${message}`);

    // // Check if the form is valid
    if (name && email && topic && message) {
      // Send the email with the form data
      // submitForm(name, email, topic, message);
      try {
        await axios.post('https://potential49backend.onrender.com/send-email', {
          name: name,
          email: email,
          // topic: topic,
          message: message,
        });
        console.log('Email sent successfully');
        setSentMessage(true)
      } catch (error) {
        console.error('Error sending email:', error);
      }
    } else {
      // Display an error message
      alert('Please fill out all fields.');
    }
  }

  const handleInViewChange = (index, inView) => {
    if (inView) {
      prevActiveIndexRef.current = activeIndex;
      setActiveIndex(index);
    }
  };

  const handleNavItemClick = (e, index) => {
    e.preventDefault();
    console.log('Clicked item index:', index);
    if (fixedAreaRef.current) {
      fixedAreaRef.current.scrollToChild(index);
      setOpenSidebar(false);
    }
  };

  const brandLogos = [
    africaLogo,
    fnfLogo,
    globalLogo,
    phineoLogo,
    hiddenChampionLogo,
    africaLogo,
    fnfLogo,
    globalLogo,
    phineoLogo,
    hiddenChampionLogo
  ]

  return (
    <div className="App">
      <div className="headerNav">
        <nav className="navbar">
          <div className="navContainer">
            <div className="leftPart">
              <img src={sendMessage} className="sendMessage" onClick={(e) => handleNavItemClick(e, 4)} />
            </div>
            <div className="centerPart">
              <img src={logo} width="25%" onClick={(e) => handleNavItemClick(e, 0)} />
              <div className="logoSlogan" onClick={(e) => handleNavItemClick(e, 0)}>Expand smart in Sub-Saharan Africa</div>
            </div>
            <div className="rightPart">
              <button className="navToggle" onClick={toggleSidebar}>
                <svg className="menuBurger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000" fill="currentColor"><path d="M0 1437.5h2000v125H0zm0-500h2000v125H0zm0-500h2000v125H0z"></path></svg>
              </button>
            </div>
          </div>
          <div className="sideMenu">
            <div className={`contentWrapper ${!openSidebar ? 'sideMenuClosed' : ''}`}>
              <div className="contentInner">
                <div className="contentUpper">
                  <div className="closeRow">
                    <button className="toggleClose" onClick={toggleSidebar}>
                      <svg className="menuBurgerOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 2000"><path d="M2000 118.3L1881.7 0 1000 881.7 118.3 0 0 118.3 881.7 1000 0 1881.7 118.3 2000l881.7-881.7 881.7 881.7 118.3-118.3-881.7-881.7z" fill="currentColor"></path></svg>
                    </button>
                  </div>
                  <div className="menuSpacer"></div>
                  <div className="menuItemsWrapper">
                    <ul className="menuItems">
                      <li className="menuItem"><a href="#" onClick={(e) => handleNavItemClick(e, 0)}>Über uns</a></li>
                      <li className="menuItem"><a href="#" onClick={(e) => handleNavItemClick(e, 1)}>Zahlen & Fakten</a></li>
                      <li className="menuItem"><a href="#" onClick={(e) => handleNavItemClick(e, 3)}>Umfrage</a></li>
                      <li className="menuItem"><a href="#" onClick={(e) => handleNavItemClick(e, 2)}>Events</a></li>
                      <li className="menuItem"><a href="#" onClick={e => {
                      e.preventDefault();
                      window.scrollTo({
                        top: document.body.scrollHeight,
                        behavior: 'smooth',
                      });
                      setOpenSidebar((prevOpenSidebar) => !prevOpenSidebar);
                    }}>Partner</a></li>
                      <li className="menuItem"><a href="#" onClick={(e) => handleNavItemClick(e, 4)}>Kontakt</a></li>
                    </ul>
                  </div>
                </div>
                <div className="contentLower">
                  <div className="companyInfo">
                    <p className="fontBold">Projekt von red onion GmbH</p>
                    <p>Alexanderstraße 7</p>
                    <p style={{ marginBottom: '15px' }}>10178 Berlin</p>
                    <p><a href="mailto:contact@potential49.com" className="hoverpadding">contact@potential49.com</a></p>
                    <p className="pt-4">© red onion GmbH, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <FixedArea activeIndex={activeIndex}
        prevActiveIndex={prevActiveIndexRef.current}
        ref={fixedAreaRef}>
        <div id="aboutus" className="initialSection imageBoxSection">
          <p className="sectionTitle" style={{ transform: `${activeIndex === 0 ? 'translate(0%, 0%)' : 'translate(0%, -120%)'}` }}>Über Uns</p>
          <div className="boxInner">
            <img src={fifthImage} className="bgImage" width="100%" />
            <div className="sectionInner">
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <div className="whiteBox" style={{ transform: `${activeIndex === 0 ? 'translate(0%, 0%)' : 'translate(100%, 0%)'}` }}>
                    <p className="mainText">„Europe should stop thinking of Africa as a charity case.<br />It is a business case!“</p>
                    <p className="authorInfo">Dr. Obiageli „Oby“ Ezekwesili<br />Richard von Weizäcker Fellow of Robert Bosch Academy at the GP Circle Dinner „Governance on Africa, 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondSection imageBoxSection">
          <div className="bgImage" style={{ backgroundImage: `url(${orangeBG})` }} />
          <div className="sectionInner">
            <p className="sectionTitle" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(0%, -120%)'}` }}>Afrika ist die am stärksten wachsende Volkswirtschaft der Welt. Der Kontinent verfügt über einen gigantischen Binnenmarkt.</p>
            <div className="sectionBody">
              <div className="sectionDescription" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(0%, -120%)'}` }}>
                <div className="descriptionInner">
                  <div className="whiteBox">
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
              <div className="mapInfo" style={{ transform: `${activeIndex === 1 ? 'translate(0%, 0%)' : 'translate(0%, 150%)'}` }}>
                <p className="mapTitle">Subsahara-Afrika <span className="green">49</span> Länder<br /> südlich der Sahara:</p>
                <img src={africaMap} />
              </div>
            </div>
          </div>
        </div>
        <div className="thirdSection imageBoxSection">
          <div className="boxInner">
            <div className="boxHeader" style={{ transform: `${activeIndex === 2 ? 'translate(0%, 0%)' : 'translate(-150%, 0%)'}` }}>
              <p className="boxTitle">Begegnungen mit Gleichgesinnten</p>
              <p className="boxSubtitle">Auf unseren Events geben wir der Subsahara eine völlig neue Strahlkraft</p>
            </div>
            <div className="sectionContent">
              <div className="column" style={{ transform: `${activeIndex === 2 ? 'translate(0%, 0%)' : 'translate(-150%, 0%)'}` }}>
                <h2 className="headline">Africa Roundtable in Dakar, Senegal, 2. Dezember 2022</h2>
                <Slider images={eventImages.event1} />
                <p className="subtext">Politische, wirtschaftliche und gesellschaftliche Entscheidungsträger aus Afrika und Europa kamen zusammen, um gemeinsam Lösungen zu entwickeln.</p>
              </div>
              <div className="column" style={{ transform: `${activeIndex === 2 ? 'translate(0%, 0%)' : 'translate(0%, -150%)'}` }}>
                <h2 className="headline">African Hidden Champions Summit in Frankfurt, 22-23 September 2022</h2>
                <Slider images={eventImages.event2} />
                <p className="subtext">Ein gelungener Auftakt eines jährlichen Dialogs zwischen führenden Stakeholder, die das "Afrika der Zukunft" gemeinsam gestalten wollen.</p>
              </div>
              <div className="column" style={{ transform: `${activeIndex === 2 ? 'translate(0%, 0%)' : 'translate(150%, 0%)'}` }}>
                <h2 className="headline">Potential 49 Business Lunch, Berlin 29. März 2023</h2>
                <Slider images={eventImages.event3} />
                <p className="subtext">Wir stellten Botschaftern aus Subsahara-Afrika die Initiative vor und sprachen über erste Projektschritte. Das Feedback war durchweg positiv.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="surveySection imageBoxSection">
          <div className="boxInner">
            <div className="sectionContent">
              <div className="boxHeader">
                <div className="boxTitle" style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(0%, -800%)'}` }}>Schwacher Investitionswille trotz positiver Signale</div>
              </div>
              <div className="sectionWrapper">
                <p style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-150%, 0%)'}` }}>Wir haben privatwirtschaftliche Entscheider:innen und Unternehmer:innen mit bis zu 999 Mitarbeitenden befragt, die planen in Zukunft international zu expandieren.</p>
                <p style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-200%, 0%)'}` }}>Stichprobengröße: 250</p>
                <p style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-250%, 0%)'}` }}>Stat. Fehler Gesamtergebnis: 11,3 %</p>
                <p style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-300%, 0%)'}` }}>Befragungszeitraum: Okt. 22 - Nov. 22 | Mehrfachantwort möglich</p>
                <a href="#" target="_blank" style={{ transform: `${activeIndex === 3 ? 'translate(0%, 0%)' : 'translate(-150%, 0%)'}` }}>Zu den Ergebnissen</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contactSection imageBoxSection">
          <div className="boxInner">
            <img src={thirdImage} className="bgImage" width="100%" />
            <div className="sectionInner">
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <div className="whiteBox" style={{ transform: `${activeIndex === 4 ? 'translate(0%, 0%)' : 'translate(0%, 250%)'}` }}>
                    <p className="mainText">Kontakt</p>
                    <p className="subText">Es ist Zeit, das Bild von Subsahara-Afrika zu verbessern!<br /><br />Wir freuen uns über den Austausch mit Ihnen.</p>
                    {sentMessage &&
                      <p>Danke für deine Nachricht! Wir werden uns umgehend bei dir melden.</p>
                    }
                    <form onSubmit={handleSubmit} style={{ visibility: sentMessage ? 'hidden' : 'visible' }}>
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
                        E-Mail:
                        <input
                          type="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          required
                        />
                      </label>
                      <label>
                        Nachricht:
                        <textarea
                          value={message}
                          onChange={(event) => setMessage(event.target.value)}
                          required
                        />
                      </label>
                      <button type="submit">Versenden</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="personInfo" style={{ transform: `${activeIndex === 4 ? 'translate(0%, 0%)' : 'translate(150%, 0%)'}` }}>
                <p className="authorInfo">Stephan Balzer,<br />Initiator</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sponsorSection">
          <div className="initialRow">
            <img src={logo} width="30%" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, -500%)'}` }} />
            <p className="logoSlogan" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, -500%)'}` }}>Expand smart in Sub-Saharan Africa</p>
          </div>
          <p>Unsere Initiatoren und Projektpartener:</p>
          <div className="sponsorGrid">
            <div className="logoRow">
              <img key="0" src={fnfLogo} alt="" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, 300%)'}` }} />
              <img key="1" src={globalLogo} alt="" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, 500%)'}` }} />
            </div>
            <div className="logoRow">
              <img key="2" src={hiddenChampionLogo} height="80%" alt="" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, 300%)'}` }} />
              <img key="3" src={phineoLogo} alt="" style={{ transform: `${activeIndex === 10 ? 'translate(0%, 0%)' : 'translate(0%, 500%)'}` }} />
            </div>
          </div>
        </div>
      </FixedArea>

      <div className="contentBelow">
        <div className="sponsorSection" id="#sponsors">
          <p>Unsere Initiatoren und Projektpartener</p>
          <div className="sponsorGrid">
            <Swiper
              slidesPerView={'auto'}
              slidesPerGroup={1}
              spaceBetween={50}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              className="sponsorSlider"
            >
              {brandLogos.map((logo, index) => (
                <SwiperSlide key={index} style={{ width: 'auto', display: 'inline-block' }}>
                  <div className="brandLogoContainer">
                    <img src={logo} alt={`Brand logo ${index}`} className="brandLogo" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="swiper-button-next-custom"></div>
            <div className="swiper-button-prev-custom"></div>
          </div>
        </div>
        <div className="footerSection">
          <div className="footerItems">
            <a href="#" onClick={(e) => {e.preventDefault(); setModal1Open(true); setIsModalOpen(true)}}>Impressum</a>
            <a href="#" onClick={(e) => {e.preventDefault(); setModal2Open(true); setIsModalOpen(true)}}>Datenschutz</a>
          </div>
        </div>
        {modal1Open && (
          <Modal onClose={() => {setModal1Open(false);setIsModalOpen(false)}}>
            <div>
          		<h1>Impressum</h1>
          		<h2>Angaben gemäß § 5 TMG</h2>
              <p>red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Handelsregister: HRB 73786<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg</p>
              <p><strong>Vertreten durch:</strong><br />
              Stephan Balzer</p>
              <h2>Kontakt</h2>
              <p>Telefon: +49 (0)30 7262 675 0<br />
              Telefax: +49 (0)30 7262 675 20<br />
              E-Mail: info@redonion.de</p>
              <h2>Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE812866010</p>
              <h2>Redaktionell verantwortlich</h2>
              <p>Stephan Balzer<br />
              red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </div>
          </Modal>
        )}

        {modal2Open && (
          <Modal onClose={() => {setModal2Open(false);setIsModalOpen(false)}}>
            <div>
          		<h1>Datenschutz</h1>
          		<h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>
              <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              <h3>Datenerfassung auf dieser Website</h3>
              <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
              <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.</p>
              <h4>Wie erfassen wir Ihre Daten?</h4>
              <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
              <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              <h4>Wofür nutzen wir Ihre Daten?</h4>
              <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
              <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
              <p>Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>
              <h3>Analyse-Tools und Tools von Dritt­anbietern</h3>
              <p>Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.</p>
              <p>Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.</p>
              <h2>2. Hosting</h2>
              <h3>IONOS</h3>
              <p>Wir hosten unsere Website bei IONOS SE. Anbieter ist die IONOS SE, Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie unsere Website besuchen, erfasst IONOS verschiedene Logfiles inklusive Ihrer IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/terms-privacy</a>.</p>
              <p>Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
              <h4>Auftragsverarbeitung</h4>
              <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              <h2>3. Allgemeine Hinweise und Pflicht­informationen</h2>
              <h3>Datenschutz</h3>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              <h3>Hinweis zur verantwortlichen Stelle</h3>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <p>red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Telefon: +49 (0)30 7262 675 0<br />
              E-Mail: [E-Mail-Adresse der verantwortlichen Stelle]</p>
              <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
              <h3>Speicherdauer</h3>
              <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
              <h3>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
              <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z.&nbsp;B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
              <h3>Datenschutz­beauftragter</h3>
              <p>Wir haben einen Datenschutzbeauftragten benannt.</p>
              <p>Nina Zoubek<br />
              red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Telefon: +49 (0)30 7262 675 0<br />
              E-Mail: n.zoubek@redonion.de</p>
              <h3>Hinweis zur Datenweitergabe in die USA und sonstige Drittstaaten</h3>
              <p>Wir verwenden unter anderem Tools von Unternehmen mit Sitz in den USA oder sonstigen datenschutzrechtlich nicht sicheren Drittstaaten. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Drittstaaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in diesen Ländern kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann. Beispielsweise sind US-Unternehmen dazu verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass Sie als Betroffener hiergegen gerichtlich vorgehen könnten. Es kann daher nicht ausgeschlossen werden, dass US-Behörden (z.&nbsp;B. Geheimdienste) Ihre auf US-Servern befindlichen Daten zu Überwachungszwecken verarbeiten, auswerten und dauerhaft speichern. Wir haben auf diese Verarbeitungstätigkeiten keinen Einfluss.</p>
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
              <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
              <h3>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h3>
              <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
              <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
              <h3>Beschwerde­recht bei der zuständigen Aufsichts­behörde</h3>
              <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
              <h3>Recht auf Daten­übertrag­barkeit</h3>
              <p>Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
              <h3>Auskunft, Löschung und Berichtigung</h3>
              <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.</p>
              <h3>Recht auf Einschränkung der Verarbeitung</h3>
              <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
              <ul>
              <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
              <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
              </ul>
              <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
              <h3>SSL- bzw. TLS-Verschlüsselung</h3>
              <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
              <p>Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.</p>
              <h2>4. Datenerfassung auf dieser Website</h2>
              <h3>Server-Log-Dateien</h3>
              <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
              <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
              </ul>
              <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
              <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
              <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
              <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
              <p>Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.&nbsp;B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
              <h2>5. Analyse-Tools und Werbung</h2>
              <h3>Matomo</h3>
              <p>Diese Website benutzt den Open Source Webanalysedienst Matomo.</p>
              <p>Mit Hilfe von Matomo sind wir in der Lage Daten über die Nutzung unserer Website durch die Websitebesucher zu erfassen und zu analysieren. Hierdurch können wir u.&nbsp;a. herausfinden, wann welche Seitenaufrufe getätigt wurden und aus welcher Region sie kommen. Außerdem erfassen wir verschiedene Logdateien (z.&nbsp;B. IP-Adresse, Referrer, verwendete Browser und Betriebssysteme) und können messen, ob unsere Websitebesucher bestimmte Aktionen durchführen (z.&nbsp;B. Klicks, Käufe u. Ä.).</p>
              <p>Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
              <h4>IP-Anonymisierung</h4>
              <p>Bei der Analyse mit Matomo setzen wir IP-Anonymisierung ein. Hierbei wird Ihre IP-Adresse vor der Analyse gekürzt, sodass Sie Ihnen nicht mehr eindeutig zuordenbar ist.</p>
              <h4>Cookielose Analyse</h4>
              <p>Wir haben Matomo so konfiguriert, dass Matomo keine Cookies in Ihrem Browser speichert.</p>
              <h4>Hosting</h4>
              <p>Wir hosten Matomo bei folgendem Drittanbieter:</p>
              <p>1&amp;1 IONOS SE<br />
              Elgendorfer Straße 57<br />
              56410 Montabaur</p>
              <h4>Auftragsverarbeitung</h4>
              <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              <h2>6. Newsletter</h2>
              <h3>Newsletter­daten</h3>
              <p>Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Für die Abwicklung der Newsletter nutzen wir Newsletterdiensteanbieter, die nachfolgend beschrieben werden.</p>
              <h3>Mailchimp</h3>
              <p>Diese Website nutzt die Dienste von Mailchimp für den Versand von Newslettern. Anbieter ist die Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.</p>
              <p>Mailchimp ist ein Dienst, mit dem u.a. der Versand von Newslettern organisiert und analysiert werden kann. Wenn Sie Daten zum Zwecke des Newsletterbezugs eingeben (z.&nbsp;B. E-Mail-Adresse), werden diese auf den Servern von Mailchimp in den USA gespeichert.</p>
              <p>Mit Hilfe von Mailchimp können wir unsere Newsletterkampagnen analysieren. Wenn Sie eine mit Mailchimp versandte E-Mail öffnen, verbindet sich eine in der E-Mail enthaltene Datei (sog. web-beacon) mit den Servern von Mailchimp in den USA. So kann festgestellt werden, ob eine Newsletter-Nachricht geöffnet und welche Links ggf. angeklickt wurden. Außerdem werden technische Informationen erfasst (z.&nbsp;B. Zeitpunkt des Abrufs, IP-Adresse, Browsertyp und Betriebssystem). Diese Informationen können nicht dem jeweiligen Newsletter-Empfänger zugeordnet werden. Sie dienen ausschließlich der statistischen Analyse von Newsletterkampagnen. Die Ergebnisse dieser Analysen können genutzt werden, um künftige Newsletter besser an die Interessen der Empfänger anzupassen.</p>
              <p>Wenn Sie keine Analyse durch Mailchimp wollen, müssen Sie den Newsletter abbestellen. Hierfür stellen wir in jeder Newsletternachricht einen entsprechenden Link zur Verfügung.</p>
              <p>Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen, indem Sie den Newsletter abbestellen. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.</p>
              <p>Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des Newsletters aus der Newsletterverteilerliste gelöscht. Daten, die zu anderen Zwecken bei uns gespeichert wurden, bleiben hiervon unberührt.</p>
              <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://mailchimp.com/eu-us-data-transfer-statement/" target="_blank" rel="noopener noreferrer">https://mailchimp.com/eu-us-data-transfer-statement/</a> und <a href="https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses" target="_blank" rel="noopener noreferrer">https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses</a>.</p>
              <p>Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die Speicherung in der Blacklist ist zeitlich nicht befristet. <strong>Sie können der Speicherung widersprechen, sofern Ihre Interessen unser berechtigtes Interesse überwiegen.</strong></p>
              <p>Näheres entnehmen Sie den Datenschutzbestimmungen von Mailchimp unter: <a href="https://mailchimp.com/legal/terms/" target="_blank" rel="noopener noreferrer">https://mailchimp.com/legal/terms/</a>.</p>
              <h4>Auftragsverarbeitung</h4>
              <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              <h2>7. Audio- und Videokonferenzen</h2>
              <h4>Datenverarbeitung</h4>
              <p>Für die Kommunikation mit unseren Kunden setzen wir unter anderen Online-Konferenz-Tools ein. Die im Einzelnen von uns genutzten Tools sind unten aufgelistet. Wenn Sie mit uns per Video- oder Audiokonferenz via Internet kommunizieren, werden Ihre personenbezogenen Daten von uns und dem Anbieter des jeweiligen Konferenz-Tools erfasst und verarbeitet.</p>
              <p>Die Konferenz-Tools erfassen dabei alle Daten, die Sie zur Nutzung der Tools bereitstellen/einsetzen (E-Mail-Adresse und/oder Ihre Telefonnummer). Ferner verarbeiten die Konferenz-Tools die Dauer der Konferenz, Beginn und Ende (Zeit) der Teilnahme an der Konferenz, Anzahl der Teilnehmer und sonstige „Kontextinformationen“ im Zusammenhang mit dem Kommunikationsvorgang (Metadaten).</p>
              <p>Des Weiteren verarbeitet der Anbieter des Tools alle technischen Daten, die zur Abwicklung der Online-Kommunikation erforderlich sind. Dies umfasst insbesondere IP-Adressen, MAC-Adressen, Geräte-IDs, Gerätetyp, Betriebssystemtyp und -version, Client-Version, Kameratyp, Mikrofon oder Lautsprecher sowie die Art der Verbindung.</p>
              <p>Sofern innerhalb des Tools Inhalte ausgetauscht, hochgeladen oder in sonstiger Weise bereitgestellt werden, werden diese ebenfalls auf den Servern der Tool-Anbieter gespeichert. Zu solchen Inhalten zählen insbesondere Cloud-Aufzeichnungen, Chat-/ Sofortnachrichten, Voicemails hochgeladene Fotos und Videos, Dateien, Whiteboards und andere Informationen, die während der Nutzung des Dienstes geteilt werden.</p>
              <p>Bitte beachten Sie, dass wir nicht vollumfänglich Einfluss auf die Datenverarbeitungsvorgänge der verwendeten Tools haben. Unsere Möglichkeiten richten sich maßgeblich nach der Unternehmenspolitik des jeweiligen Anbieters. Weitere Hinweise zur Datenverarbeitung durch die Konferenztools entnehmen Sie den Datenschutzerklärungen der jeweils eingesetzten Tools, die wir unter diesem Text aufgeführt haben.</p>
              <h4>Zweck und Rechtsgrundlagen</h4>
              <p>Die Konferenz-Tools werden genutzt, um mit angehenden oder bestehenden Vertragspartnern zu kommunizieren oder bestimmte Leistungen gegenüber unseren Kunden anzubieten (Art. 6 Abs. 1 lit. b DSGVO). Des Weiteren dient der Einsatz der Tools der allgemeinen Vereinfachung und Beschleunigung der Kommunikation mit uns bzw. unserem Unternehmen (berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung abgefragt wurde, erfolgt der Einsatz der betreffenden Tools auf Grundlage dieser Einwilligung; die Einwilligung ist jederzeit mit Wirkung für die Zukunft widerrufbar.</p>
              <h4>Speicherdauer</h4>
              <p>Die unmittelbar von uns über die Video- und Konferenz-Tools erfassten Daten werden von unseren Systemen gelöscht, sobald Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Gespeicherte Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen. Zwingende gesetzliche Aufbewahrungsfristen bleiben unberührt.</p>
              <p>Auf die Speicherdauer Ihrer Daten, die von den Betreibern der Konferenz-Tools zu eigenen Zwecken gespeichert werden, haben wir keinen Einfluss. Für Einzelheiten dazu informieren Sie sich bitte direkt bei den Betreibern der Konferenz-Tools.</p>
              <h4>Eingesetzte Konferenz-Tools</h4>
              <p>Wir setzen folgende Konferenz-Tools ein:</p>
              <h3>Zoom</h3>
              <p>Wir nutzen Zoom. Anbieter dieses Dienstes ist die Zoom Communications Inc., San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA. Details zur Datenverarbeitung entnehmen Sie der Datenschutzerklärung von Zoom: <a href="https://zoom.us/de-de/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/de-de/privacy.html</a>.</p>
              <p>Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://zoom.us/de-de/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/de-de/privacy.html</a>.</p>
              <h4>Auftragsverarbeitung</h4>
              <p>Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem oben genannten Anbieter geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.</p>
              <h2>8. Eigene Dienste</h2>
              <h3>Umgang mit Bewerberdaten</h3>
              <p>Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z.&nbsp;B. per E-Mail, postalisch oder via Online-Bewerberformular). Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit geltendem Datenschutzrecht und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich behandelt werden.</p>
              <h4>Umfang und Zweck der Datenerhebung </h4>
              <p>Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z.&nbsp;B. Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.), soweit dies zur Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG nach deutschem Recht (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an Personen weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.</p>
              <p>Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG und Art. 6 Abs. 1 lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in unseren Datenverarbeitungssystemen gespeichert.</p>
              <h4>Aufbewahrungsdauer der Daten</h4>
              <p>Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen, behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder Zurückziehung der Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht und die physischen Bewerbungsunterlagen vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern ersichtlich ist, dass die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z.&nbsp;B. aufgrund eines drohenden oder anhängigen Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende Aufbewahrung entfällt.</p>
              <p>Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen.</p>
	         </div>
          </Modal>
        )}
      </div>

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

      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default App;
