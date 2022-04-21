import { Container, Navbar, Nav } from 'react-bootstrap';
import style from './MainNavigation.module.css';
import image from '../../images/pokeinfoLogo.png';





function MainNavigation(props) {

  return (
    <Navbar collapseOnSelect expand="lg" className={style.colored} variant="light" sticky='top' >
      <Container>
        <Navbar.Brand href="/">
          <img
            src={image}
            width="120"
            height="40"
            className="d-inline-block align-top"
            alt="PokeInfo logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          {props.user ? (
            <Nav>
              <Nav.Link href="/user">{props.user.name}</Nav.Link>
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
    </Navbar >
  );
}











export default MainNavigation;
