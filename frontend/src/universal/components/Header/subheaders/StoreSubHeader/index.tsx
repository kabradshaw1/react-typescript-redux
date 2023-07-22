import React from "react";
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RootState } from '../../../../../store';

const StoreHeader: React.FC = () => {

  const cart = useSelector((state: RootState) => state.cart);
  const isLoggedIn = useSelector((state: RootState) => state.auth.account);

  const getCartQauntity = () => {
    let total = 0;
    cart.value.forEach(item=> {
      total += item.cartQty
    });
    return total;
  };

  return (
    <Navbar bg='light' className='sticky-top subheader'>
      <Container>
          <LinkContainer to='/store'>
            <Navbar.Brand>Store</Navbar.Brand>
          </LinkContainer>
          <Nav className="ms-auto">
            {isLoggedIn
              ? <LinkContainer to='/checkout'>
                  <Nav.Link>Checkout <AiOutlineShoppingCart/>: {getCartQauntity() | 0} </Nav.Link>
                </LinkContainer>: null
            }
          </Nav>
      </Container>
    </Navbar>
  )
};

export default StoreHeader;