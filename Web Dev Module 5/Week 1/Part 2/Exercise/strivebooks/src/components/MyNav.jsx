import {Navbar,Nav} from 'react-bootstrap'

const MyNav =() => (
    <Navbar bg="dark" variant="dark">
 
    <Navbar.Brand href="#home" className="ms-3">Strivebooks</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#browse">Browse</Nav.Link>
    </Nav>
  
  </Navbar>
)


export default MyNav