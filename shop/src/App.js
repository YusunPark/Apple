import React from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YuuShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="jumbotron">
        <h2>20% Seal off</h2>
        <div>
          <span>asdfasdfasdfadfasdf</span>
        </div>
        <Button variant="primary">Primary</Button>{" "}
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="col-c">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
              <h4>상품명</h4>
              <p>상품설명 / 가격</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-c">
              <img
                src="https://codingapple1.github.io/shop/shoes2.jpg"
                width="100%"
              />
              <h4>상품명</h4>
              <p>상품설명 / 가격</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="col-c">
              <img
                src="https://codingapple1.github.io/shop/shoes3.jpg"
                width="100%"
              />
              <h4>상품명</h4>
              <p>상품설명 / 가격</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
