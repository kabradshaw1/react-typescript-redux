import Header from './ecommerce/components/Header';
import Footer from './ecommerce/components/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import RegisterUser from './user/RegisterUser';
import LoginUser from './user/LoginUser';
import Home from './ecommerce/pages/Home';
import Detail from './ecommerce/pages/Detail';
import CheckOut from './ecommerce/pages/CheckOut';
import PortfolioAbout from './portfolio/PortfolioAbout';
import OrderCompleted from './ecommerce/pages/OrderCompleted';
import Container  from 'react-bootstrap/Container';


function App() {

  return (
    <>
        <Header/>
        <Container fluid as='main'>
          <Routes>
            <Route path='/' element={<PortfolioAbout/>}/>
            <Route path='/store' element={<Home/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path='/store/checkout' element={<CheckOut/>}/>
            <Route path='/store/item/:id' element={<Detail/>}/>
            <Route path='/store/order_completed' element={<OrderCompleted/>}/>
          </Routes>
        </Container>
        <Footer/>
    </>
  )
}

export default App;

