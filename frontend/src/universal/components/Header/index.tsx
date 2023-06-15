import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import authSlice from '../../../store/slices/authSlice';
import FitnessHeader from './subheaders/FitnessSubHeader';
import StoreHeader from './subheaders/StoreSubHeader';
import PortfolioHeader from './subheaders/PortfolioSubHeader';

export default function Header() {

  const isLoggedIn = useSelector((state: RootState) => state.auth.account);

  const location = useLocation();

  const renderSubHeader = () => {
    switch (location.pathname) {
      case '/':
        return <PortfolioHeader />;
      case '/fitness/':
        return <FitnessHeader />;
      case '/store/':
        return <StoreHeader />;
      default:
        return null;
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate('/login');
  };

  return (
    <Container fluid className='sticky-top header' as='header'>
      <Row className="g-0">
        <Col>
          <Navbar bg="light" expand="lg" >
            <Container>
              <LinkContainer to=''>
                <Navbar.Brand>Kyle's Portfolio</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  {isLoggedIn
                    ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    : <LinkContainer to='/login'>
                        <Nav.Link>Login</Nav.Link>
                      </LinkContainer>
                  }
                  <LinkContainer to='register'>
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <LinkContainer to='/order_completed'>
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item href="#action/3.2">
                      Free Space
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Fill Me!
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col>
          {renderSubHeader()}
        </Col>
      </Row>
    </Container>
  )
};
