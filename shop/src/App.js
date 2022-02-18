/*eslint-disable*/

import React, { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

import "./App.css";
import Data from "./data.js";

function App() {
  let [shoes, changeShoes] = useState(Data);

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
          {shoes.map((item, i)=>{
            return <Item item={item} i={i}/>;
          })}
        </div>
      </div>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <div className="col-c">
        <img
          src= {"https://codingapple1.github.io/shop/shoes"+ (props.i + 1) +".jpg"}
          width="100%"
        />
        <h4>{props.item.title}</h4>
        <p>{props.item.content} & {props.item.price}</p>
      </div>
    </div>
  );
}

export default App;
