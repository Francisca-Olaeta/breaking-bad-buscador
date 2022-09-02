import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Buscador = ({busqueda, setBusqueda}) => {

    //Función para capturar el input del buscador
    const capturarInputPersonaje = (e) => {
        {setBusqueda(e.target.value)};
        console.log(e.target.value);
    }

//------------------------------------------------------------------------------------------------
  return (
    <>
    <div>
        <Navbar bg="dark" variant="dark" className="p-4" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-3 text-white ms-5'></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
        
            <NavDropdown onChange={} title="Ordenar por nombre" id="navbarScrollingDropdown">
              <NavDropdown.Item className="ascendente" href="#action3">De la A-Z</NavDropdown.Item>
              <NavDropdown.Item className="descendente" href="#action4">De la Z-A</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="BreakingBad" href="#action5">Breaking Bad</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="BetterCallSaul" href="#action6">Better Call Saul</NavDropdown.Item>
            </NavDropdown>
          
          </Nav>
          <Form >
            <Form.Control
            onChange={capturarInputPersonaje}
            value={busqueda}
            name="buscadorPersonaje"
            type="search"
            placeholder="Encuentra al personaje"
            className="me-5 form-control-lg justify-content-center"
            aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}


export default Buscador