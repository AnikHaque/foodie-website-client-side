import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Header = () => {
    const {user,logout,admin} = useAuth();
    return (
        <div>
            {/* <Link to="/" className='mx-2'>Home</Link>
            <Link to="/shipping" className='mx-2'>Shipping</Link>
            <Link to="/register" className='mx-2'>Register</Link>
            <Link to="/login" className='mx-2'>Login</Link>
<span>{user.name}</span>
           { user?.email && <button onClick={logout}>LogOut</button>} */}

           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><b className='fw-bold fs-3'>FOODIE</b></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/home" className='mx-2'>Home</Nav.Link>
      <Nav.Link as={Link} to="/details" className='mx-2'>About</Nav.Link>
      <Nav.Link as={Link} to="/menu" className='mx-2'>Menu</Nav.Link>
      <Nav.Link as={Link} to="/reservation" className='mx-2'>Reservation</Nav.Link>
      <Nav.Link as={Link} to="/gallary" className='mx-2'>Gallary</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      
      
    </Nav>
    <Nav>
    
    {
      admin && 
      <NavDropdown title="Admin Dashboard" id="basic-nav-dropdown" className='mt-2'>
    <Nav.Link as={Link} to="/" className='text-light mx-2 me-2 fw-bold text-center bg-dark'>{user.displayName}</Nav.Link>
    <Nav.Link as={Link} to="/addmenu" className='text-dark fw-bold text-center'>Add Menu</Nav.Link>
    <Nav.Link as={Link} to="/orders" className='text-dark fw-bold text-center'>Manage Orders</Nav.Link>
    <Nav.Link as={Link} to="/makeadmin" className='text-dark fw-bold text-center'>Make Admin</Nav.Link>
        </NavDropdown>
        }

    {
      !admin && user.email &&
      <NavDropdown title="User Dashboard" id="basic-nav-dropdown" className='mt-2'>
    <Nav.Link as={Link} to="/" className='text-light mx-2 me-2 fw-bold text-center bg-dark'>{user.displayName}</Nav.Link>
    <Nav.Link as={Link} to="/myorders" className='text-dark fw-bold text-center'>My Orders</Nav.Link>
        </NavDropdown>
        }
    
    
     { 
!user.email ?
     <Nav.Link as={Link} to="/login">
          <Button className='btn btn-light text-dark'>Login</Button>
          </Nav.Link>
          :
          <Nav.Link as={Link} to="/login">
          <Button onClick={logout} className='btn btn-light text-dark'>LogOut</Button>
          </Nav.Link>

          }
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
           
        </div>
    );
};

export default Header;