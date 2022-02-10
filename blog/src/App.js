import React, { useState } from 'react';
import './App.css';

function App(){
 
  let [title, setTitle] = useState( ['남자 코트 추천', '강남 우동 맛집'] );
  let [num, setNum ] = useState( [0, 0] );
  let [modal, changeModal] = useState(false);
  let index = [0,1];

  function changeNum(i) {
    var newArray = [...num];
    newArray[i] = num[i] + 1;
    setNum( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={ ()=>{ changeModal(!modal) } }>모달열고닫기</button>

      {
        index.map(function(a) {
          return( 
            <div className="list">
              <h3> { title[a] } <span onClick={ ()=>{ changeNum(a) } } >👍🏻</span> { num[a] }</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
            );
        })
      }

      {
        modal === true
        ? <Modal title={title} />
        : null
      }


    </div>
  )
}

function Modal(props) {
  return (
    <div className='modal'>
    <h2> { props.title[0] } </h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;

