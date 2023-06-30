import React from 'react'
import propTypes from 'prop-types';

// We can get props by two methods: 
// 1. With "props" keyword in the parameter of function
// 2. By the object destructuring e.g, ({prop1, prop2})

const Props = (props) => {
  return (
    <div >
        {/* <div className="prop-1">
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        </div> */}

        <div className="prop-2">
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        </div>
    </div>
  );
}
// Type of Inputs will be given to the components
Props.propTypes = {
  name: propTypes.string,
  age: propTypes.number
}
// Default prop types.
Props.defaultProps = {
  name: "Name",
  age: 0
}
export default Props