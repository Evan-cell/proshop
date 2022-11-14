import {Container} from 'react-bootstrap'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='py-5'>
        <Container>
          <h1>proshop</h1>
        </Container>
      </main>
           
      <Footer />
    </div>
  );
}

export default App;
