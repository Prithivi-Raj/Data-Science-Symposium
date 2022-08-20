import * as React from 'react'
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";
import './../../../styles/sfooter.css';
import { Flex,Box,SimpleGrid } from "@chakra-ui/react"

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className="footer">
        <h2 className="foot-heading">CONTACT US</h2>
        {/* <SimpleGrid minChildWidth="min-content" spacing="40px" padding="30px" >
  <Box bg="tomato" fontSize="1.5em" borderRadius="10px"><p className="kol"> <h3>S Vishal</h3>
              <p>+91 94988 13221</p></p></Box>
  <Box bg="tomato" fontSize="1.5em" borderRadius="10px"><p className="kol"><h3>Aniswar</h3>
              <p>+91 63833 93474</p></p></Box>
  <Box bg="tomato" fontSize="1.5em" borderRadius="10px"><p className="kol"> <h3>Prateek</h3>
              <p>+91 73817 32333</p></p></Box>
  
</SimpleGrid> */}
        <Flex  justifyContent="space-between" alignItems="center" className="poc">
            <div>
              <h3>Vishal</h3>
              <p>+91 94988 13221</p>
            </div>
            <div>
              <h3>Aniswar</h3>
              <p>+91 63833 93474</p>
            </div> 
            <div>
              <h3>Prateek</h3>
              <p>+91 73817 32333</p>
            </div>
          </Flex>
        <div className="social-ctn">
           <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank" rel="noreferrer" ><FontAwesomeIcon size="4x" icon={faInstagram} className="social-icon" /></a>
           <a href="https://www.facebook.com/Shaastra/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="4x" className="social-icon" ></FontAwesomeIcon></a>
           <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank" rel="noreferrer"><FontAwesomeIcon size="4x" icon={faLinkedin} className="social-icon" ></FontAwesomeIcon></a>
        </div>
        <div className="footer-text">
            <p className="sec-text">Shaastra 2022  ©  All Rights Reserved</p>
            <p className="sec-text">DEVELOPED BY PRITHIVIRAJ | SHAASTRA WEBOPS 2021-22</p>
        </div>
    </div>

//         <div className ="custom-shape-divider-top-1633799610">
//     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
//         <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"> 
// </path>
//     </svg>
// </div>
     
    )
}

export default Footer