import './App.css';
import { Container } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';

import Footer from './components/footer';
// import Navbar from './components/Navbar';
import HomepageScreen from './screens/HomepageScreen'
import EcomHeader from './components/EcomHeader'; 
import EcomHomeScreen from './screens/EcomHomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import ProductDetails from './screens/ProductDetails';
import LoginPage from './screens/LoginPage';
import SignUpPage from './screens/SignUpPage';
import GynecologistLoginPage from './screens/GynecologistLoginPage';
import GynecologistSignUpPage from './screens/GynecologistSignUpPage';
//import Cart from './screens/Cart'; 

function App() {
  return (
    <Router>
      <main className='m-0 w-100' style={{height:"95vh"}}>
          <Routes>
             <Route path="/" Component={HomepageScreen} exact/>
              <Route path="/ecommerce" Component={EcomHomeScreen} exact/>
              <Route path="/login" Component={LoginPage} exact/>
              <Route path="/signup" Component={SignUpPage} exact/>
              <Route path="/GynecologistLogin" Component={GynecologistLoginPage} exact/>
              <Route path="/GynecologistSignUp" Component={GynecologistSignUpPage} exact/>
              
             <Route path='/product/:id' Component={ProductDetails}/>
              {/* <Route path='/cart' Component={Cart} exact/> */}
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
