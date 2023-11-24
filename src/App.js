import { useState } from 'react';
import './App.css';
import ButtonContainer from './Components/ButtonContainer';

import ButtonContext from "./Context/ButtonContext";

function App() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [state, setState] = useState(true);
  const [op, setOp] = useState("+");
  // const [myState, setMyState] = useState(true);

  function add(p) {
    if(state){
      let k = x;
      k = k*10+p;
      setX(k);
    }else{
      let k = y;
      k = k*10 + p;
      setY(k);
    }
    // setMyState(!myState);
    return ;
  }

  function del(){
    if(state){
      setX(parseInt(x/10))
    }else{
      setY(parseInt(y/10));
    }
    // setMyState(!myState);
    return ;
  }

  function changeState(p){
    setState(false);
    setOp(p);
    // setMyState(!myState);
  }

  function calc(){
    // console.log(x+" "+y+" "+op);
    let ans = 0;
    switch(op) {
      case "+" :
        ans= x+y;
        break;
      case "-" :
        ans = x-y;
        break;
      case "*" :
        ans = x*y;
        break;
      case "/" :
        ans = x/y;
        break;
      default:
        ans = x+y;
        break;
    }
    ac();
    setX(ans);
    // setMyState(!myState);
  }

  function clear(){
    if(state){
      setX(0);
    }else{
      setY(0);
    }
    // setMyState(!myState);
  }

  function handler(op){
    switch(op){
      case "Clr" :
        clear();
        break;
      case "Del" :
        del();
        break;
      case "=" :
        calc();
        break;
      default :
        ac();
    }
    // setMyState(!myState);
  }

  function ac(){
    setX(0);
    setY(0);
    setOp("+");
    setState(true);
    // setMyState(!myState);
  }

  function show(){
    if(state)return x;
    return y;
  }

  return (
    <ButtonContext.Provider value={{add,changeState,handler}}>
      <div className="body">
        <h1 id="title">CALCULATOR</h1>
          <div className='box'>
            {/* <input type='text' id='search-box' key={myState} onChange={show}/> */}
            <div id="search-box">{show()}</div>
            <ButtonContainer />
          </div>
      </div>
    </ButtonContext.Provider>
  );
}

export default App;
