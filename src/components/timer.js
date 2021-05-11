import React from 'react';

const Timer=(props)=>{
    let style={
        border:'1px solid black',
        height:'20px',
        width:'50px',
        textAlign:'center',
        margin:'20px',
        borderRadius:'5px'
    }
    return(
        <div >
            <p style={style} id={props.id}>00:0{props.time}</p>
        </div>
    )
}

export default Timer;