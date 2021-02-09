import React from "react";
import NavigationBar from "./Navbar";
import Searchbar from "./Searchbar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
  const styling = {background: "linear-gradient(45deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"};
  return(
    <React.Fragment>
      <Container fluid style={styling}>
        <Row>
          <Col md={6}><NavigationBar /></Col>
          <Col md={6}><Searchbar /></Col>
        </Row>
      </Container>
      <hr/>
    </React.Fragment>
  );
}

export default Header;

