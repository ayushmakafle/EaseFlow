// import React from 'react';
// import Navbar from '../components/Navbar';
// import Calendar from "react-calendar";
// import "./HomepageScreen.css"
// const HomepageScreen = () => {
//   return (
//     <div className="home-page">

//     <div>
//         <Navbar/>
//         {/* <Calendar/> */}
// </div>
// </div>

//   );
// };

// export default HomepageScreen ;

import React from 'react';
import Navbar from '../components/Navbar';
import Calendar from "react-calendar";
import "./HomepageScreen.css";

const HomepageScreen = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );
};

export default HomepageScreen;
