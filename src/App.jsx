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
import sendMessage from './assets/sendMessage.png'

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
                    <p className="fontBold">red onion GmbH</p>
                    <p>Alexanderstraße 7</p>
                    <p>10178 Berlin</p>
                    <p className="pt-2"><a href="tel: +49 (0)30 7262 675 0" className="hoverpadding">+49 (0)30 7262 675 0</a></p>
                    <p><a href="mailto:info@redonion.de" className="hoverpadding">info@redonion.de</a></p>
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
          <div className="boxInner">
            <div className="backgroundPart" />
            <div className="sectionInner" >
              <div className="sectionDescription">
                <div className="descriptionInner">
                  <div className="whiteBox" style={{ transform: `${activeIndex === 0 ? 'translate(0%, 0%)' : 'translate(100%, 0%)'}` }}>
                    <p className="mainText">„Europe should stop thinking of Africa as a charity case.<br />It is a business case!“</p>
                    <p className="authorInfo">Dr. Obiageli „Oby“ Ezekwesili<br />Richard von Weizäcker Fellow of Robert Bosch Academy at the GP Circle Dinner „Governance on Africa, 2020</p>
                  </div>
                </div>
              </div>
              <div className="mapInfo" style={{ transform: `${activeIndex === 0 ? 'translate(0%, 0%)' : 'translate(0%, 150%)'}` }}>
                <img src={fifthImage} />
              </div>
            </div>
          </div>
        </div>
        <div className="secondSection imageBoxSection">
          <div className="bgImage" style={{ backgroundImage: `url(${secondImage})` }} />
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
                <p className="mapTitle">Subsahara-Afrika <span className="green">49</span> Länder<br /> südlich der Sahara</p>
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
                    <p className="subText">Es ist Zeit, das Bild von Subsahara-Afrika zu verbessern!<br />Wir freuen uns über den Austausch mit Ihnen.</p>
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
                <p className="authorInfo">Stephan Balzer<br />Projektpartner</p>
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
              slidesPerView={4}
              spaceBetween={10}
              loop={true}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              className="sponsorSlider"
            >
              {brandLogos.map((logo, index) => (
                <SwiperSlide key={index}>
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
          		<h1>Site Notice</h1>
          		<h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
              <p>red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Commercial Register: HRB 73786<br />
              Registration court: Amtsgericht Berlin-Charlottenburg</p>
              <p><strong>Represented by:</strong><br />
              Stephan Balzer</p>
              <h2>Contact</h2>
              <p>Phone: +49 (0)30 7262 675 0<br />
              Telefax: +49 (0)30 7262 675 20<br />
              E-mail: info@redonion.de</p>
              <h2>VAT ID</h2>
              <p>Sales tax identification number according to Sect. 27 a of the Sales Tax Law:<br />
              DE812866010</p>
              <h2>Person responsible for editorial</h2>
              <p>Stephan Balzer<br />
              red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>&nbsp;</p>
              <h2>Website Design</h2>
              <p><a href="https://haubrok.co/" target="_blank" rel="noopener">Konstantin Haubrok</a></p>
              <h2>Programming</h2>
              <p><a href="https://wrklst.art" target="_blank" rel="noopener">Tobias Vielmetter-Diekmann —&nbsp;WL Artworld Solutions UG (haftungsbeschränkt)</a></p>
              <p>&nbsp;</p>
              <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2>
              <p>We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>
              <h3>Liability for Contents</h3>
              <p>As service providers, we are liable for own contents of these websites according to Paragraph 7, Sect. 1 German Telemedia Act (TMG). However, according to Paragraphs 8 to 10 German Telemedia Act (TMG), service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.</p>
              <p>Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.</p>
              <h3>Liability for Links</h3>
              <p>Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.</p>
              <p>The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.</p>
              <h3>Copyright</h3>
              <p>Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.<br />
              The commercial use of our contents without permission of the originator is prohibited.</p>
              <p>Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.</p>
            </div>
          </Modal>
        )}

        {modal2Open && (
          <Modal onClose={() => {setModal2Open(false);setIsModalOpen(false)}}>
            <div>
          		<h1>Privacy Policy</h1>
          		<h2>1. An overview of data protection</h2>
              <h3>General information</h3>
              <p>The following information will provide you with an easy to navigate overview of what will happen with your personal data when you visit this website. The term “personal data” comprises all data that can be used to personally identify you. For detailed information about the subject matter of data protection, please consult our Data Protection Declaration, which we have included beneath this copy.</p>
              <h3>Data recording on this website</h3>
              <h4>Who is the responsible party for the recording of data on this website (i.e., the “controller”)?</h4>
              <p>The data on this website is processed by the operator of the website, whose contact information is available under section “Information about the responsible party (referred to as the “controller” in the GDPR)” in this Privacy Policy.</p>
              <h4>How do we record your data?</h4>
              <p>We collect your data as a result of your sharing of your data with us. This may, for instance be information you enter into our contact form.</p>
              <p>Other data shall be recorded by our IT systems automatically or after you consent to its recording during your website visit. This data comprises primarily technical information (e.g., web browser, operating system, or time the site was accessed). This information is recorded automatically when you access this website.</p>
              <h4>What are the purposes we use your data for?</h4>
              <p>A portion of the information is generated to guarantee the error free provision of the website. Other data may be used to analyze your user patterns.</p>
              <h4>What rights do you have as far as your information is concerned?</h4>
              <p>You have the right to receive information about the source, recipients, and purposes of your archived personal data at any time without having to pay a fee for such disclosures. You also have the right to demand that your data are rectified or eradicated. If you have consented to data processing, you have the option to revoke this consent at any time, which shall affect all future data processing. Moreover, you have the right to demand that the processing of your data be restricted under certain circumstances. Furthermore, you have the right to log a complaint with the competent supervising agency.</p>
              <p>Please do not hesitate to contact us at any time if you have questions about this or any other data protection related issues.</p>
              <h3>Analysis tools and tools provided by third parties</h3>
              <p>There is a possibility that your browsing patterns will be statistically analyzed when your visit this website. Such analyses are performed primarily with what we refer to as analysis programs.</p>
              <p>For detailed information about these analysis programs please consult our Data Protection Declaration below.</p>
              <h2>2. Hosting</h2>
              <h3>IONOS</h3>
              <p>We host our website with IONOS SE. The provider is IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany (hereinafter referred to as: IONOS). Whenever you visit our website, IONOS records various logfiles along with your IP addresses. For details, please consult the data privacy policy of IONOS: <a href="https://www.ionos.de/terms-gtc/terms-privacy" target="_blank" rel="noopener noreferrer">https://www.ionos.de/terms-gtc/terms-privacy</a>.</p>
              <p>We use IONOS on the basis of Art. 6 (1)(f) GDPR. Our company has a legitimate interest in presenting a website that is as dependable as possible. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user’s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.</p>
              <h4>Data processing</h4>
              <p>We have concluded a data processing agreement (DPA) with the above-mentioned provider. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.</p>
              <h2>3. General information and mandatory information</h2>
              <h3>Data protection</h3>
              <p>The operators of this website and its pages take the protection of your personal data very seriously. Hence, we handle your personal data as confidential information and in compliance with the statutory data protection regulations and this Data Protection Declaration.</p>
              <p>Whenever you use this website, a variety of personal information will be collected. Personal data comprises data that can be used to personally identify you. This Data Protection Declaration explains which data we collect as well as the purposes we use this data for. It also explains how, and for which purpose the information is collected.</p>
              <p>We herewith advise you that the transmission of data via the Internet (i.e., through e-mail communications) may be prone to security gaps. It is not possible to completely protect data against third-party access.</p>
              <h3>Information about the responsible party (referred to as the “controller” in the GDPR)</h3>
              <p>The data processing controller on this website is:</p>
              <p>red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Phone: +49 (0)30 7262 675 0<br />
              E-mail: [E-Mail-Adresse der verantwortlichen Stelle]</p>
              <p>The controller is the natural person or legal entity that single-handedly or jointly with others makes decisions as to the purposes of and resources for the processing of personal data (e.g., names, e-mail addresses, etc.).</p>
              <h3>Storage duration</h3>
              <p>Unless a more specific storage period has been specified in this privacy policy, your personal data will remain with us until the purpose for which it was collected no longer applies. If you assert a justified request for deletion or revoke your consent to data processing, your data will be deleted, unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, the deletion will take place after these reasons cease to apply.</p>
              <h3>General information on the legal basis for the data processing on this website</h3>
              <p>If you have consented to data processing, we process your personal data on the basis of Art. 6(1)(a) GDPR or Art. 9 (2)(a) GDPR, if special categories of data are processed according to Art. 9 (1) DSGVO. In the case of explicit consent to the transfer of personal data to third countries, the data processing is also based on Art. 49 (1)(a) GDPR. If you have consented to the storage of cookies or to the access to information in your end device (e.g., via device fingerprinting), the data processing is additionally based on § 25 (1) TTDSG. The consent can be revoked at any time. If your data is required for the fulfillment of a contract or for the implementation of pre-contractual measures, we process your data on the basis of Art. 6(1)(b) GDPR. Furthermore, if your data is required for the fulfillment of a legal obligation, we process it on the basis of Art. 6(1)(c) GDPR. Furthermore, the data processing may be carried out on the basis of our legitimate interest according to Art. 6(1)(f) GDPR. Information on the relevant legal basis in each individual case is provided in the following paragraphs of this privacy policy.</p>
              <h3>Designation of a data protection officer</h3>
              <p>We have appointed a data protection officer.</p>
              <p>Nina Zoubek<br />
              red onion GmbH<br />
              Alexanderstraße 7<br />
              10178 Berlin</p>
              <p>Phone: +49 (0)30 7262 675 0<br />
              E-mail: n.zoubek@redonion.de</p>
              <h3>Information on data transfer to the USA and other non-EU countries</h3>
              <p>Among other things, we use tools of companies domiciled in the United States or other from a data protection perspective non-secure non-EU countries. If these tools are active, your personal data may potentially be transferred to these non-EU countries and may be processed there. We must point out that in these countries, a data protection level that is comparable to that in the EU cannot be guaranteed. For instance, U.S. enterprises are under a mandate to release personal data to the security agencies and you as the data subject do not have any litigation options to defend yourself in court. Hence, it cannot be ruled out that U.S. agencies (e.g., the Secret Service) may process, analyze, and permanently archive your personal data for surveillance purposes. We have no control over these processing activities.</p>
              <h3>Revocation of your consent to the processing of data</h3>
              <p>A wide range of data processing transactions are possible only subject to your express consent. You can also revoke at any time any consent you have already given us. This shall be without prejudice to the lawfulness of any data collection that occurred prior to your revocation.</p>
              <h3>Right to object to the collection of data in special cases; right to object to direct advertising (Art. 21 GDPR)</h3>
              <p>IN THE EVENT THAT DATA ARE PROCESSED ON THE BASIS OF ART. 6(1)(E) OR (F) GDPR, YOU HAVE THE RIGHT TO AT ANY TIME OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA BASED ON GROUNDS ARISING FROM YOUR UNIQUE SITUATION. THIS ALSO APPLIES TO ANY PROFILING BASED ON THESE PROVISIONS. TO DETERMINE THE LEGAL BASIS, ON WHICH ANY PROCESSING OF DATA IS BASED, PLEASE CONSULT THIS DATA PROTECTION DECLARATION. IF YOU LOG AN OBJECTION, WE WILL NO LONGER PROCESS YOUR AFFECTED PERSONAL DATA, UNLESS WE ARE IN A POSITION TO PRESENT COMPELLING PROTECTION WORTHY GROUNDS FOR THE PROCESSING OF YOUR DATA, THAT OUTWEIGH YOUR INTERESTS, RIGHTS AND FREEDOMS OR IF THE PURPOSE OF THE PROCESSING IS THE CLAIMING, EXERCISING OR DEFENCE OF LEGAL ENTITLEMENTS (OBJECTION PURSUANT TO ART. 21(1) GDPR).</p>
              <p>IF YOUR PERSONAL DATA IS BEING PROCESSED IN ORDER TO ENGAGE IN DIRECT ADVERTISING, YOU HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR AFFECTED PERSONAL DATA FOR THE PURPOSES OF SUCH ADVERTISING AT ANY TIME. THIS ALSO APPLIES TO PROFILING TO THE EXTENT THAT IT IS AFFILIATED WITH SUCH DIRECT ADVERTISING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO LONGER BE USED FOR DIRECT ADVERTISING PURPOSES (OBJECTION PURSUANT TO ART. 21(2) GDPR).</p>
              <h3>Right to log a complaint with the competent supervisory agency</h3>
              <p>In the event of violations of the GDPR, data subjects are entitled to log a complaint with a supervisory agency, in particular in the member state where they usually maintain their domicile, place of work or at the place where the alleged violation occurred. The right to log a complaint is in effect regardless of any other administrative or court proceedings available as legal recourses.</p>
              <h3>Right to data portability</h3>
              <p>You have the right to demand that we hand over any data we automatically process on the basis of your consent or in order to fulfil a contract be handed over to you or a third party in a commonly used, machine readable format. If you should demand the direct transfer of the data to another controller, this will be done only if it is technically feasible.</p>
              <h3>Information about, rectification and eradication of data</h3>
              <p>Within the scope of the applicable statutory provisions, you have the right to at any time demand information about your archived personal data, their source and recipients as well as the purpose of the processing of your data. You may also have a right to have your data rectified or eradicated. If you have questions about this subject matter or any other questions about personal data, please do not hesitate to contact us at any time.</p>
              <h3>Right to demand processing restrictions</h3>
              <p>You have the right to demand the imposition of restrictions as far as the processing of your personal data is concerned. To do so, you may contact us at any time. The right to demand restriction of processing applies in the following cases:</p>
              <ul>
              <li>In the event that you should dispute the correctness of your data archived by us, we will usually need some time to verify this claim. During the time that this investigation is ongoing, you have the right to demand that we restrict the processing of your personal data.</li>
              <li>If the processing of your personal data was/is conducted in an unlawful manner, you have the option to demand the restriction of the processing of your data in lieu of demanding the eradication of this data.</li>
              <li>If we do not need your personal data any longer and you need it to exercise, defend or claim legal entitlements, you have the right to demand the restriction of the processing of your personal data instead of its eradication.</li>
              <li>If you have raised an objection pursuant to Art. 21(1) GDPR, your rights and our rights will have to be weighed against each other. As long as it has not been determined whose interests prevail, you have the right to demand a restriction of the processing of your personal data.</li>
              </ul>
              <p>If you have restricted the processing of your personal data, these data – with the exception of their archiving – may be processed only subject to your consent or to claim, exercise or defend legal entitlements or to protect the rights of other natural persons or legal entities or for important public interest reasons cited by the European Union or a member state of the EU.</p>
              <h3>SSL and/or TLS encryption</h3>
              <p>For security reasons and to protect the transmission of confidential content, such as purchase orders or inquiries you submit to us as the website operator, this website uses either an SSL or a TLS encryption program. You can recognize an encrypted connection by checking whether the address line of the browser switches from “http://” to “https://” and also by the appearance of the lock icon in the browser line.</p>
              <p>If the SSL or TLS encryption is activated, data you transmit to us cannot be read by third parties.</p>
              <h2>4. Recording of data on this website</h2>
              <h3>Server log files</h3>
              <p>The provider of this website and its pages automatically collects and stores information in so-called server log files, which your browser communicates to us automatically. The information comprises:</p>
              <ul>
              <li>The type and version of browser used</li>
              <li>The used operating system</li>
              <li>Referrer URL</li>
              <li>The hostname of the accessing computer</li>
              <li>The time of the server inquiry</li>
              <li>The IP address</li>
              </ul>
              <p>This data is not merged with other data sources.</p>
              <p>This data is recorded on the basis of Art. 6(1)(f) GDPR. The operator of the website has a legitimate interest in the technically error free depiction and the optimization of the operator’s website. In order to achieve this, server log files must be recorded.</p>
              <h3>Request by e-mail, telephone, or fax</h3>
              <p>If you contact us by e-mail, telephone or fax, your request, including all resulting personal data (name, request) will be stored and processed by us for the purpose of processing your request. We do not pass these data on without your consent.</p>
              <p>These data are processed on the basis of Art. 6(1)(b) GDPR if your inquiry is related to the fulfillment of a contract or is required for the performance of pre-contractual measures. In all other cases, the data are processed on the basis of our legitimate interest in the effective handling of inquiries submitted to us (Art. 6(1)(f) GDPR) or on the basis of your consent (Art. 6(1)(a) GDPR) if it has been obtained; the consent can be revoked at any time.</p>
              <p>The data sent by you to us via contact requests remain with us until you request us to delete, revoke your consent to the storage or the purpose for the data storage lapses (e.g. after completion of your request). Mandatory statutory provisions – in particular statutory retention periods – remain unaffected.</p>
              <h2>5. Analysis tools and advertising</h2>
              <h3>Matomo</h3>
              <p>This website uses the open-source web analysis service Matomo.</p>
              <p>Through Matomo, we are able to collect and analyze data on the use of our website-by-website visitors. This enables us to find out, for instance, when which page views occurred and from which region they came. In addition, we collect various log files (e.g. IP address, referrer, browser, and operating system used) and can measure whether our website visitors perform certain actions (e.g. clicks, purchases, etc.).</p>
              <p>The use of this analysis tool is based on Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the analysis of user patterns, in order to optimize the operator’s web offerings and advertising. If appropriate consent has been obtained, the processing is carried out exclusively on the basis of Art. 6(1)(a) GDPR and § 25 (1) TTDSG, insofar the consent includes the storage of cookies or the access to information in the user’s end device (e.g., device fingerprinting) within the meaning of the TTDSG. This consent can be revoked at any time.</p>
              <h4>IP anonymization</h4>
              <p>For analysis with Matomo we use IP anonymization. Your IP address is shortened before the analysis, so that it is no longer clearly assignable to you.</p>
              <h4>Analysis without cookies</h4>
              <p>We have configured Matomo in such a way that Matomo will not store cookies in your browser.</p>
              <h4>Hosting</h4>
              <p>We host Matomo with the following third-party provider:</p>
              <p>1&amp;1 IONOS SE<br />
              Elgendorfer Straße 57<br />
              56410 Montabaur</p>
              <h4>Data processing</h4>
              <p>We have concluded a data processing agreement (DPA) with the above-mentioned provider. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.</p>
              <h2>6. Newsletter</h2>
              <h3>Newsletter data</h3>
              <p>If you would like to receive the newsletter offered on the website, we require an e-mail address from you as well as information that allows us to verify that you are the owner of the e-mail address provided and that you agree to receive the newsletter. Further data is not collected or only on a voluntary basis. For the handling of the newsletter, we use newsletter service providers, which are described below.</p>
              <h3>Mailchimp</h3>
              <p>This website uses the services of Mailchimp to send out its newsletters. The provider is the Rocket Science Group LLC, 675 Ponce De Leon Ave NE, Suite 5000, Atlanta, GA 30308, USA.</p>
              <p>Among other things, Mailchimp is a service that can be deployed to organize and analyze the sending of newsletters. Whenever you enter data for the purpose of subscribing to a newsletter (e.g. your e-mail address), the information is stored on Mailchimp servers in the United States.</p>
              <p>With the assistance of the Mailchimp tool, we can analyze the performance of our newsletter campaigns. If you open an e-mail that has been sent through the Mailchimp tool, a file that has been integrated into the e-mail (a so-called web-beacon) connects to Mailchimp’s servers in the United States. As a result, it can be determined whether a newsletter message has been opened and which links the recipient possibly clicked on. Technical information is also recorded at that time (e.g. the time of access, the IP address, type of browser and operating system). This information cannot be allocated to the respective newsletter recipient. Their sole purpose is the performance of statistical analyses of newsletter campaigns. The results of such analyses can be used to tailor future newsletters to the interests of their recipients more effectively.</p>
              <p>If you do not want to permit an analysis by Mailchimp, you must unsubscribe from the newsletter. We provide a link for you to do this in every newsletter message.</p>
              <p>The data is processed based on your consent (Art. 6(1)(a) GDPR). You may revoke any consent you have given at any time by unsubscribing from the newsletter. This shall be without prejudice to the lawfulness of any data processing transactions that have taken place prior to your revocation.</p>
              <p>The data deposited with us for the purpose of subscribing to the newsletter will be stored by us until you unsubscribe from the newsletter or the newsletter service provider and deleted from the newsletter distribution list after you unsubscribe from the newsletter. Data stored for other purposes with us remain unaffected.</p>
              <p>Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://mailchimp.com/eu-us-data-transfer-statement/" target="_blank" rel="noopener noreferrer">https://mailchimp.com/eu-us-data-transfer-statement/</a> and <a href="https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses" target="_blank" rel="noopener noreferrer">https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-_Standard_Contractual_Clauses</a>.</p>
              <p>After you unsubscribe from the newsletter distribution list, your e-mail address may be stored by us or the newsletter service provider in a blacklist, if such action is necessary to prevent future mailings. The data from the blacklist is used only for this purpose and not merged with other data. This serves both your interest and our interest in complying with the legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6(1)(f) GDPR). The storage in the blacklist is indefinite. <strong>You may object to the storage if your interests outweigh our legitimate interest.</strong></p>
              <p>For more details, please consult the Data Privacy Policies of Mailchimp at: <a href="https://mailchimp.com/legal/terms/" target="_blank" rel="noopener noreferrer">https://mailchimp.com/legal/terms/</a>.</p>
              <h4>Data processing</h4>
              <p>We have concluded a data processing agreement (DPA) with the above-mentioned provider. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.</p>
              <h2>7. Online-based Audio and Video Conferences (Conference tools)</h2>
              <h4>Data processing</h4>
              <p>We use online conference tools, among other things, for communication with our customers. The tools we use are listed in detail below. If you communicate with us by video or audio conference using the Internet, your personal data will be collected and processed by the provider of the respective conference tool and by us. The conferencing tools collect all information that you provide/access to use the tools (email address and/or your phone number). Furthermore, the conference tools process the duration of the conference, start and end (time) of participation in the conference, number of participants and other “context information” related to the communication process (metadata).</p>
              <p>Furthermore, the provider of the tool processes all the technical data required for the processing of the online communication. This includes, in particular, IP addresses, MAC addresses, device IDs, device type, operating system type and version, client version, camera type, microphone or loudspeaker and the type of connection.</p>
              <p>Should content be exchanged, uploaded, or otherwise made available within the tool, it is also stored on the servers of the tool provider. Such content includes, but is not limited to, cloud recordings, chat/ instant messages, voicemail uploaded photos and videos, files, whiteboards, and other information shared while using the service.</p>
              <p>Please note that we do not have complete influence on the data processing procedures of the tools used. Our possibilities are largely determined by the corporate policy of the respective provider. Further information on data processing by the conference tools can be found in the data protection declarations of the tools used, and which we have listed below this text.</p>
              <h4>Purpose and legal bases</h4>
              <p>The conference tools are used to communicate with prospective or existing contractual partners or to offer certain services to our customers (Art. 6(1)(b) GDPR). Furthermore, the use of the tools serves to generally simplify and accelerate communication with us or our company (legitimate interest in the meaning of Art. 6(1)(f) GDPR). Insofar as consent has been requested, the tools in question will be used on the basis of this consent; the consent may be revoked at any time with effect from that date.</p>
              <h4>Duration of storage</h4>
              <p>Data collected directly by us via the video and conference tools will be deleted from our systems immediately after you request us to delete it, revoke your consent to storage, or the reason for storing the data no longer applies. Stored cookies remain on your end device until you delete them. Mandatory legal retention periods remain unaffected.</p>
              <p>We have no influence on the duration of storage of your data that is stored by the operators of the conference tools for their own purposes. For details, please directly contact the operators of the conference tools.</p>
              <h4>Conference tools used</h4>
              <p>We employ the following conference tools:</p>
              <h3>Zoom</h3>
              <p>We use Zoom. The provider of this service is Zoom Communications Inc, San Jose, 55 Almaden Boulevard, 6th Floor, San Jose, CA 95113, USA. For details on data processing, please refer to Zoom’s privacy policy: <a href="https://zoom.us/en-us/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/en-us/privacy.html</a>.</p>
              <p>Data transmission to the US is based on the Standard Contractual Clauses (SCC) of the European Commission. Details can be found here: <a href="https://zoom.us/de-de/privacy.html" target="_blank" rel="noopener noreferrer">https://zoom.us/de-de/privacy.html</a>.</p>
              <h4>Data processing</h4>
              <p>We have concluded a data processing agreement (DPA) with the above-mentioned provider. This is a contract mandated by data privacy laws that guarantees that they process personal data of our website visitors only based on our instructions and in compliance with the GDPR.</p>
              <h2>8. Custom Services</h2>
              <h3>Handling applicant data</h3>
              <p>We offer website visitors the opportunity to submit job applications to us (e.g., via e-mail, via postal services on by submitting the online job application form). Below, we will brief you on the scope, purpose and use of the personal data collected from you in conjunction with the application process. We assure you that the collection, processing, and use of your data will occur in compliance with the applicable data privacy rights and all other statutory provisions and that your data will always be treated as strictly confidential.</p>
              <h4>Scope and purpose of the collection of data</h4>
              <p>If you submit a job application to us, we will process any affiliated personal data (e.g., contact and communications data, application documents, notes taken during job interviews, etc.), if they are required to make a decision concerning the establishment or an employment relationship. The legal grounds for the aforementioned are § 26 BDSG according to German Law (Negotiation of an Employment Relationship), Art. 6(1)(b) GDPR (General Contract Negotiations) and – provided you have given us your consent – Art. 6(1)(a) GDPR. You may revoke any consent given at any time. Within our company, your personal data will only be shared with individuals who are involved in the processing of your job application.</p>
              <p>If your job application should result in your recruitment, the data you have submitted will be archived on the grounds of § 26 BDSG and Art. 6(1)(b) GDPR for the purpose of implementing the employment relationship in our data processing system.</p>
              <h4>Data Archiving Period</h4>
              <p>If we are unable to make you a job offer or you reject a job offer or withdraw your application, we reserve the right to retain the data you have submitted on the basis of our legitimate interests (Art. 6(1)(f) GDPR) for up to 6 months from the end of the application procedure (rejection or withdrawal of the application). Afterwards the data will be deleted, and the physical application documents will be destroyed. The storage serves in particular as evidence in the event of a legal dispute. If it is evident that the data will be required after the expiry of the 6-month period (e.g., due to an impending or pending legal dispute), deletion will only take place when the purpose for further storage no longer applies.</p>
              <p>Longer storage may also take place if you have given your agreement (Article 6(1)(a) GDPR) or if statutory data retention requirements preclude the deletion.</p>
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
