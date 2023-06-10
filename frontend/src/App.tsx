import Header from './ecommerce/components/Header';
import Footer from './ecommerce/components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterUser from './user/RegisterUser';
import LoginUser from './user/LoginUser';
import Detail from './ecommerce/pages/Detail';
import CheckOut from './ecommerce/pages/CheckOut';
import Home from './portfolio/Home';
import OrderCompleted from './ecommerce/pages/OrderCompleted';
import Container  from 'react-bootstrap/Container';
import StoreHome from './ecommerce/pages/Home';
import FitnessHome from './fitness/pages/Home';

function App() {

  return (
    <>
        <Header/>
        <Container fluid as='main'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/store' element={<StoreHome/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path='/store/checkout' element={<CheckOut/>}/>
            <Route path='/store/item/:id' element={<Detail/>}/>
            <Route path='/store/order_completed' element={<OrderCompleted/>}/>
            <Route path='/fitness' element={<FitnessHome/>}/>
          </Routes>
        </Container>
        <Footer/>
    </>
  )
}

export default App;

