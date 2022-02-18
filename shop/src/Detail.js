import React from "react";
import { NavItem } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";

import "./App.css";

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();
  let item = props.shoes.find((item) => item.id == id);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              ((id % 10) + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">
            {item.title}
          </h4>
          <p>
            {item.content}
            
          </p>
          <p>{item.price}원</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/pricing");
            }}
          >
            주문하기
          </button>
          &nbsp;
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
