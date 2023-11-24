// // import React from 'react';
// // import Navbar from '../components/Navbar';
// // import Calendar from "react-calendar";
// // import "./HomepageScreen.css"
// // const HomepageScreen = () => {
// //   return (
// //     <div className="home-page">

// //     <div>
// //         <Navbar/>
// //         {/* <Calendar/> */}
// // </div>
// // </div>

// //   );
// // };

// // export default HomepageScreen ;

// import React from 'react';
// import Navbar from '../components/Navbar';
// import Calendar from "react-calendar";
// import "./HomepageScreen.css";

// const HomepageScreen = () => {
//   return (
//     <div className="home-page">
//       <Navbar />
//       <div className="calendar-container">
//         <Calendar />
//       </div>
//     </div>
//   );
// };

// export default HomepageScreen;

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Calendar from 'react-calendar';
import './HomepageScreen.css';

const HomepageScreen = () => {
  const [value, onChange] = useState(new Date());
  const [periodDates, setPeriodDates] = useState([]);

  const calculatePeriodDates = (currentDate) => {
    const currentMonth = currentDate.getMonth();
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(currentMonth + 1);

    // Calculate regular period days for current month
    const currentMonthPeriodDays = Array.from({ length: 4 }, (_, i) => new Date(currentDate.getFullYear(), currentMonth, 5 + i));
    // Calculate predicted period days for next month
    const nextMonthPeriodDays = Array.from({ length: 5 }, (_, i) => new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 5 + i));

    setPeriodDates([...currentMonthPeriodDays, ...nextMonthPeriodDays]);
  };

  const tileClassName = ({ date }) => {
    const dateString = date.toISOString().split('T')[0];

    if (periodDates.some(periodDate => periodDate.toISOString().split('T')[0] === dateString)) {
      // Check if the date is a period date
      return 'period-date';
    } else if (date.getDate() >= 5 && date.getDate() <= 9) {
      // Check if it's a predicted date for the following month
      return 'predicted-date';
    } else {
      return null;
    }
  };

  React.useEffect(() => {
    calculatePeriodDates(value);
  }, [value]);

  return (
    <div className="home-page">
      <Navbar />
      <div className="calendar-container">
        <Calendar tileClassName={tileClassName} />
      </div>
      
    </div>
  );
};

export default HomepageScreen;
