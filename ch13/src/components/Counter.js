import React from 'react';
import './Counter.css';
import propTypes from 'prop-types';

const Counter = ({...rest}) => {
    const { number, color, onIncrement, onDecrement, onSetColor} = rest;
    
    return (
        <div className="Counter" onClick={onIncrement} onContextMenu={(e)=>{e.preventDefault();onDecrement();}} onDoubleClick={onSetColor} style={{backgroundColor: color}} >
            {number}
        </div>
    );
};

Counter.propTypes = {
    number: propTypes.number,
    color: propTypes.string,
    onIncrement:propTypes.func,
    onDecrement:propTypes.func, 
    onSetColor: propTypes.string
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warning('not defined yet'),
    onDecrement:() => console.warning('not defined yet'),
    onSetColor: () => console.warning('not defined yet'),
};

export default Counter;