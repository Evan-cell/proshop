import {Container} from 'react-bootstrap'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ProductScreen from './components/screens/ProductScreen';
function App() {
  return (
    <Router className="App">
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/product/:id' component={ProductScreen} exact/>
        </Container>
      </main>
           
      <Footer />
    </Router>
  );
}

export default App;
