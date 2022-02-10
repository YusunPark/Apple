import React, { useState } from 'react';
import './App.css';

function App(){
 
  let [title, setTitle] = useState( ['남자 코트 추천', '강남 우동 맛집'] );
  let [ num, setNum ] = useState(0);

  let [modal, changeModal] = useState(false);

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle( newArray );
  }

  function changeTitle() {
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    setTitle( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
    
      {
        title.map(function(a) {
          return( 
            <div className="list">
              <button onClick={ changeTitle }> 수정버튼 </button>
              <h3> { a } <span onClick={ ()=>{ setNum(num + 1) } } >👍🏻</span> { num }</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
            );
        })
      }

      <button onClick={ ()=>{ changeModal(!modal) } }>모달버튼</button>
      {
        modal === true
        ? <Modal />
        : null
      }


    </div>
  )
}

function Modal() {
  return (
    <div className='modal'>
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;

