import './App.css';
import {Container} from 'react-bootstrap';
import Footer from './components/footer';
import Header from './components/Header';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <>
    <Header />
    <main className='my-3'>
    <Container>
      <HomeScreens />
    </Container>
    </main>
    
    <Footer />
    </>
  );
}

export default App;
