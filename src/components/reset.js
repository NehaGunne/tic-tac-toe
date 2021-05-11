import React from 'react';

const Reset=(props)=>{
    return(
        <button className='btn' onClick={()=>props.onReset()}>Reset</button>

    )
}
export default Reset;