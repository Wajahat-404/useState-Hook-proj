import React from 'react'
import { useState } from 'react';

const Counter = () => {
    const [num, setNum] = useState(0);

  let inc = () => {
    setNum(num + 1);
  }
  let res = () => {
    setNum(num == 0);
  }
  let dec = () => {
    if (num < 1) {
      alert("Sorry! You can't go down the '0'.");
    }
    else {
      setNum(num -1);
    }
  }
  return (
    <div>
        <h2>Counter: {num}</h2>
      <div className="btn">
        <button
          onClick={inc}
          id='btn-1'
          className='primary'>Increment</button>
        <button
          onClick={res}
          id='btn-2'
          className='secondary'>Reset</button>
        <button
          onClick={dec}
          id='btn-3'
          className='primary'>Decrement</button>
      </div>
    </div>
  );
}

export default Counter