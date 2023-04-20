import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from 'react-redux';


function Counter():JSX.Element {
    const value = useSelector((globalState:RootState)=> globalState.counter.value);

    const dispatch = useDispatch();

    function handlePlusClick():void {
        dispatch({ type: 'counter/plus', payload: 1});
    }
    function handleMinusClick():void {
        dispatch({ type: 'counter/minus', payload: 1});
    }
    function handlePlus3Click():void {
        dispatch({ type: 'counter/plus', payload: 3});
    }
    function handleMinus3Click():void {
        dispatch({ type: 'counter/minus', payload: 3});
    }

    return(
        <div>
        <button type="button" onClick={handleMinusClick}>-</button>
        {value}
        <button type="button" onClick={handlePlusClick}>+</button>
        <br />
        <button type="button" onClick={handleMinus3Click}>-3</button>
        <button type="button" onClick={handlePlus3Click}>+3</button>
        </div>
    );
}

export default Counter;