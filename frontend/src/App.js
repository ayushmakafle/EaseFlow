import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/Header';
import EcomHomeScreen from './screens/EcomHomeScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Router>
    <main className='my-3'>
    <Container>
       <Routes>
          <Route path='/' element={<EcomHomeScreen />} />
        </Routes>
    </Container>
    </main>
    </Router>
    <Footer />
    </>
  );
}

export default App;
