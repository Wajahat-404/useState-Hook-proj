import React, { useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    // useState(()=>{
    //     alert('useState Called.')
    // })
  return (
    <div>
        <button onClick={setCount(count+1)}>Click Me{count}</button>
    </div>
  )
}

export default UseEffectHook