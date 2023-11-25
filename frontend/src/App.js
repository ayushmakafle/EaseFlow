import './App.css';
import { Container } from 'react-bootstrap';
import 'react-calendar/dist/Calendar.css';
import Footer from './components/footer';
import EcomHeader from './components/EcomHeader';
import HomepageScreen from './screens/HomepageScreen';
import EcomHomeScreen from './screens/EcomHomeScreen'; 
import ProductDetails from './screens/ProductDetails'; 
import CartScreen from './screens/CartScreen';
import ProductScreen from './screens/ProductScreen'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main className='m-0 w-100' style={{height:"95vh"}}>
          <Routes>
             <Route path="/" element={<HomepageScreen />} exact/>
             <Route path="/ecommerce" element={<EcomHomeScreen />} exact/>
             <Route path='/product/:id' element={<ProductDetails />} />
             <Route path='/cartscreen' element={<CartScreen />} />
          </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
