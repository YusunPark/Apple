import React, { useState } from 'react';
import './App.css';

function App(){
 
  let [title, setTitle] = useState( ['남자 코트 추천', '강남 우동 맛집'] );
  let [num, setNum ] = useState( [0, 0] );
  let [modal, changeModal] = useState(false);
  let [ck, changeCk] = useState(0);
  let [input, changeInput] = useState('');

  function changeNum(i) {
    var newArray = [...num];
    newArray[i] = num[i] + 1;
    setNum( newArray );
  }

  function sortTile() {
    var newArray = [...title];
    newArray = newArray.sort();
    setTitle(newArray)
  }

  function addList(input) {
    var newArray = [...title];
    newArray.unshift(input);
    setTitle(newArray);

    var newNumber = [...num];
    newNumber.unshift(0);
    setNum(newNumber);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={ ()=>{ changeModal(!modal) } }>모달열고닫기</button>
      <button onClick={ ()=>{ sortTile() } }>가나다 정렬</button>

      {
        title.map(function(title, i) {
          return( 
            <div className="list">
              <h3 onClick={ ()=>{ changeCk(i) } }> { title } <span onClick={ ()=>{ changeNum(i) } } >👍🏻</span> { num[i] }</h3>
              <p>2월 17일 발행</p>
              <hr/>
            </div>
            );
        })
      }

      <div className='publish'>
        <input onChange={ (e)=>{changeInput(e.target.value)} }/>
        <button onClick={ ()=>{ addList(input) } }>저장</button>
      </div>

      {
        modal === true
        ? <Modal title={title} index={ck} />
        : null
      }
      <Profile></Profile>

    </div>
  )
}


class Profile extends React.Component {
  constructor(){
    super();  
    this.state = {name: 'Kein', age:30}
  }

  render() {
    return(
      <div>
        프로맆 {this.state.name}
        <button onClick={ ()=>{ this.setState( {name: 'park'} ) } }>버튼</button>
      </div>
    )
  }

}






function Modal(props) {
  return (
    <div className='modal'>
    <h2> { props.title[props.index] } </h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}


export default App;

