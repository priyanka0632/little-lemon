import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import littlelemon from './assets/littlelemon.jpg'
import { Cart } from 'react-bootstrap-icons';
import './navigation.css';
import { Button } from 'react-bootstrap';
import useSticky from './useSticky';
import classNames from 'classnames';


function Navigationbar() {
  const { sticky, stickyRef } = useSticky();
  let navitems =[
    ["Home", "#home"],
    ["About", '#about'],
    ["Menu", '#menu'],
    ["Order Online", '#Order Online'],
    ["Contact us", '#contact us'],
    ["Reservations", '#reservations'],
     ]

  return ( //container is used to place evrything horizontally inside a layout
    <Navbar expand="lg" id='navbar' ref={stickyRef} className={classNames('nav', { sticky })}>
            <Container>
     <img src={littlelemon} alt='logo' id='logo'></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
            <Container>
          <Nav className='nav-items'>
            {navitems.map(ele =>{
              return(
                <Nav.Link id='nav-links' href={ele[2]}>{ele[0]}</Nav.Link>
              )
            })}
            {/**             <Nav.Link id='nav-links' href="#link">About</Nav.Link>
             *             <Nav.Link id='nav-links' href='#menu'>Menu</Nav.Link>
             *             <Nav.Link id='nav-links' href="#orderonline">Order Online</Nav.Link>
             *             <Nav.Link id='nav-links' href="#contactus">Contact Us</Nav.Link>
             *             <Nav.Link id='nav-links' href="#reservations">Reservations</Nav.Link>
*/}
            </Nav>

            </Container>
</Navbar.Collapse>
<Cart id='icon'></Cart>
<Button variant='primary' id='button' className='Button'>Sign In</Button>

      </Container>
    </Navbar>
  );
}

export default Navigationbar;