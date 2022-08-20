// import EXHB1 from "../../../images/Exhibitions/exhb_1.png";
// import EXHB3 from "../../../images/Exhibitions/exhb_3.png";
// import EXHB4 from "../../../images/Exhibitions/exhb_4.png";
// import EXHB5 from "../../../images/Exhibitions/exhb_5.png";
// import EXHB6 from "../../../images/Exhibitions/exhb_6.png";
// import EXHB7 from "../../../images/Exhibitions/exhb_7.png";
// import EXHB8 from "../../../images/Exhibitions/exhb_8.png";
// import EXHB9 from "../../../images/Exhibitions/exhb_9.png";
// import EXHB10 from "../../../images/Exhibitions/exhb_10.png";
// import EXHB11 from "../../../images/Exhibitions/exhb_11.png";
// import EXHB12 from "../../../images/Exhibitions/exhb_12.png";
// import EXHB13 from "../../../images/Exhibitions/exhb_13.png";

import avisek from "./../../../images/avisek lahiri.jpg";
import amit from "./../../../images/amit goyal.jpg";
import isable from "./../../../images/isabel pe.jpg";
import ragu from "./../../../images/raghunathan rangeswamy.jpg";
import shourya from "./../../../images/shourya roy.jpg";
import sriram from "./../../../images/sriram natarajan.jpg"
// import isable from "./../../../images/isabel pe.jpg";

export const CauroselImages = [avisek,amit,isable,ragu,shourya];

export const Titlevariants = {
  lhidden:{
    x: "-100vw" 
  },
  final : {
    x: 0,
    transition:{
      duration : "1",
    }
  },
  
}

export const AboutusVariants = {
  hidden : {
    opacity : 0
  },
  visible : {
    opacity : 1,
    transition:{
      duration : "2",
      delay : 1
    }
  }

}

export const AboutusData = `Shaastra Exhibitions is a platform to showcase cutting Edge technology.
Exhibitions provide an opportunity for a large number of buyers and sellers in an industry to interact with
each other.
They are responsible for conveying the ideas of the participants from a 
 technologically practical perspective and as well as give the audience a 
 glimpse into the  latest developments in technology
 They offer an unparalleled and ideal opportunity to showcase innovative products to a broad
spectrum of people.`;

interface exhibitions{
    id: string,
    year : string,
    title : string,
    list1 ?:string,
    list2 ?: string,
    list3 ?: string,
    
    // winner: string,
    // runner: string,
    // // register: string,
    // description ?: string,
    image : string,
    // link:string,
    date?:string,
    linki?:string,
    topic?:string
}

export const exhibitions : exhibitions[] =[
    {
        id : "1",
        year:"Dr.Raghunathan rengaswamy",
        linki:"https://youtu.be/RN0wVcigE-w",
        topic:"Data science and its myriad applications",
        date:"16th Jan 9:00-10:00am",

      //   winner:"Winner - Rs. 5,000 Cash + e-certificate",
      //   runner:"1st Runner up - Rs. 2,500 cash + e-cerificates ",
        title : `He is an institute chair professor at the Department of Chemical Engineering, IIT Madras and a core member of the Robert Bosch Center for Data Science and AI. 
        He is currently the dean of global engagement, IIT Madras.  
        
                `,
      //   description:"Submission of visual summary of the main findings of the articles and papers in the fields of data science and artificial intelligence.",
        
      list1:`He is also a fellow of the Indian National Academy of Engineering.
      Prior to this, he was Professor, Chemical Engineering, and co-director of the Process Control and Optimization Consortium (PCOC) at Texas Tech University, Lubbock, TX USA, Associate and full Professor at Clarkson University, Potsdam, NY, and Assistant Professor at IIT Bombay, Mumbai, India.`,
      
      list2:`He has also been a visiting professor at Purdue University, USA, University of Delaware, USA and University of Alberta, Canada.`,
      list3:`His research interests are in the areas of data science, ML and AI and he has been working in these areas for nearly 30 years. He has been involved in the implementation of ML solutions in industries from both IIT Madras and through Gyan Data Pvt. Ltd., an IIT Madras incubated company, where he is one of the co-founders.
      He has also co-founded two other companies through the IIT Madras incubation facility - GITAA Pvt. Ltd. ( a data sciences training company) and Elicius Energy Pvt. Ltd.
`,
      image : ragu,
      //   link:"https://bit.ly/3E3Kv17",
      //   dead:"Deadline: 30th Dec ‘21"
      },
      {
        id : "2",
        year:"Dr. Avisek Lahiri",
        linki:"https://www.youtube.com/watch?v=trtkRWYZCCg",
        topic:"Emerging Opportunities in Data Science",
        date:"13th Jan 5:30-7:00pm",
      //   winner:"Winner - Rs. 15,000 cash + e-certificates ",
      //   runner:"1st Runner up - Rs. 10,000 cash + e-cerificates",
      title : `Dr. Lahiri is currently working at Google Research, USA, where he develops talking human avatars from audio. He holds a PhD and MS from the Indian Institute of Technology Kharagpur.`,     
      list3:`Dr. Lahiri is a frequent writer on Linkedin where he discusses various career opportunities in Artificial Intelligence. `,    list1:`He is a Google PhD Fellow and twice recipient of Qualcomm Innovation Fellowship. Dr. Lahiri was also selected as a Young Researcher at the 7th Heidelberg Laureate Forum, 2019.      `,
      list2:`He has interned across various computer vision roles at Google, Facebook, Twitter.`,
      //   title : "Oral Presentations",
      //   description : `Paper submissions for a new and fascinating idea in the fields of data science and artificial intelligence.  `,
        image : avisek,
      //   link:"https://forms.gle/5GHkayQ3JP748eQq7",
      //   dead:"Deadline: 30th Dec ‘21"
      },
  
  
    
      {
        id : "3",
        year:"Audrey Isabel Pe",
      //   winner:"Winner - Rs. 5,000 Cash + e-certificate",
      //   runner:"1st Runner up - Rs. 2,500 cash + e-cerificates ",
      linki:"https://youtu.be/vSWDFJ84ZZI",
      topic:"Gender and Accessibility gaps in technology",
      date:"14th Jan 9:00-10:00am",
        title : `

        Founder & Executive Director of WiTech (Women in Tech)
        WiTech (@witechorg) is a nonprofit organisation based in the Philippines that aims to educate, inspire, and empower youth to make a difference and break gender barriers using technology.
        
       
                
       
        `,
        list1:` Global Teen Leader 2019`,
        list2:`Winner  of Women in Technology Scholar and Young Women in Public Affairs District Award
        `,
        list3:` She is also a UN & TEDx Speaker and will graduate from stanford in 2024`,
      //   description:"Submission of visual summary of the main findings of the articles and papers in the fields of data science and artificial intelligence.",
        image : isable,
      //   link:"https://bit.ly/3E3Kv17",
      //   dead:"Deadline: 30th Dec ‘21"
      },
    //   {
    //     id : "4",
    //     year:"Mr. Amit Goyal",
    //   //   winner:"Winner - Rs. 5,000 Cash + e-certificate",
    //   //   runner:"1st Runner up - Rs. 2,500 cash + e-cerificates ",
    //     title : `Amit is currently heading edX for India & South East Asia. edX is the world’s largest non-profit E-Learning portal founded by MIT & Harvard University. 

        
         
    //       `,
    //     list1:`Prior to edX, Amit used to head Education Solutions Business for Samsung India and has launched various education mobility products, the likes of what we see as Byju's App today.
    //     `,
    //     list2:`Amit holds a Master’s Degree from Oxford Brookes University-Oxford, and has led various executive roles in leading technology companies globally.
    //     `,
    //     list3:` He is a firm believer of frugal innovation and was also known as the man behind launching the worlds’ cheapest Tablet PC Aakash- ‘A project commissioned by Government of India’.
    //     `,
    //   //   description:"Submission of visual summary of the main findings of the articles and papers in the fields of data science and artificial intelligence.",
    //     image : amit,
    //   //   link:"https://bit.ly/3E3Kv17",
    //   //   dead:"Deadline: 30th Dec ‘21"
    //   },
      {
        id : "4",
        year:"Dr. Sriraam Natarajan",
      //   winner:"Winner - Rs. 15,000 cash + e-certificates ",
      //   runner:"1st Runner up - Rs. 10,000 cash + e-cerificates",
      linki:"https://youtu.be/adYPfGnaTbk",
      topic:" Human-allied AI",
      date:"15th Jan 7:30-9:00pm",
      title : `Director, Center for ML at The University of Texas at Dallas
      `,     list1:` Professor at University of Texas at Dallas. Prior to this he was a faculty member at Indiana University, School of Informatics and Computing and at Wake Forest Baptist Medical Center, Translational Science Institute. `,
      list2:` He has completed his PhD working with Professor Prasad Tadepalli in the School of EECS department of Oregon State University. 
      Adjunct professor at dept of computer science in IITM.
          `,
      list3:`His research interests lie in the fields of Artificial Intelligence and Machine Learning and their application to Biomedical problems. More specifically interested in the areas of Relational Learning, Reinforcement Learning, Graphical Models, Causal Models and Planning.
      `,
      //   title : "Oral Presentations",
      //   description : `Paper submissions for a new and fascinating idea in the fields of data science and artificial intelligence.  `,
        image : sriram,
      //   link:"https://forms.gle/5GHkayQ3JP748eQq7",
      //   dead:"Deadline: 30th Dec ‘21"
      },
     
    // {
    //   id : "4",
    //   year:"2018",
    //   title : "Bike Expo",
    //   description : "Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo.",
    //   image : EXHB8
    // },
    // {
    //   id:"4"s,
    //   year : "2019",
    //   title:"International Expo",
    //   description : `Shaastra for the first time ever, presents International Exhibitions, in association with the US Consulate General of Chennai. 
    //   The International Exhibits was on three broad perspectives – Academics, Research and Business. `,
    //   image : EXHB7
    // },
    // {
    //   id:"5",
    //   year : "2020",
    //   title:"Defence Expo",
    //   description:`The Defence Expo was an exhibition of the products of nascent defence technology start-ups,established
    //   manufacturers,Defence PSUs and the Indian Armed Forces.It was conducted over the course of the 4 days of Shaastra 2020.
    //   The Expo provided exposure to Defence Technology for the audience.`,
    //   image : EXHB6
    // }
  ];
