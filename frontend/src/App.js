import {Container} from 'react-bootstrap'

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './components/screens/HomeScreen';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ProductScreen from './components/screens/ProductScreen';
import CartScreen from './components/screens/CartScreen';
import LoginScreen from './components/screens/LoginScreen';
import RegisterrScreen from './components/screens/RegisterrScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import ShippingScreen from './components/screens/ShippingScreen';


function App() {
  return (
    <Router className="App">
      <Header />
      <main className='py-5'>
        <Container>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/login' component={LoginScreen} />
          <Route path='/profile' component={ProfileScreen} />
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/register' component={RegisterrScreen} />
          <Route path='/product/:id' component={ProductScreen} exact/>
          <Route path='/Cart/:id?' component={CartScreen} exact/>
        </Container>
      </main>
           
      <Footer />
    </Router>
  );
}

export default App;
