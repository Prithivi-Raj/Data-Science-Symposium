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

import thesis from "./../../../images/3min thesis.jpg";
import abstract from "./../../../images/neonbrand-1-aA2Fadydc-unsplash.jpg";
import oral from "./../../../images/oral presentation.jpg";

export const CauroselImages = [thesis,abstract,oral];

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
    winner: string,
    runner: string,
    // register: string,
    description ?: string,
    image : string,
    link:string,
    dead:string,
}

export const exhibitions : exhibitions[] =[
    {
      id : "1",
      year:"Prizes",
      winner:"Winner - Rs. 15,000 cash + e-certificates ",
      runner:"1st Runner up - Rs. 10,000 cash + e-cerificates",

      title : "Oral Presentations",
      description : `Paper submissions for a new and fascinating idea in the fields of data science and artificial intelligence.  `,
      image : oral,
      link:"https://forms.gle/5GHkayQ3JP748eQq7",
      dead:"Deadline: 9th Jan ‘22"
    },
    {
      id : "2",
      year:"Prizes",
      winner:"Winner - Rs. 10,000 Cash + e-certificate",
      runner:"1st Runner up - Rs. 7,500 cash + e-cerificates",
      title : " 3-min thesis presentation",
      description:`Submission of a video presenting max 5-slide presentations for thesis in the fields of data science and artificial intelligence.
      `,
      image : thesis,
      link:"https://bit.ly/3E1Nkj9",
      dead:"Deadline: 9th Jan ‘22"
    },
    {
      id : "3",
      year:"Prizes",
      winner:"Winner - Rs. 5,000 Cash + e-certificate",
      runner:"1st Runner up - Rs. 2,500 cash + e-cerificates ",
      title : "Graphical Abstract Presentation",
      description:"Submission of visual summary of the main findings of the articles and papers in the fields of data science and artificial intelligence.",
      image : abstract,
      link:"https://bit.ly/3E3Kv17",
      dead:"Deadline: 9th Jan ‘22"
    },
    // {
    //   id : "4",
    //   year:"2018",
    //   title : "Bike Expo",
    //   description : "Shaastra 2018 unveiled the spectacular technological advancements in motorcycle history with its Bike Expo.",
    //   image : EXHB8
    // },
    // {
    //   id:"4",
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
