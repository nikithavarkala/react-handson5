import './style.css';
import HOC from './higherOcomp/hocInfo';
import PureCompInfo from './pureComp/pureCompInfo';
import CountH from "./higherOcomp/counterH";
import CountC from './higherOcomp/counterC';
import PureCountC from './pureComp/pureCountC';
import PureCountH from './pureComp/pureCountH';
import { useState } from 'react';

function App() {
  const [show,setShow]=useState(true);
  const[pure,setPure]=useState(true);

  const click=()=>{
    setShow(!show);
  }

  return (
  <>
    <header>
    <h1>Higher Order Components</h1>
    <i onClick={click} style={{cursor:'pointer',color:'red'}}>more-info..</i>
    </header>
    {show ?
      <div className="App">
          <CountH/>
          <div>
          <CountC/>
          </div>
      </div>
    : <HOC/>
    }
    <h1>Pure Components</h1>
    <i onClick={()=>{setPure(!pure)}} style={{cursor:'pointer',color:'red'}}>more-info..</i>
    {pure ?
    <div className="pdiv">
      <PureCountC/>
      <PureCountH/>
    </div>
    : <PureCompInfo />}
  </>
  );
}

export default App;
