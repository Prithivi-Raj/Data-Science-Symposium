
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
// import { FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";
import shaastraLogo from "./../../../images/Shaastra 2022 logo White_tr.png";
import elslogo from "./../../../images/elsevier-logo.jpg";
import { Center,Link } from "@chakra-ui/react";

import "./../../../styles/sheader.css";



function Header() {
  const [header, setHeader] = React.useState(false);

// const Header = () => {
//   const history = useHistory();

  return (
    // <header className="bg-blue-300 px-40 py-5 flex items-center justify-between">
    //   <h1
    //     onClick={() => history.push("/")}
    //     className="text-white text-3xl font-bold cursor-pointer"
    //   >
    //     SHAASTRA 2022 MERCHANDISE SALE
    //   </h1>
    //   <p
    //     className="text-white font-medium text-lg cursor-pointer"
    //     onClick={() => history.push("/cart")}
    //   >
    //     Cart
    //   </p>
    // </header>

   
   
    <div className="Header">
    <Link href="https://www.shaastra.org/" target={'_blank'}>
      <img src={shaastraLogo} alt=""  />
    </Link>
   
    {/* <button onClick={() => setHeader(!header)}>
      <FaBars />
    </button> */}
   {/* <div className="kk"> */}
      <Center className="kk">Data Science Symposium</Center>
      {/* <Link to="/">
      <img src={elslogo} alt=""  />
    </Link> */}
      {/* </div> */}
      </div>
  
  );
}

export default Header;
