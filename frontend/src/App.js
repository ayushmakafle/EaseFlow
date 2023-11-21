import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/Header';
import EcomHomeScreen from './screens/EcomHomeScreen';

function App() {
  return (
    <>
    <Header />
    <main className='my-3'>
    <Container>
      <EcomHomeScreen />
    </Container>
    </main>
    
    <Footer />
    </>
  );
}

export default App;
