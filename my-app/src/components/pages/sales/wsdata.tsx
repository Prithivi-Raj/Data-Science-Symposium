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

import avisek from "./../../../images/chapin rodriguez.jpg";
// import amit from "./../../../images/amit goyal.jpg";
// import isable from "./../../../images/isabel pe.jpg";
// import ragu from "./../../../images/raghunathan rangeswamy.jpg";
// import shourya from "./../../../images/shourya roy.jpg";
// import isable from "./../../../images/isabel pe.jpg";

export const CauroselImages = [avisek];

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
    // winner: string,
    // runner: string,
    // // register: string,
    // description ?: string,
    image : string,
    // link:string,
    // dead:string,
}

export const exhibitions : exhibitions[] =[
    {
      id : "1",
      year:"Avisek Lahiri",
    //   winner:"Winner - Rs. 15,000 cash + e-certificates ",
    //   runner:"1st Runner up - Rs. 10,000 cash + e-cerificates",
    title : "Masters in Machine learning and Computer Vision at IIT Kharagpur with work focused on combining boosted classifiers on multiple feature spaces to generate a superior meta learner. He has also received Qualcomm Innovation Fellowship (Super Winner). He Has several publications like Prior Guided GAN Based Semantic Inpainting and many other in the the fields of deep learning, computer vision and machine learning.Now he is currently a research software engineer on Data-Efficient Learning of Personalized 3D Talking Faces from Video using Pose and Lighting Normalization at GOOGLE",


    //   title : "Oral Presentations",
    //   description : `Paper submissions for a new and fascinating idea in the fields of data science and artificial intelligence.  `,
      image : avisek,
    //   link:"https://forms.gle/5GHkayQ3JP748eQq7",
    //   dead:"Deadline: 30th Dec ‘21"
    },
 
  ];
