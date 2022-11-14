import {Container} from 'react-bootstrap'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-5'>
        <Container>
          <HomeScreen />
        </Container>
      </main>
           
      <Footer />
    </div>
  );
}

export default App;
