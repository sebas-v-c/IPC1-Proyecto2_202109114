import { Container, Navbar, Nav } from 'react-bootstrap';





function MainNavigation(props) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
      <Container>
        <Navbar.Brand href="/">PokeInfo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          {props.user ? (
            <Nav>
              <Nav.Link href="/pokedex">{props.user.name}</Nav.Link>
              <Nav.Link href="/pokedex">Pokedex</Nav.Link>
              <Nav.Link href="/" onClick={props.onClick}>
                Log Out
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link href="/login" >Log In</Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}











export default MainNavigation;