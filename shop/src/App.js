/*eslint-disable*/

import React, { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";
import Data from "./data.js";
import Detail from "./Detail";

function App() {
  let [shoes, changeShoes] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">YuuShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/detail">Detail</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/">My Page</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        
        <Route exact path="/">
          <div className="jumbotron">
            <h2>20% off</h2>
            <div>
              <span>asdfasdfasdfadfasdf</span>
            </div>
            <Button variant="primary">Primary</Button>{" "}
          </div>
          <div className="container">
            <div className="row">
              {shoes.map((item, i) => {
                return <Item item={item} i={i} />;
              })}
            </div>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>
        <Route path="/:id">
          <div>아무거나 적었을때 이거 보이주기!</div>
        </Route>
      </Switch>
    </div>
  );
}

function Item(props) {
  return (
    <div className="col-md-4">
      <div className="col-c">
        <img
          src={
            "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
          }
          width="100%"
        />
        <h4>{props.item.title}</h4>
        <p>
          {props.item.content} & {props.item.price}
        </p>
      </div>
    </div>
  );
}

export default App;
