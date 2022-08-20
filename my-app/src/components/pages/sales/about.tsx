import React from "react";
import { Text , useBreakpointValue} from "@chakra-ui/react"
import { SimpleGrid , Box} from "@chakra-ui/react"
import './../../../styles/about.css';


function About(){
    // const wd = useBreakpointValue({ base: "max-content", md: "120px" });
    return(

        <div>
            <SimpleGrid minChildWidth="max-content" spacing="40px" padding="30px" >
  <Box bg="#010440" color="#3da3d5" borderRadius="10px"><p className="kok">Shaastra is the techno-managerial fest of the IIT Madras. Shaastra 2021 saw a footfall of more than 50,000 and is one of the most popular inter-college fests in Asia. It is the first completely student-managed fest in the world to be awarded the ISO 9001:2008 certification, a reflection of our enthusiasm and passion to guarantee high standards of quality. 
</p></Box>

<Box bg="#010440" color="#3da3d5" borderRadius="10px"><p className="kok">We are presenting to you a Data Science Symposium on the exciting and highly interdisciplinary field of Data Science! Research in AI ML algorithms with topics including but not limited to machine learning, deep learning, systems identification, deep reinforcement learning, natural language processing, big data engineering, automation and a lot many with applications in varied fields like pattern recognition, robotics, etc. With eminent researchers as keynote speakers and panelists, Industry talks by the world leaders in this field, and workshops by noted companies and journals, we are bound to enrich you. So, if you have interesting results you would want to share with the world, look no further!</p></Box>
  {/* <Box bg="tomato" fontSize="1.5em" borderRadius="10px"><p className="kok"> </p></Box> */}
  {/* <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box>
  <Box bg="tomato" height="80px"></Box> */}
</SimpleGrid>
            {/* <Text></Text> */}
            
        </div>
    );

}

export default About;