import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from '../src/Actions'; 
import Drop from './components/form';


function App() {
  const counter = useSelector(state =>state.counter);
  const isLogged = useSelector(state =>state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      
  <h1>Hello {counter}</h1>
  <button onClick={()=>{dispatch(increment(5))}}>+</button>
  <button onClick={()=>{dispatch(decrement(5))}}>-</button>
  {isLogged&&<h3>dasdsadsa</h3>} 
  <Drop></Drop>
    </div>
  );
}

export default App;
