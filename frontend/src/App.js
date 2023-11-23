import './App.css';
import { Container } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';

import Footer from './components/footer';
import Navbar from './components/Navbar';
import HomepageScreen from './screens/HomepageScreen'
import EcomHeader from './components/EcomHeader'; 
import EcomHomeScreen from './screens/EcomHomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import ProductDetails from './screens/ProductDetails';

function App() {
  return (
    <Router>
      <main className='m-0 w-100' style={{height:"95vh"}}>
          <Routes>
             <Route path="/" Component={HomepageScreen} exact/>
             <Route path="/ecommerce" Component={EcomHomeScreen} exact/>

            <Route path='/product/:id' Component={ProductDetails}/>
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
