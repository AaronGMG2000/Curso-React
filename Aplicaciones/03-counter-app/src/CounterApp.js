import React, {useState} from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value = 10}) => {
    //handleAdd
    const [counter, setCounter] = useState(value);

    const handleAdd = (e)=>{
        // setCounter( counter+1);
        setCounter((c)=>c+1);
    }

    const handleSub = (e)=> setCounter((c)=>c-1);

    const handleReset = (e)=> setCounter((c)=>value);
    
    return (
        <>
            <h1>ConterApp</h1>
            <h2>{counter}</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSub }>-1</button>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp
