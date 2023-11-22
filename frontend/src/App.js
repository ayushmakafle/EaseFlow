import './App.css';
import { Container } from 'react-bootstrap';
import Footer from './components/footer';
import EcomHeader from './components/EcomHeader'; 
import EcomHomeScreen from './screens/EcomHomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <Router>
      <EcomHeader />
      <main className='my-3'>
        <Container>
          <Routes>
            <Route path="/" Component={EcomHomeScreen} exact/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
