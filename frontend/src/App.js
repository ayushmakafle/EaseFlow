// import './App.css';
// import { Container } from 'react-bootstrap';
// import 'react-calendar/dist/Calendar.css';

// import Footer from './components/footer';
// import Navbar from './components/Navbar';
// import HomepageScreen from './screens/HomepageScreen'
// import EcomHeader from './components/EcomHeader'; 
// import EcomHomeScreen from './screens/EcomHomeScreen';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProductScreen from './screens/ProductScreen';
// import ProductDetails from './screens/ProductDetails';

// function App() {
//   return (
//     <Router>
//       <main className='m-0 w-100' style={{height:"95vh"}}>
//           <Routes>
//              <Route path="/" Component={HomepageScreen} exact/>
//              <Route path="/ecommerce" Component={EcomHomeScreen} exact/>

//             <Route path='/product/:id' Component={ProductDetails}/>
//           </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Container } from 'react-bootstrap';
import footer from './components/footer';
import EcomHomeScreen from './screens/EcomHomeScreen';
import EcomHeader from './components/EcomHeader'; 
 import ProductScreen from './screens/ProductScreen';
 import ProductDetails from './screens/ProductDetails';

import HomepageScreen from './screens/HomepageScreen';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Moment from 'react-moment';
import './App.css'; // Ensure the CSS file path is correct
import { pink } from 'color-name';

function App() {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState('28');

  const date = value;
  const cycleLength = parseInt(cycle);

  const handleCycleChange = (e) => {
    cycleValue(e.target.value);
  };

  return (
    <Router>
      <div className="app-wrapper">
        <main className="content">
          <Routes>
            {/* <Route path="/" element={<HomepageScreen />} /> */}
             <Route path="/" Component={HomepageScreen} exact/>
              <Route path="/ecommerce" Component={EcomHomeScreen} exact/>
             <Route path='/product/:id' Component={ProductDetails}/>
           
          </Routes>



          <div className="text-center" style={{marginTop:'50px',fontFamily:'Arial,sans-serif',color:'black',fontSize:'20px',fontWeight:'bolder'}}>
            <label htmlFor="cycle">Select your Cycle Length :</label>
            <select 
		onChange={(e) => cycleValue(e.target.value)} 
 		defaultValue={cycle} 
 		className="m-2"
 		> 
 		<option value="28">28</option> 
 		<option value="29">29</option> 
 		<option value="30">30</option> 
 		<option value="31">31</option> 
 		<option value="32">32</option> 
 		<option value="33">33</option> 
 		<option value="34">34</option> 
 		<option value="35">35</option> 
 		<option value="36">36</option> 
 		<option value="37">37</option> 
 		<option value="38">38</option> 
 		<option value="39">39</option> 
 		<option value="40">40</option> 
 		<option value="41">41</option> 
 		<option value="42">42</option> 
		<option value="43">43</option> 
 		<option value="44">44</option> 
 		<option value="45">45</option> 
 		</select> 
          </div>

          <div className="text-center"style={{fontWeight:'bold',marginTop:'20px',marginBottom:'10px'}}>Select Your Last Period Start Date from the Calendar</div>

          <div className="d-flex justify-content-center">
            <Calendar onChange={onChange} value={value} className="calendar mt-0" />
          </div>
          <div className="text-center mt-4 p-2">
  <div className="row">
    <div className="d-flex justify-content-center">
      <div className="col-md-3 m-3 box date-animation">
        <p className="box" style={{ fontWeight: 'bold' }}>Next Period</p>
        <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
          {date}
        </Moment>
      </div>
      <div className="col-md-3 m-3 box date-animation">
        <p className="box" style={{ fontWeight: 'bold',marginRight:'2' }}>Approximate Ovulation Day</p>
        <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 - 14 }}>
          {date}
        </Moment>
      </div>
    </div>
  </div>
</div>
        </main>
        <footer />
      </div>
    </Router>
    
  );
}

export default App; 











