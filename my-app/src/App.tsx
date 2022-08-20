// import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './App1.css';
import j from "./images/polp.jpg";
import acr from "./images/logo_acr.png"
import { IoIosArrowDown } from "react-icons/io";
import g from "./images/IMG_9844.jpg";
import elsei from "./images/elsevier-logo (2).jpg";
import {Flex, Image, Grid, GridItem, Box , List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,Center} from "@chakra-ui/react"
import { Button, ButtonGroup } from "@chakra-ui/react";
import {script} from "./script"
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React from "react";
// import "./../../../styles/sales.css";
import Header from "./../src/components/pages/sales/sheader"
import About from "./../src/components/pages/sales/about"
import ws from "./../src/images/chapin rodriguez.jpg"
// import Product from "./../src/components/pages/sales/product";
import Footer from "./../src/components/pages/sales/sfooter";
import Comp from "./../src/components/pages/sales/comp";
import Lec from "./../src/components/pages/sales/lecs";
import Ws from "./../src/components/pages/sales/ws";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Cart from "./../src/components/pages/sales/Cart";
// import items from "./../src/components/pages/sales/items";
import  { useState, useEffect, useContext } from 'react';
import timelineElements from "./../src/components/pages/sales/timeline"
// import { Timeline, Bookmark } from 'react-vertical-timeline';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; 
import { Link } from "react-router-dom";
// import shaastraLogo from "./images/Shaastra_logo.png";
import shaastraLogo from "./images/Shaastra 2022 logo White_tr.png";
import { relative } from 'path';

// ../../../images/";

// import { OrderedList,ListItem,Text } from "@chakra-ui/react";
// import {
//   FaPhoneAlt,
//   FaFacebookSquare,
//   FaTwitterSquare,
//   FaInstagram,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaHandPointRight,
//   FaChevronLeft,
//   FaChevronRight,
//   FaYoutube,
//   FaYoutubeSquare,
// } from "react-icons/fa";

function Sales() {

  const [faqs, setFaqs] = React.useState([
    {
      no: 0,
      question: "Where can I register and pay the fees for attending the Symposium?",
      answer:
        "You can fill the Google Form and send your submissions to register for the Symposium. The selected participants will be contacted for a final confirmation to be the part of the Symposium. We do not charge any fees for the competitions and lectures in the Symposium. However, registration for grant writing workshop will involve a minimal charge of Rs. 250.",
    },
    {
      no: 1,
      question: "Can I register for a paper not related to Data Science for this Symposium? Can a paper related to ‘circular economy’ be considered?",
    answer:
        "No, we would be considering only the theme-related i.e. Data Science Abstracts. We encourage (but is not a necessary requirement) papers related to ‘circular economy’ but it should belong to the field of Data Science.",
    },
    {
      no: 2,
      question: "I have submitted only an Abstract so where should I submit the Full Paper now?",
      answer:
        "You have to submit the full paper in the given Google Form. If shortlisted, you can present it to the panelists during the Symposium.",
    },
    {
      no: 3,
      question:
        " Is the Symposium hosted online or offline?",
      answer:
        "The Symposium will be held completely online.",
    },
    {
      no: 4,
      question: "Can I get a written feedback for my submission?",
      answer:
        "Authors can seek feedback from eminent researchers attending the Symposium during the period of Shaastra. We do not provide any feedback before the Symposium.",
    },
    {
      no: 5,
      question: " Can I use the same concepts/paper in more than one competition?",
      answer:
        "Yes, you can represent the same paper in different competition submissions. We will allow single author to participate in more than one competition",
    },

    // {
    //   no: 5,
    //   question: "How much time or effort from my part would be required ?",
    //   answer:
    //     "Not more than 2 hours per week would be required from a Campus Ambassador.",
    // },
  ]);
  const [show, toggleShow] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);
  // const { role } = useContext(AuthContext);

  // script();



  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Data Science Symposium`;
  });
  
  return (
    <BrowserRouter>
        <>
        
        <div>

           {/* <Flex width="20vw" justifyContent="space-between" alignItems="center" className="header-image" padding="1vw" marginLeft="2vw">
          <a href="#landing"><Image src={mtLogo} boxSize="5vw" width="fit-content"></Image></a>
        </Flex> */}

         {/* <Link to="/">
      <img src={shaastraLogo} alt=""  />
    </Link> */}

        {/* <header hidden>
       
        
        <Flex position="fixed" width="-webkit-fill-available" justifyContent="space-around" alignItems="center" padding="1vw 2vw"  className="header-menu">
       
          <a href="#aboutus">ABOUT US</a>
          <a href="#timeli">TIMELINE</a>
          <a href="#features">FEATURED WORKSHOPS AND LECTURES</a>
          <a href="#submit">SUBMIT</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">CONTACT US</a>
        </Flex>
      </header> */}


      </div>
      <Header />

      {/* <div className="imk1">
        <h1>In Association with </h1>
       <img src={elsei} className="img3"></img>
      
       </div> */}
       <img src={acr} className="acr"></img>
       <div className="imk">
       <img src={j} className="img1"></img>
       <img src={g} className="img2"></img>
       </div>

       



       <section id="aboutus" >
       <h1 className="title" id="abt"> About us</h1>
       <About/>
      </section>
      

      
      {/* <section id="aboutus" >
      
      </section>
       */}
     
      

       

   
      
      
       </>
     
       {/* <Link to="/">
      <img src={shaastraLogo} alt=""  />
    </Link> */}

  {/* <Button colorScheme="teal" variant="solid" size="lg">
    Button
  </Button> */}

{/* <style>

</style> */}

<section id="lecs" >
      
      <div className="features" style={{
        // backgroundColor:""
      }}  >

        <h1 className="title">Keynote Lectures</h1>
        <section id="comp" >
        <Lec/>
        <h1 className="titl">The Keynote Lecture will be live at (Virtual) ICSR Auditoriums at <a href='https://www.shaastra2022.com/'className='ati' target={'_blank'}>www.shaastra2022.com</a> You can also catch the talk live on <a href='https://www.youtube.com/channel/UCgY2ugmW-BV2nMRFu-0qPZA'className='ati' target={'_blank'}>Shaastra's Youtube channel</a> </h1>

        </section>
        {/* <UnorderedList>
  <ListItem>Grant writing workshop
</ListItem>
  <ListItem>Workshop by Elsevier
</ListItem>
  
</UnorderedList> */}
        {/* <h1 className="titl">1.Grant writing workshop</h1>
        <h1 className="titl">2.Workshop by Elsevier</h1> */}
       


        </div>
        </section>


   <section id="comp" >
  
        <Comp/>
        </section>

<section id="features" >
      
      <div className="features">

        <h1 className="title">Featured Workshops</h1>
       
        
       
        {/* <UnorderedList>
  <ListItem>Grant writing workshop
</ListItem>
  <ListItem>Workshop by Elsevier
</ListItem>
  
</UnorderedList> */}
   
        {/* <h1 className="titl"></h1>
        <h1 className="titl">2.Workshop by Elsevier</h1> */}
        <a href='https://www.shaastra.org/eventpage/ckxljoxqa00639bp7gu9o1sz9' target={'_blank'}><h1  className="titlr">1.Grant writing workshop by A.Chapin Rodríguez</h1></a>
        <text className='limitedseat'>Limited seats available</text>
        <div className='wsdiv'>
       
        <text className='wstext'>This workshop will cover some of the most important challenges that you face when trying to fund your research and your career. Through exploration of theory and examples, this workshop aims to help participants develop a competitive research plan (operationalizing research questions, aligning goals and work packages into a coherent story), structure the research project in a more ​“fundable” way (feasibility, milestones, contingency plans, preliminary data), write clearly and convincingly (through visualizability and "opportune repetition"), and present oneself powerfully as an independent researcher. The challenges and strategies that we discuss can help participants not only with funding or fellowship applications, but also with job interviews.

</text>
<img className="wsimg" src={ws}></img>
        <text className='wstext'>He has obtained his BSc in chemistry and biochemistry from Duke University (US) and his PhD in cellular, molecular and structural biology from Cambridge University (UK). 
He carried out postdoctoral research in molecular neuroscience at the Harvard Institutes of Medicine (US).

 He has obtained research funding from the British Marshall Commission, the Howard Hughes Medical Institute, UK Medical Research Council, and US National Institutes of Health.

 Through his company (www.creaducate.eu), he helps researchers in natural and clinical sciences publish their manuscripts in peer-reviewed journals, prepare grant applications and improve their oral presentation skills.

 He has been helping many Indian researchers on their grant writing through webinars jointly organized by the European Molecular Biology Organization and IndiaBiosciences.
 </text>
        </div>
       


        </div>
        {/* <section id="comp" >
        <Ws/>
        </section> */}
        </section>

      

     


{/* <button className="submit">Button</button> */}
<section id="timeli" >
      
     
       <h1 className="title" id="abt">  Timeline</h1>
    
    <VerticalTimeline>{timelineElements.map(element => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>


              
    
              {/* <div className="paperdiv">
              <a id="description" target="_blank"className="paperi" href={element.description}>{element.icon}</a>
              </div>  */}
            </VerticalTimelineElement>
          )
        })}</VerticalTimeline>

        </section>




        <section id="submit" >
{/* <div className="submit">
    <a target="_blank"className="linki" href=" https://forms.gle/2r6HyhvLsv8HXTEL8" >
        Submit
    </a>
  </div> */}
      
      </section>
        

        <section id="faq" >
      
      

        <div className="faq">
        <h1>Frequently Asked Questions</h1>
        {faqs.map((faq) => {
          return (
            <div
              className="question"
              onClick={() => {
                let index = 0;
                toggleShow(
                  show.map((s) => {
                    if (faq.no == index++) {
                      return !show[faq.no];
                    } else return s;
                  })
                );
              }}
            >
              <span className="top">
                <h3>{faq.question}</h3>
                <span
                  style={
                    show[faq.no]
                      ? {
                          transform: "rotate(-90deg)",
                          transition: "0.5s",
                        }
                      : {
                          transform: "rotate(0deg)",
                          transition: "0.5s",
                        }
                  }
                  className="down-arrow"
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <span
                style={
                  show[faq.no]
                    ? {
                        height: "max-content",
                        paddingTop: "15px",
                      }
                    : {
                        height: "0px",
                        paddingTop: "0px",
                      }
                }
                className="panel"
              >
                <p>{faq.answer}</p>
              </span>
            </div>
          );
        })}
      </div>
      </section>

        {/* <section style={{position:"relative"}}>
        <div className="custom-shape-divider-top-1634008045">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div> */}

<section id="contact" >
<Footer/>
      </section>


           {/* </section> */}
        
     
       
    </BrowserRouter>
  );
}

export default Sales;
