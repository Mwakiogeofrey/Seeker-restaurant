
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div>
    <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand >
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              Seeker Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href="/menu" className='active text-uppercase'>Menu </Nav.Link>
              <Nav.Link href="/about" className='active text-uppercase'>About</Nav.Link>
              <Nav.Link href="/contact" className='active text-uppercase'>Contact</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
  
      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Geofrey Killeta </p>
      </footer>
   
      </div>
  );
}

export default App;
