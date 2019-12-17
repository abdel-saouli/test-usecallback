import React, { Component, useCallback, useState } from 'react';
import { render } from 'react-dom';
import { useHistory, BrowserRouter } from 'react-router-dom';
import Hello from './Hello';
import './style.css';

const  App = () => {
const [name, setName] = useState("Hi guys, you want to understand the useCallback")
const history = useHistory()
const [count, setCount] = useState(0)
const [path, setPath] = useState(0)

const myFunction = useCallback((x1)=> {
   history.push(x1)
   setCount((count)=> count + 1)
  },[history])
  
    return (
      <div>
        <Hello name={name} />
        <p>
          Start editing to see some magic happen :) 
        </p>
        <div>{count}</div>
        <button onClick={()=>myFunction()}> +1</button>
        <button onClick={()=>myFunction("/1" + path , count, 33)}> push a path</button>
        <button onClick={()=>setPath((path)=> path +1)}> incrémenter path</button>
      </div>
    );
  }

render(
  	<BrowserRouter><App />	</BrowserRouter>, document.getElementById('root'));
